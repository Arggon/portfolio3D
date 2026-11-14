import Core from "../src/game.bend";
import { World, PALETTE } from "./scene.js";
import { Sound } from "./audio.js";
import { PROJECTS as SNAPSHOT, GITHUB_USER, GITHUB_URL, CV_URL } from "./fallback.js";

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

const $ = (id) => document.getElementById(id);

function cons(xs) {
  const out = [];
  let node = xs;
  while (node && node.$ === "Con") {
    out.push(node.head);
    node = node.tail;
  }
  return out;
}

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

const store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v === null ? fallback : v;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, String(value));
    } catch {
      /* private mode, fine */
    }
  },
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarse = window.matchMedia("(pointer: coarse)").matches;

/* ------------------------------------------------------------------ */
/* Bend core -> plain JS                                               */
/* ------------------------------------------------------------------ */

const rawLayout = Core.layout();
const layout = {
  room: rawLayout.room,
  start: rawLayout.start,
  desks: cons(rawLayout.desks),
  props: cons(rawLayout.props),
  palette: cons(rawLayout.palette),
};
const palette = layout.palette.length ? layout.palette : PALETTE;
const copy = Core.ui();
const storyLines = cons(Core.story());
const baseProjects = cons(Core.projects());

const prefs = {
  lang: store.get("al.lang", navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en"),
  sound: store.get("al.sound", "off") === "on",
  name: store.get("al.name", ""),
  preset: clamp(Number(store.get("al.preset", "0")) || 0, 0, 2),
  color: clamp(Number(store.get("al.color", "0")) || 0, 0, palette.length - 1),
};

const projects = baseProjects.map((p) => {
  const snap = SNAPSHOT.find((s) => s.name === p.name) || {};
  return {
    name: p.name,
    lang: p.lang,
    es: p.es,
    tags: cons(p.tags),
    fallbackTags: cons(p.tags),
    description: snap.description || "",
    language: snap.language || "code",
    stars: snap.stars || 0,
    topics: snap.topics || [],
    homepage: snap.homepage || "",
    updated: snap.updated || "",
    url: snap.url || `${GITHUB_URL}/${p.name}`,
  };
});

const T = (line) => (line ? line[prefs.lang] : "");
const tagsOf = (p) => (p.topics && p.topics.length ? p.topics : p.tags || []);

/* ------------------------------------------------------------------ */
/* state                                                               */
/* ------------------------------------------------------------------ */

const state = {
  phase: "hero", // hero | story | create | play
  modal: null,
  storyIndex: 0,
  x: layout.start.x,
  y: layout.start.y,
  vx: 0,
  vy: 0,
  facing: Math.PI,
  camYaw: 0,
  camPitch: coarse ? 0.13 : 0.24,
  camDist: coarse ? 7.4 : 5.6,
  blend: 0,
  hovered: -1,
  focus: { idx: -1, can: false },
  target: null,
  pending: null,
  moveSpeed: 300, // cm/s
  onboardingUntil: 0,
};

/* ------------------------------------------------------------------ */
/* world                                                               */
/* ------------------------------------------------------------------ */

let world;
try {
  world = new World($("scene"), layout);
  world.setProjects(projects);
  world.setLang(prefs.lang);
  world.setAvatar({ preset: prefs.preset, color: palette[prefs.color] });
  world.placeAvatar(state.x / 100, state.y / 100, state.facing, 0);
} catch (err) {
  console.error("WebGL unavailable:", err);
  document.querySelectorAll(".screen").forEach((s) => s.classList.add("hidden"));
  $("btn-lang-intro").classList.add("hidden");
  $("screen-fatal").classList.remove("hidden");
  throw err;
}

const sound = new Sound();
sound.enabled = prefs.sound;

/* ------------------------------------------------------------------ */
/* DOM text                                                            */
/* ------------------------------------------------------------------ */

const screenIds = ["screen-hero", "screen-story", "screen-create"];

function showScreen(id) {
  for (const s of screenIds) $(s).classList.toggle("hidden", s !== id);
  $("hud").classList.toggle("hidden", id !== null);
}

function showHud(on) {
  $("hud").classList.toggle("hidden", !on);
  $("btn-lang-intro").classList.toggle("hidden", on);
}

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
}

function applyLang() {
  document.documentElement.lang = prefs.lang;
  const L = (line) => T(line);

  setText("hero-kicker", L(copy.kicker));
  setText("hero-role", L(copy.role));
  setText("hero-intro", L(copy.intro));
  setText("hero-credits", L(copy.credits));
  setText("btn-enter", L(copy.enter));
  setText("btn-hero-skip", L(copy.skip));
  $("hero-github").href = GITHUB_URL;
  $("hero-cv").href = CV_URL;

  const facts = $("hero-facts");
  facts.innerHTML = "";
  for (const text of [
    `${layout.desks.length.toString().padStart(2, "0")} ${L(copy.factStations)}`,
    L(copy.factEngine),
    L(copy.factData),
  ]) {
    const li = document.createElement("li");
    li.textContent = text;
    facts.appendChild(li);
  }

  setText("story-kicker", L(copy.kicker));
  setText("btn-story-next", L(copy.next));
  setText("btn-story-skip", L(copy.skip));
  renderDots();

  setText("create-kicker", L(copy.kicker));
  setText("create-title", L(copy.createTitle));
  setText("create-sub", L(copy.createSub));
  setText("name-label", L(copy.nameLabel));
  $("name-input").placeholder = L(copy.namePlaceholder);
  setText("look-label", L(copy.lookLabel));
  setText("color-label", L(copy.colorLabel));
  setText("btn-back", L(copy.back));
  setText("btn-clock-in", L(copy.clockIn));
  setText("name-error", L(copy.nameError));

  setText("player-role", L(copy.playerRole));
  setText("hint", coarse ? L(copy.hudHintTouch) : L(copy.hudHint));
  $("btn-lang").textContent = prefs.lang === "en" ? "ES" : "EN";
  $("btn-lang-intro").textContent = prefs.lang === "en" ? "ES" : "EN";
  $("btn-lang").setAttribute("aria-label", prefs.lang === "en" ? "Cambiar a español" : "Switch to English");
  $("btn-sound").setAttribute("aria-label", prefs.sound ? L(copy.soundOn) : L(copy.soundOff));
  $("btn-sound").setAttribute("aria-pressed", prefs.sound ? "true" : "false");
  $("btn-about").setAttribute("aria-label", L(copy.aboutTitle));
  setText("a-title", L(copy.aboutTitle));
  setText("a-body", L(copy.aboutBody));
  setText("a-github", L(copy.aboutGithub) + " ↗");
  $("a-github").href = GITHUB_URL;
  setText("a-cv", L(copy.aboutCv) + " ↗");
  $("a-cv").href = CV_URL;
  setText("a-credits", L(copy.credits));
  setText("a-technical", L(copy.technical));
  setText("a-restart", L(copy.restart));
  setText("a-close", L(copy.close));
  setText("p-close", L(copy.close));

  renderPresets();
  renderSwatches();
  document.title = prefs.lang === "es" ? "Arggon Labs — fuera de horario" : "Arggon Labs — after hours";

  if (state.modal === "project") {
    fillProjectModal(state.openProject);
  }
  if (state.phase === "story") {
    typeLine(storyLines[state.storyIndex][prefs.lang], true);
  }
}

/* ------------------------------------------------------------------ */
/* story                                                               */
/* ------------------------------------------------------------------ */

let typer = { timer: null, full: "", done: true };

function stopTyping() {
  if (typer.timer) clearTimeout(typer.timer);
  typer.timer = null;
}

function finishTyping() {
  stopTyping();
  $("story-text").textContent = typer.full;
  $("story-text").classList.add("done");
  typer.done = true;
}

function typeLine(text, instant = false) {
  stopTyping();
  typer.full = text;
  typer.done = false;
  const el = $("story-text");
  el.classList.remove("done");
  if (instant || reduceMotion) {
    finishTyping();
    return;
  }
  let i = 0;
  const tick = () => {
    i = Math.min(text.length, i + 1);
    el.textContent = text.slice(0, i);
    if (i >= text.length) {
      finishTyping();
    } else {
      typer.timer = setTimeout(tick, 14 + Math.random() * 26);
    }
  };
  tick();
}

function renderDots() {
  const dots = $("story-dots");
  dots.innerHTML = "";
  for (let i = 0; i < storyLines.length; i += 1) {
    const d = document.createElement("i");
    if (i === state.storyIndex) d.className = "on";
    dots.appendChild(d);
  }
}

function enterStory(index = 0) {
  state.phase = "story";
  state.storyIndex = index;
  world.setMode("cinematic");
  showScreen("screen-story");
  renderDots();
  typeLine(storyLines[index][prefs.lang]);
  $("btn-story-next").focus();
}

function storyNext() {
  if (!typer.done) {
    finishTyping();
    return;
  }
  if (state.storyIndex < storyLines.length - 1) {
    state.storyIndex += 1;
    renderDots();
    typeLine(storyLines[state.storyIndex][prefs.lang]);
  } else {
    enterCreate();
  }
}

function skipStory() {
  enterCreate();
}

/* ------------------------------------------------------------------ */
/* character creation                                                  */
/* ------------------------------------------------------------------ */

function renderPresets() {
  const wrap = $("presets");
  wrap.innerHTML = "";
  const names = [T(copy.presetA), T(copy.presetB), T(copy.presetC)];
  const glyphs = ["☾", "◈", "◇"];
  names.forEach((name, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "preset";
    b.setAttribute("role", "radio");
    b.setAttribute("aria-checked", String(i === prefs.preset));
    b.setAttribute("aria-label", name);
    b.innerHTML = `<span class="silhouette" aria-hidden="true">${glyphs[i]}</span><strong>${name}</strong><small>0${i + 1}</small>`;
    b.addEventListener("click", () => {
      prefs.preset = i;
      store.set("al.preset", i);
      world.setAvatar({ preset: i, color: palette[prefs.color] });
      renderPresets();
      sound.ui();
    });
    wrap.appendChild(b);
  });
}

function renderSwatches() {
  const wrap = $("swatches");
  wrap.innerHTML = "";
  PALETTE.forEach((color, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "swatch";
    b.setAttribute("role", "radio");
    b.setAttribute("aria-checked", String(i === prefs.color));
    b.setAttribute("aria-label", `Color ${i + 1}`);
    b.style.background = `#${color.toString(16).padStart(6, "0")}`;
    b.addEventListener("click", () => {
      prefs.color = i;
      store.set("al.color", i);
      world.setAvatar({ preset: prefs.preset, color: palette[i] });
      renderSwatches();
      sound.ui();
    });
    wrap.appendChild(b);
  });
}

function enterCreate() {
  state.phase = "create";
  state.modal = null;
  state.x = 1200;
  state.y = 790;
  state.facing = 0;
  world.setMode("create");
  world.placeAvatar(12, 7.9, state.facing, 0);
  world.setAvatar({ preset: prefs.preset, color: palette[prefs.color] });
  showScreen("screen-create");
  showHud(false);
  $("name-error").classList.add("hidden");
  $("name-input").value = prefs.name || "";
  sound.ui();
  setTimeout(() => $("name-input").focus(), 80);
}

function clockIn() {
  const name = $("name-input").value.trim().replace(/\s+/g, " ");
  if (!name) {
    $("name-error").classList.remove("hidden");
    $("name-input").focus();
    sound.close();
    return;
  }
  prefs.name = name.slice(0, 20);
  store.set("al.name", prefs.name);

  state.phase = "play";
  state.modal = null;
  state.x = layout.start.x;
  state.y = layout.start.y;
  state.vx = 0;
  state.vy = 0;
  state.facing = Math.PI;
  state.camYaw = 0;
  state.camPitch = coarse ? 0.13 : 0.24;
  state.camDist = coarse ? 7.4 : 5.6;
  state.blend = 1;
  state.target = null;
  state.pending = null;
  state.onboardingUntil = performance.now() + 5200;

  world.setMode("follow");
  world.setBlend(1);
  world.placeAvatar(state.x / 100, state.y / 100, state.facing, 0);
  world.setCamera({ yaw: state.camYaw, pitch: state.camPitch, dist: state.camDist });
  world.snapCamera();

  setText("player-name", prefs.name);
  $("badge-chip").style.background = `#${palette[prefs.color].toString(16).padStart(6, "0")}`;
  $("badge-chip").style.color = `#${palette[prefs.color].toString(16).padStart(6, "0")}`;
  showScreen(null);
  showHud(true);
  $("status").textContent = T(copy.onboarding);
  sound.startShift();
  $("prompt").classList.add("hidden");
  updateStatus();
}

/* ------------------------------------------------------------------ */
/* GitHub live data                                                    */
/* ------------------------------------------------------------------ */

let dataStatus = "";

function updateStatus() {
  if (performance.now() < state.onboardingUntil) return;
  $("status").textContent = dataStatus;
}

const REPO_CACHE = "al.repos.v1";
const REPO_TTL = 10 * 60 * 1000;

function applyRepos(repos) {
  for (const project of projects) {
    const repo = repos.find((r) => r.name === project.name);
    if (!repo) continue;
    project.description = repo.description || project.description;
    project.language = repo.language || project.language;
    project.stars = repo.stargazers_count || 0;
    project.topics = repo.topics || [];
    project.homepage = repo.homepage || "";
    project.updated = (repo.updated_at || "").slice(0, 10);
    project.url = repo.html_url || project.url;
  }
  world.setProjects(projects);
}

function cachedRepos() {
  try {
    const raw = sessionStorage.getItem(REPO_CACHE);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || !Array.isArray(data.repos)) return null;
    if (Date.now() - Number(data.at) > REPO_TTL) return null;
    return data.repos;
  } catch {
    return null;
  }
}

function cacheRepos(repos) {
  try {
    sessionStorage.setItem(REPO_CACHE, JSON.stringify({
      at: Date.now(),
      repos: repos.map((r) => ({
        name: r.name,
        description: r.description,
        language: r.language,
        stargazers_count: r.stargazers_count,
        topics: r.topics,
        homepage: r.homepage,
        updated_at: r.updated_at,
        html_url: r.html_url,
      })),
    }));
  } catch {
    /* storage is optional */
  }
}

async function refreshProjects() {
  const cached = cachedRepos();
  if (cached) {
    applyRepos(cached);
    dataStatus = `${projects.length} · ${T(copy.live)}`;
    updateStatus();
    return;
  }

  dataStatus = T(copy.loading);
  updateStatus();
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 7000);
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
      { headers: { Accept: "application/vnd.github+json" }, signal: ctrl.signal },
    );
    if (!res.ok) throw new Error(`GitHub ${res.status}`);
    const repos = await res.json();
    applyRepos(repos);
    cacheRepos(repos);
    dataStatus = `${projects.length} · ${T(copy.live)}`;
  } catch (err) {
    dataStatus = `${projects.length} · ${T(copy.offline)}`;
  } finally {
    clearTimeout(timer);
    state.onboardingUntil = 0;
    updateStatus();
    if (state.modal === "project") fillProjectModal(state.openProject);
  }
}

/* ------------------------------------------------------------------ */
/* project modal                                                       */
/* ------------------------------------------------------------------ */

function fillProjectModal(index) {
  const p = projects[index];
  if (!p) return;
  state.openProject = index;
  setText("p-index", `STATION ${String(index + 1).padStart(2, "0")} / 06 · ${(p.lang || p.language || "code").toUpperCase()}`);
  setText("p-title", p.name.replace(/-/g, " ").toUpperCase());
  const desc = prefs.lang === "es" ? p.es || p.description : p.description || p.es;
  setText("p-desc", desc || "");
  const chips = $("p-tags");
  chips.innerHTML = "";
  for (const tag of tagsOf(p).slice(0, 8)) {
    const s = document.createElement("span");
    s.textContent = String(tag).toUpperCase();
    chips.appendChild(s);
  }
  setText("p-meta", [
    p.lang || p.language || "",
    `${p.stars || 0}★`,
    p.updated || "",
  ].filter(Boolean).join(" · "));
  const repo = $("p-repo");
  repo.href = p.url;
  repo.textContent = T(copy.openRepo) + " ↗";
  const live = $("p-live");
  if (p.homepage) {
    live.href = p.homepage;
    live.textContent = T(copy.liveDemo) + " ↗";
    live.classList.remove("hidden");
  } else {
    live.classList.add("hidden");
  }
}

function openProject(index) {
  if (state.phase !== "play") return;
  state.modal = "project";
  fillProjectModal(index);
  $("modal-project").classList.remove("hidden");
  $("p-close").focus();
  sound.open();
  clearKeys();
}

function openAbout() {
  state.modal = "about";
  $("modal-about").classList.remove("hidden");
  $("a-close").focus();
  sound.open();
  clearKeys();
}

function closeModals() {
  if (!state.modal) return;
  state.modal = null;
  $("modal-project").classList.add("hidden");
  $("modal-about").classList.add("hidden");
  $("scene").focus();
  sound.close();
}

/* ------------------------------------------------------------------ */
/* input                                                               */
/* ------------------------------------------------------------------ */

const keys = new Set();
let drag = null;
let hovered = -1;
let lastPointer = { x: 0, y: 0 };

function clearKeys() {
  keys.clear();
  state.vx = 0;
  state.vy = 0;
}

function standPointFor(deskId) {
  const desk = layout.desks[deskId];
  if (!desk) return null;
  const cx = desk.x + desk.w / 2;
  const cz = desk.y + desk.h / 2;
  const x = desk.side === 0 ? desk.x + desk.w + 80 : desk.x - 80;
  return { x, y: cz };
}

function handleClick(clientX, clientY) {
  if (state.phase !== "play" || state.modal) return;
  const deskId = world.pickAt(clientX, clientY);
  if (deskId !== null) {
    const point = standPointFor(deskId);
    state.pending = deskId;
    state.target = point;
    sound.ui();
    return;
  }
  const ground = world.groundAt(clientX, clientY);
  if (ground) {
    state.target = { x: ground.x * 100, y: ground.z * 100 };
    state.pending = null;
    sound.ui();
  }
}

function bindInput() {
  const canvas = $("scene");

  canvas.addEventListener("pointerdown", (e) => {
    if (state.phase !== "play" || state.modal) return;
    canvas.setPointerCapture(e.pointerId);
    drag = { x: e.clientX, y: e.clientY, moved: false, id: e.pointerId };
    lastPointer = { x: e.clientX, y: e.clientY };
  });

  canvas.addEventListener("pointermove", (e) => {
    lastPointer = { x: e.clientX, y: e.clientY };
    if (drag && drag.id === e.pointerId) {
      const dx = e.clientX - drag.x;
      const dy = e.clientY - drag.y;
      if (!drag.moved && Math.hypot(dx, dy) > 5) drag.moved = true;
      if (drag.moved) {
        state.camYaw -= dx * 0.006;
        state.camPitch = clamp(state.camPitch + dy * 0.004, 0.08, 1.12);
        drag.x = e.clientX;
        drag.y = e.clientY;
        canvas.style.cursor = "grabbing";
      }
      return;
    }
    if (state.phase === "play" && !state.modal) {
      const id = world.pickAt(e.clientX, e.clientY);
      hovered = id === null ? -1 : id;
      canvas.style.cursor = hovered >= 0 ? "pointer" : "grab";
    }
  });

  const endDrag = (e) => {
    if (!drag || drag.id !== e.pointerId) return;
    const wasClick = !drag.moved;
    drag = null;
    canvas.style.cursor = "grab";
    if (wasClick) handleClick(e.clientX, e.clientY);
  };
  canvas.addEventListener("pointerup", endDrag);
  canvas.addEventListener("pointercancel", () => {
    drag = null;
    canvas.style.cursor = "grab";
  });

  canvas.addEventListener(
    "wheel",
    (e) => {
      if (state.phase !== "play" || state.modal) return;
      e.preventDefault();
      state.camDist = clamp(state.camDist + Math.sign(e.deltaY) * 0.45, 3.6, 10);
    },
    { passive: false },
  );

  window.addEventListener("keydown", (e) => {
    const tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") {
      if (e.key === "Enter" && state.phase === "create") clockIn();
      return;
    }
    if ((tag === "BUTTON" || tag === "A") && (e.key === "Enter" || e.key === " ")) {
      return;
    }
    const k = e.key.toLowerCase();

    if (state.modal) {
      if (k === "escape") closeModals();
      return;
    }

    if (state.phase === "hero") {
      if (k === "enter" || k === " ") {
        e.preventDefault();
        enterStory(0);
      }
      return;
    }
    if (state.phase === "story") {
      if (k === "enter" || k === " " || k === "arrowright") {
        e.preventDefault();
        storyNext();
      }
      if (k === "escape") skipStory();
      return;
    }
    if (state.phase === "create") {
      if (k === "escape") enterStory(0);
      return;
    }
    if (state.phase !== "play") return;

    if (["w", "a", "s", "d", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(k)) {
      e.preventDefault();
      keys.add(k);
      state.target = null;
      state.pending = null;
    }
    if (k === "e") {
      e.preventDefault();
      interact();
    }
    if (k === "h") openAbout();
    if (k === "m") toggleSound();
    if (k === "escape") closeModals();
  });

  window.addEventListener("keyup", (e) => {
    keys.delete(e.key.toLowerCase());
  });

  window.addEventListener("blur", clearKeys);

  $("btn-enter").addEventListener("click", () => enterStory(0));
  $("btn-hero-skip").addEventListener("click", () => enterCreate());
  $("btn-story-next").addEventListener("click", storyNext);
  $("btn-story-skip").addEventListener("click", skipStory);
  $("btn-back").addEventListener("click", () => enterStory(0));
  $("btn-clock-in").addEventListener("click", clockIn);
  $("prompt").addEventListener("click", interact);
  $("btn-about").addEventListener("click", openAbout);
  $("btn-lang").addEventListener("click", toggleLang);
  $("btn-lang-intro").addEventListener("click", toggleLang);
  $("btn-sound").addEventListener("click", toggleSound);
  $("a-restart").addEventListener("click", restartShift);
  document.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeModals);
  });
  document.querySelectorAll(".modal").forEach((m) => {
    m.addEventListener("pointerdown", (e) => {
      if (e.target === m) closeModals();
    });
  });

  bindJoystick();
  bindAudioUnlock();
}

function interact() {
  if (state.phase !== "play" || state.modal) return;
  if (state.focus && state.focus.can && state.focus.idx >= 0) {
    openProject(state.focus.idx);
  }
}

function toggleLang() {
  prefs.lang = prefs.lang === "en" ? "es" : "en";
  store.set("al.lang", prefs.lang);
  world.setLang(prefs.lang);
  applyLang();
  if (state.phase === "play") updateStatus();
  sound.ui();
}

function toggleSound() {
  prefs.sound = !prefs.sound;
  store.set("al.sound", prefs.sound ? "on" : "off");
  sound.setEnabled(prefs.sound);
  if (prefs.sound) sound.ui();
  applyLang();
}

function bindAudioUnlock() {
  const unlock = () => {
    if (prefs.sound) sound.setEnabled(true);
    window.removeEventListener("pointerdown", unlock);
    window.removeEventListener("keydown", unlock);
  };
  window.addEventListener("pointerdown", unlock, { once: true });
  window.addEventListener("keydown", unlock, { once: true });
}

/* ------------------------------------------------------------------ */
/* joystick                                                            */
/* ------------------------------------------------------------------ */

const joy = { active: false, id: null, x: 0, y: 0 };

function bindJoystick() {
  const pad = $("joystick");
  const knob = pad.querySelector(".knob");
  if (!coarse) {
    pad.classList.add("hidden");
    return;
  }
  pad.classList.remove("hidden");

  const set = (e) => {
    const r = pad.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) / (r.width * 0.42);
    const dy = (e.clientY - cy) / (r.height * 0.42);
    const len = Math.hypot(dx, dy);
    const nx = len > 1 ? dx / len : dx;
    const ny = len > 1 ? dy / len : dy;
    joy.x = nx;
    joy.y = ny;
    knob.style.transform = `translate(${nx * 32}px, ${ny * 32}px)`;
  };

  pad.addEventListener("pointerdown", (e) => {
    if (state.phase !== "play" || state.modal) return;
    e.preventDefault();
    pad.setPointerCapture(e.pointerId);
    joy.active = true;
    joy.id = e.pointerId;
    set(e);
  });
  pad.addEventListener("pointermove", (e) => {
    if (joy.active && joy.id === e.pointerId) set(e);
  });
  const end = (e) => {
    if (joy.id !== e.pointerId) return;
    joy.active = false;
    joy.id = null;
    joy.x = 0;
    joy.y = 0;
    knob.style.transform = "translate(0, 0)";
  };
  pad.addEventListener("pointerup", end);
  pad.addEventListener("pointercancel", end);
}

/* ------------------------------------------------------------------ */
/* movement + loop                                                     */
/* ------------------------------------------------------------------ */

function step(dt) {
  let wishX = 0;
  let wishZ = 0;

  if (keys.has("w") || keys.has("arrowup")) wishZ += 1;
  if (keys.has("s") || keys.has("arrowdown")) wishZ -= 1;
  if (keys.has("d") || keys.has("arrowright")) wishX += 1;
  if (keys.has("a") || keys.has("arrowleft")) wishX -= 1;
  if (joy.active && (Math.abs(joy.x) > 0.08 || Math.abs(joy.y) > 0.08)) {
    wishX += joy.x;
    wishZ += -joy.y;
  }

  let targetVx = 0;
  let targetVy = 0;

  if (Math.abs(wishX) + Math.abs(wishZ) > 0.05) {
    const len = Math.hypot(wishX, wishZ) || 1;
    wishX /= len;
    wishZ /= len;
    const forwardX = -Math.sin(state.camYaw);
    const forwardY = -Math.cos(state.camYaw);
    const rightX = Math.cos(state.camYaw);
    const rightY = -Math.sin(state.camYaw);
    const dx = forwardX * wishZ + rightX * wishX;
    const dy = forwardY * wishZ + rightY * wishX;
    targetVx = dx * state.moveSpeed;
    targetVy = dy * state.moveSpeed;
    state.target = null;
  } else if (state.target) {
    const dx = state.target.x - state.x;
    const dy = state.target.y - state.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 16) {
      state.target = null;
    } else {
      targetVx = (dx / dist) * state.moveSpeed;
      targetVy = (dy / dist) * state.moveSpeed;
    }
  }

  const accel = 1 - Math.exp(-dt * 12);
  state.vx += (targetVx - state.vx) * accel;
  state.vy += (targetVy - state.vy) * accel;
  if (Math.abs(state.vx) < 0.5) state.vx = 0;
  if (Math.abs(state.vy) < 0.5) state.vy = 0;

  const nx = Math.round(state.x + state.vx * dt);
  const ny = Math.round(state.y + state.vy * dt);
  const pos = Core.slide(state.x, state.y, nx, ny);
  state.x = pos.x;
  state.y = pos.y;

  const speed = Math.hypot(state.vx, state.vy);
  if (speed > 6) {
    state.facing = Math.atan2(state.vx, state.vy);
    if (speed > 80) sound.step();
  }

  world.placeAvatar(state.x / 100, state.y / 100, state.facing, speed / 100);
  world.setCamera({ yaw: state.camYaw, pitch: state.camPitch, dist: state.camDist });

  const f = Core.focus(state.x, state.y);
  state.focus = { idx: f.can ? Number(f.idx) : -1, can: !!f.can };
  const highlight = hovered >= 0 ? hovered : state.focus.can ? state.focus.idx : -1;
  world.setFocus(highlight);

  if (state.focus.can) {
    const idx = state.focus.idx;
    setText("prompt-text", `${T(copy.inspect)} — ${projects[idx].name.replace(/-/g, " ")}`);
    $("prompt").classList.remove("hidden");
  } else {
    $("prompt").classList.add("hidden");
  }

  if (state.pending !== null && state.focus.can && state.focus.idx === state.pending) {
    const idx = state.pending;
    state.pending = null;
    state.target = null;
    openProject(idx);
  }
}

function frame(now) {
  const dt = Math.min(0.05, (now - frame.last) / 1000 || 0.016);
  frame.last = now;

  if (state.phase === "play" && !state.modal) step(dt);

  if (state.blend < 1) {
    state.blend = Math.min(1, state.blend + dt / 1.6);
    if (world) world.setBlend(state.blend);
  }

  if (state.onboardingUntil && performance.now() > state.onboardingUntil) {
    state.onboardingUntil = 0;
    updateStatus();
  }

  world.update(dt);
  requestAnimationFrame(frame);
}
frame.last = performance.now();

/* ------------------------------------------------------------------ */
/* restart + boot                                                      */
/* ------------------------------------------------------------------ */

function restartShift() {
  closeModals();
  state.phase = "hero";
  state.storyIndex = 0;
  state.x = layout.start.x;
  state.y = layout.start.y;
  state.vx = 0;
  state.vy = 0;
  state.facing = Math.PI;
  state.target = null;
  state.pending = null;
  state.blend = 0;
  clearKeys();
  world.setMode("cinematic");
  world.placeAvatar(state.x / 100, state.y / 100, state.facing, 0);
  showScreen("screen-hero");
  showHud(false);
  sound.close();
}

window.addEventListener("resize", () => world.resize());

function boot() {
  bindInput();
  applyLang();
  showScreen("screen-hero");
  showHud(false);
  $("btn-enter").focus({ preventScroll: true });
  refreshProjects();
  requestAnimationFrame(frame);
}

boot();
