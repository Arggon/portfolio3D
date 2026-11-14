import * as THREE from "../vendor/three.module.js";

const C = (hex) => new THREE.Color(hex);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export const PRESETS = [
  { id: 0, key: "ava", height: 1.68, shoulder: 0.46, hair: "long" },
  { id: 1, key: "max", height: 1.78, shoulder: 0.54, hair: "short" },
  { id: 2, key: "rin", height: 1.64, shoulder: 0.48, hair: "beanie" },
];

export const PALETTE = [
  0x35d0ff, 0xff4fa3, 0xffb347, 0x6be07a,
  0x9b7bff, 0xff7a5c, 0xe8e3d6, 0x2e7dff,
];

function makeCanvas(w, h) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  return { canvas: c, ctx: c.getContext("2d") };
}

function wrap(ctx, text, maxWidth, maxLines) {
  const words = String(text || "").split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = word;
      if (lines.length === maxLines) {
        lines[maxLines - 1] = `${lines[maxLines - 1].replace(/[.,;:]$/, "")}…`;
        return lines;
      }
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function hexToRgba(hex, alpha) {
  const r = (hex >> 16) & 255;
  const g = (hex >> 8) & 255;
  const b = hex & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export class World {
  constructor(canvas, layout) {
    this.canvas = canvas;
    this.layoutDesks = layout && layout.desks ? layout.desks : [];
    this.lang = "en";
    this.projects = [];
    this.focusId = -1;
    this.mode = "cinematic";
    this.blend = 0;
    this.time = 0;
    this.avatarPos = { x: 9, z: 14.1 };
    this.avatarYaw = Math.PI;
    this.targetYaw = Math.PI;
    this.speed = 0;
    this.walkPhase = 0;
    this.cameraOrbit = { yaw: 0, pitch: 0.24, dist: 5.6 };
    this.cameraTarget = new THREE.Vector3(9, 1.15, 14.1);
    this.cameraPos = new THREE.Vector3(9, 2.4, 9);
    this.panelAnchors = [];
    this.raycaster = new THREE.Raycaster();
    this.cameraRay = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.blockers = [];

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: "high-performance",
      alpha: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.28;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x05060c);
    this.scene.fog = new THREE.FogExp2(0x06070e, 0.012);

    this.camera = new THREE.PerspectiveCamera(56, 1, 0.05, 120);

    this.buildLights();
    this.buildRoom();
    this.buildCity();
    this.buildReception();
    this.buildLounge();
    this.buildDetails();
    this.buildDesks();
    this.buildAvatar();
    this.scene.traverse((o) => {
      if (o.isMesh && o.userData && o.userData.blocker) this.blockers.push(o);
    });
    this.resize();
  }

  /* ------------------------------------------------------------------ */
  /* scene construction                                                   */
  /* ------------------------------------------------------------------ */

  buildLights() {
    const hemi = new THREE.HemisphereLight(0x7c8fbf, 0x2a2224, 0.95);
    this.scene.add(hemi);
    const amb = new THREE.AmbientLight(0x5b6180, 0.85);
    this.scene.add(amb);

    const moon = new THREE.DirectionalLight(0x9fb6ff, 1.7);
    moon.position.set(6, 11, -4);
    moon.castShadow = true;
    moon.shadow.mapSize.set(2048, 2048);
    moon.shadow.camera.left = -15;
    moon.shadow.camera.right = 15;
    moon.shadow.camera.top = 15;
    moon.shadow.camera.bottom = -15;
    moon.shadow.camera.near = 1;
    moon.shadow.camera.far = 40;
    moon.shadow.bias = -0.0006;
    moon.shadow.normalBias = 0.03;
    this.scene.add(moon);

    const warm = 0xffcf9a;
    const fixtures = [
      [5.2, 4.2], [11.2, 4.2], [18.4, 4.2],
      [5.2, 10.8], [11.2, 10.8], [18.4, 10.8],
    ];
    for (const [x, z] of fixtures) {
      const lamp = new THREE.PointLight(warm, 42, 15, 2);
      lamp.position.set(x, 3.05, z);
      this.scene.add(lamp);

      const bar = new THREE.Mesh(
        new THREE.BoxGeometry(2.0, 0.07, 0.16),
        new THREE.MeshStandardMaterial({
          color: 0xfff1d6,
          emissive: 0xffd9a8,
          emissiveIntensity: 2.4,
          roughness: 0.4,
        }),
      );
      bar.position.set(x, 3.34, z);
      this.scene.add(bar);

      const cable = new THREE.Mesh(
        new THREE.CylinderGeometry(0.01, 0.01, 0.28, 4),
        new THREE.MeshBasicMaterial({ color: 0x111218 }),
      );
      cable.position.set(x, 3.46, z);
      this.scene.add(cable);
    }

    // cool glow from the windows, no shadow cost
    const rim = new THREE.PointLight(0x6fa8ff, 10, 18, 2);
    rim.position.set(12, 2.4, 0.6);
    this.scene.add(rim);

    // the entrance and the reception desk get their own pools of light
    const entry = new THREE.PointLight(0xffd7ae, 34, 18, 2);
    entry.position.set(10, 3.0, 18.4);
    this.scene.add(entry);
    const lobbyBar = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 0.06, 0.14),
      new THREE.MeshStandardMaterial({ color: 0xfff1d6, emissive: 0xffd9a8, emissiveIntensity: 2.2, roughness: 0.4 }),
    );
    lobbyBar.position.set(12, 3.5, 19.6);
    this.scene.add(lobbyBar);
    const reception = new THREE.PointLight(0x9fd8ff, 16, 10, 2);
    reception.position.set(12, 2.6, 11.6);
    this.scene.add(reception);
  }

  buildRoom() {
    const W = 24;
    const D = 16;
    const H = 3.6;

    const carpet = (() => {
      const { canvas, ctx } = makeCanvas(256, 256);
      ctx.fillStyle = "#2a2732";
      ctx.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 2400; i += 1) {
        const v = 28 + Math.random() * 28;
        ctx.fillStyle = `rgba(${v + 8}, ${v + 4}, ${v + 14}, 0.5)`;
        ctx.fillRect(Math.random() * 256, Math.random() * 256, 1.5, 1.5);
      }
      ctx.strokeStyle = "rgba(12, 11, 18, 0.5)";
      ctx.lineWidth = 1;
      for (let i = 0; i <= 256; i += 32) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 256); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(256, i); ctx.stroke();
      }
      const t = new THREE.CanvasTexture(canvas);
      t.colorSpace = THREE.SRGBColorSpace;
      t.wrapS = THREE.RepeatWrapping;
      t.wrapT = THREE.RepeatWrapping;
      t.repeat.set(12, 8);
      t.anisotropy = 8;
      return t;
    })();
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(W, D + 24),
      new THREE.MeshStandardMaterial({ color: 0xffffff, map: carpet, roughness: 0.9, metalness: 0.04 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(W / 2, 0, 12);
    floor.receiveShadow = true;
    this.scene.add(floor);

    // threshold between office and the open lobby
    const threshold = new THREE.Mesh(
      new THREE.BoxGeometry(W, 0.02, 0.1),
      new THREE.MeshStandardMaterial({ color: 0x4a4a58, metalness: 0.4, roughness: 0.4 }),
    );
    threshold.position.set(W / 2, 0.01, D);
    this.scene.add(threshold);

    // glass entrance, far behind the camera
    const entrance = new THREE.Mesh(
      new THREE.PlaneGeometry(W - 2, 3.2),
      new THREE.MeshPhysicalMaterial({
        color: 0x6f8fc0, transparent: true, opacity: 0.08, roughness: 0.1,
        metalness: 0.2, side: THREE.DoubleSide,
      }),
    );
    entrance.position.set(W / 2, 1.6, 23.4);
    this.scene.add(entrance);
    for (let i = 0; i < 5; i += 1) {
      const bar = new THREE.Mesh(
        new THREE.BoxGeometry(0.07, 3.2, 0.07),
        new THREE.MeshStandardMaterial({ color: 0x14141b, roughness: 0.5 }),
      );
      bar.position.set(1.6 + i * (W - 3.2) / 4, 1.6, 23.4);
      this.scene.add(bar);
    }

    // carpet runner down the middle
    const runner = new THREE.Mesh(
      new THREE.PlaneGeometry(3.2, 12.4),
      new THREE.MeshStandardMaterial({ color: 0x2b2739, roughness: 1 }),
    );
    runner.rotation.x = -Math.PI / 2;
    runner.position.set(12, 0.006, 8.2);
    runner.receiveShadow = true;
    this.scene.add(runner);

    const wallMat = new THREE.MeshStandardMaterial({ color: 0x2c2b36, roughness: 0.95 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1c1b24, roughness: 0.9 });

    const wall = (w, h, x, y, z, ry = 0) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.16), wallMat);
      m.position.set(x, y, z);
      m.rotation.y = ry;
      m.receiveShadow = true;
      m.userData.blocker = true;
      this.scene.add(m);
      return m;
    };

    // left, right, front (south) walls
    wall(0.16, H, 0, H / 2, D / 2, Math.PI / 2);
    wall(0.16, H, W, H / 2, D / 2, Math.PI / 2);

    // back wall with three window bays
    const bay = 5.4;
    const gap = 0.9;
    const startX = 4.6;
    wall(startX - 0.45, H, (startX - 0.45) / 2, H / 2, 0.0);
    wall(W - (startX + bay * 3 + gap * 2) + 0.45, H,
      (startX + bay * 3 + gap * 2 + W) / 2, H / 2, 0.0);
    for (let i = 0; i < 3; i += 1) {
      const x0 = startX + i * (bay + gap);
      // sill + header around each bay
      wall(bay, 0.85, x0 + bay / 2, 0.425, 0.0);
      wall(bay, 0.5, x0 + bay / 2, 3.35, 0.0);
      if (i < 2) wall(gap, H, x0 + bay + gap / 2, H / 2, 0.0);

      const glass = new THREE.Mesh(
        new THREE.PlaneGeometry(bay - 0.1, 2.2),
        new THREE.MeshPhysicalMaterial({
          color: 0x9dc7ff,
          transparent: true,
          opacity: 0.09,
          roughness: 0.08,
          metalness: 0.1,
          side: THREE.DoubleSide,
        }),
      );
      glass.position.set(x0 + bay / 2, 2.25, 0.02);
      this.scene.add(glass);

      // mullions
      for (let k = 0; k <= 2; k += 1) {
        const mull = new THREE.Mesh(new THREE.BoxGeometry(0.06, 2.2, 0.06), darkMat);
        mull.position.set(x0 + 0.05 + (k * (bay - 0.1)) / 2, 2.25, 0.06);
        this.scene.add(mull);
      }
      const sill = new THREE.Mesh(new THREE.BoxGeometry(bay, 0.06, 0.3), darkMat);
      sill.position.set(x0 + bay / 2, 1.12, 0.14);
      sill.castShadow = true;
      this.scene.add(sill);
    }

    const ceiling = new THREE.Mesh(
      new THREE.PlaneGeometry(W, D),
      new THREE.MeshStandardMaterial({ color: 0x17171f, roughness: 1 }),
    );
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.set(W / 2, H, D / 2);
    this.scene.add(ceiling);

    // the lobby shares the ceiling, so the camera never looks into a void
    const lobbyCeiling = new THREE.Mesh(
      new THREE.PlaneGeometry(W, 10),
      new THREE.MeshStandardMaterial({ color: 0x15151d, roughness: 1 }),
    );
    lobbyCeiling.rotation.x = Math.PI / 2;
    lobbyCeiling.position.set(W / 2, H, D + 3);
    this.scene.add(lobbyCeiling);

    // a rug and a bench make the entrance read as a place, not a gap
    const lobbyRug = new THREE.Mesh(
      new THREE.PlaneGeometry(8, 3.4),
      new THREE.MeshStandardMaterial({ color: 0x353044, roughness: 1 }),
    );
    lobbyRug.rotation.x = -Math.PI / 2;
    lobbyRug.position.set(W / 2, 0.008, 19.2);
    lobbyRug.receiveShadow = true;
    this.scene.add(lobbyRug);

    const benchMat = new THREE.MeshStandardMaterial({ color: 0x3a2e28, roughness: 0.7 });
    const bench = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.1, 0.5), benchMat);
    bench.position.set(W / 2, 0.44, 21.4);
    bench.castShadow = true;
    this.scene.add(bench);
    for (const dx of [-1.3, 1.3]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.42, 0.44),
        new THREE.MeshStandardMaterial({ color: 0x15141a, roughness: 0.5 }));
      leg.position.set(W / 2 + dx, 0.21, 21.4);
      this.scene.add(leg);
    }

    // baseboards
    const skirtMat = new THREE.MeshStandardMaterial({ color: 0x14141b, roughness: 0.7 });
    const skirt = (w, x, z, ry = 0) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.12, 0.05), skirtMat);
      m.position.set(x, 0.06, z);
      m.rotation.y = ry;
      this.scene.add(m);
    };
    skirt(D, 0.1, D / 2, Math.PI / 2);
    skirt(D, W - 0.1, D / 2, Math.PI / 2);

    // an "after hours" neon sign on the right wall
    this.buildNeonSign(23.9, 2.4, 9.4, -Math.PI / 2);

    // wall clock stopped at 22:47
    const clock = new THREE.Group();
    const face = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.22, 0.03, 28),
      new THREE.MeshStandardMaterial({ color: 0xd9d2c2, roughness: 0.7 }),
    );
    face.rotation.x = Math.PI / 2;
    clock.add(face);
    const handMat = new THREE.MeshBasicMaterial({ color: 0x14141b });
    const hh = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.13, 0.012), handMat);
    hh.position.set(0, 0.05, 0.03);
    hh.rotation.z = -0.6;
    clock.add(hh);
    const mh = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.18, 0.012), handMat);
    mh.position.set(0.03, 0.07, 0.035);
    mh.rotation.z = -1.9;
    clock.add(mh);
    clock.position.set(2.4, 2.45, 0.12);
    this.scene.add(clock);
  }

  buildNeonSign(x, y, z, ry) {
    const { canvas, ctx } = makeCanvas(1024, 320);
    ctx.fillStyle = "#0a0810";
    ctx.fillRect(0, 0, 1024, 320);
    ctx.strokeStyle = "rgba(255,79,163,0.85)";
    ctx.lineWidth = 6;
    ctx.strokeRect(10, 10, 1004, 300);
    ctx.font = "900 128px ui-sans-serif, system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "#ff4fa3";
    ctx.shadowBlur = 46;
    ctx.fillStyle = "#ffbfd9";
    ctx.fillText("AFTER HOURS", 512, 156);
    ctx.shadowBlur = 0;
    ctx.font = "600 30px ui-monospace, monospace";
    ctx.fillStyle = "rgba(255,191,217,0.6)";
    ctx.fillText("NO STANDUPS PAST MIDNIGHT", 512, 266);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(3.2, 1.0),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true }),
    );
    mesh.position.set(x, y, z);
    mesh.rotation.y = ry;
    this.scene.add(mesh);
  }

  buildCity() {
    const tex = (() => {
      const { canvas, ctx } = makeCanvas(128, 256);
      ctx.fillStyle = "#05060c";
      ctx.fillRect(0, 0, 128, 256);
      for (let y = 6; y < 250; y += 10) {
        for (let x = 6; x < 122; x += 12) {
          if (Math.random() < 0.42) {
            const warm = Math.random() < 0.35;
            ctx.fillStyle = warm ? "rgba(255,190,110,0.85)" : "rgba(130,190,255,0.7)";
            ctx.fillRect(x, y, 5, 4);
          }
        }
      }
      const t = new THREE.CanvasTexture(canvas);
      t.colorSpace = THREE.SRGBColorSpace;
      t.wrapS = THREE.RepeatWrapping;
      t.wrapT = THREE.RepeatWrapping;
      return t;
    })();

    const rng = (a, b) => a + Math.random() * (b - a);
    for (let i = 0; i < 26; i += 1) {
      const w = rng(2.5, 6);
      const h = rng(4, 20);
      const x = rng(-10, 34);
      const z = rng(-24, -3.5);
      const t = tex.clone();
      t.needsUpdate = true;
      t.repeat.set(Math.max(1, Math.round(w / 2.2)), Math.max(1, Math.round(h / 4)));
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, w),
        new THREE.MeshBasicMaterial({ map: t, color: 0x8899bb, fog: true }),
      );
      m.position.set(x, h / 2 - 1.2, z);
      this.scene.add(m);
    }

    // the city continues behind the lobby glass
    for (let i = 0; i < 16; i += 1) {
      const w = rng(3, 7);
      const h = rng(5, 18);
      const x = rng(-6, 30);
      const z = rng(27, 40);
      const t = tex.clone();
      t.needsUpdate = true;
      t.repeat.set(Math.max(1, Math.round(w / 2.2)), Math.max(1, Math.round(h / 4)));
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, w),
        new THREE.MeshBasicMaterial({ map: t, color: 0x7d8cb0, fog: true }),
      );
      m.position.set(x, h / 2 - 1.4, z);
      this.scene.add(m);
    }

    // a moon, low and out of the way
    const moon = new THREE.Mesh(
      new THREE.CircleGeometry(1.2, 32),
      new THREE.MeshBasicMaterial({ color: 0xcfd8ff, transparent: true, opacity: 0.55 }),
    );
    moon.position.set(17, 10, -28);
    this.scene.add(moon);
  }

  buildReception() {
    const g = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x2a2b38, roughness: 0.65 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(4, 1.08, 1.2), bodyMat);
    body.position.set(12, 0.54, 11.8);
    body.castShadow = true;
    body.receiveShadow = true;
    body.userData.blocker = true;
    g.add(body);

    const top = new THREE.Mesh(
      new THREE.BoxGeometry(4.25, 0.07, 1.4),
      new THREE.MeshStandardMaterial({ color: 0x4a3a30, roughness: 0.5 }),
    );
    top.position.set(12, 1.12, 11.8);
    top.castShadow = true;
    top.userData.blocker = true;
    g.add(top);

    const strip = new THREE.Mesh(
      new THREE.BoxGeometry(3.6, 0.035, 0.02),
      new THREE.MeshBasicMaterial({ color: 0x35d0ff }),
    );
    strip.position.set(12, 0.92, 12.41);
    g.add(strip);

    const { canvas, ctx } = makeCanvas(1024, 320);
    ctx.clearRect(0, 0, 1024, 320);
    ctx.textAlign = "center";
    ctx.font = "800 96px ui-sans-serif, system-ui, sans-serif";
    ctx.fillStyle = "#eef1f7";
    ctx.fillText("ARGGON LABS", 512, 120);
    ctx.font = "600 30px ui-monospace, monospace";
    ctx.fillStyle = "#6f7488";
    ctx.letterSpacing = "8px";
    ctx.fillText("CANDIDATE EVALUATION", 512, 184);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(3.1, 0.97),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true }),
    );
    sign.position.set(12, 1.55, 12.42);
    g.add(sign);

    // monitor + terminal on the counter
    const monitor = new THREE.Group();
    const bezel = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 0.55, 0.05),
      new THREE.MeshStandardMaterial({ color: 0x0b0b10, roughness: 0.4 }),
    );
    monitor.add(bezel);
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.82, 0.47),
      new THREE.MeshBasicMaterial({ map: this.screenTexture(-1, "INTAKE", 0x35d0ff) }),
    );
    screen.position.z = 0.03;
    monitor.add(screen);
    monitor.position.set(10.85, 1.47, 11.55);
    monitor.rotation.y = 0;
    g.add(monitor);

    // stacks of onboarding paperwork, because HR
    const paperMat = new THREE.MeshStandardMaterial({ color: 0xd8d2c4, roughness: 0.9 });
    for (let i = 0; i < 3; i += 1) {
      const paper = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.02, 0.26), paperMat);
      paper.position.set(13.0 + i * 0.02, 1.18 + i * 0.022, 11.72 + i * 0.015);
      paper.rotation.y = i * 0.14;
      paper.castShadow = true;
      g.add(paper);
    }

    this.scene.add(g);
  }

  buildLounge() {
    const g = new THREE.Group();

    const sofaMat = new THREE.MeshStandardMaterial({ color: 0x343a4d, roughness: 0.95 });
    const base = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.42, 1.4), sofaMat);
    base.position.set(12, 0.21, 1.9);
    base.castShadow = true;
    base.userData.blocker = true;
    g.add(base);
    const back = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.62, 0.32), sofaMat);
    back.position.set(12, 0.72, 1.34);
    back.castShadow = true;
    back.userData.blocker = true;
    g.add(back);
    for (const x of [10.55, 13.45]) {
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.2, 1.4), sofaMat);
      arm.position.set(x, 0.62, 1.9);
      arm.castShadow = true;
      g.add(arm);
    }
    for (const x of [11.2, 12.8]) {
      const cushion = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.16, 1.05), sofaMat);
      cushion.position.set(x, 0.5, 1.94);
      cushion.castShadow = true;
      g.add(cushion);
    }
    // throw pillows
    for (const [x, c] of [[11.0, 0xff4fa3], [13.0, 0x35d0ff]]) {
      const p = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.34, 0.14),
        new THREE.MeshStandardMaterial({ color: c, roughness: 0.9 }),
      );
      p.position.set(x, 0.66, 1.62);
      p.rotation.z = x < 12 ? 0.3 : -0.3;
      p.castShadow = true;
      g.add(p);
    }

    // coffee table
    const tableMat = new THREE.MeshStandardMaterial({ color: 0x3b2f29, roughness: 0.55 });
    const table = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.06, 0.9), tableMat);
    table.position.set(12, 0.42, 3.55);
    table.castShadow = true;
    table.receiveShadow = true;
    g.add(table);
    for (const [dx, dz] of [[-0.7, -0.35], [0.7, -0.35], [-0.7, 0.35], [0.7, 0.35]]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.42, 0.05),
        new THREE.MeshStandardMaterial({ color: 0x17161d, roughness: 0.4 }));
      leg.position.set(12 + dx, 0.21, 3.55 + dz);
      g.add(leg);
    }
    // mugs and a laptop on the table
    const mugMat = new THREE.MeshStandardMaterial({ color: 0xffb347, roughness: 0.6 });
    const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.055, 0.11, 12), mugMat);
    mug.position.set(11.7, 0.51, 3.5);
    mug.castShadow = true;
    g.add(mug);
    const laptopBase = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.02, 0.3),
      new THREE.MeshStandardMaterial({ color: 0x25262e, roughness: 0.4 }));
    laptopBase.position.set(12.35, 0.46, 3.45);
    g.add(laptopBase);
    const laptopScreen = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.27, 0.015),
      new THREE.MeshStandardMaterial({ color: 0x15151c, roughness: 0.3 }));
    laptopScreen.position.set(12.35, 0.6, 3.28);
    laptopScreen.rotation.x = -0.25;
    g.add(laptopScreen);

    // rug under the lounge
    const rug = new THREE.Mesh(
      new THREE.PlaneGeometry(5.4, 3.4),
      new THREE.MeshStandardMaterial({ color: 0x322b40, roughness: 1 }),
    );
    rug.rotation.x = -Math.PI / 2;
    rug.position.set(12, 0.004, 2.6);
    rug.receiveShadow = true;
    g.add(rug);

    this.scene.add(g);
  }

  buildDetails() {
    // plants in the corners
    for (const [x, z, s] of [[1.3, 1.3, 1.1], [22.7, 1.3, 1.2], [1.3, 14.7, 1.0], [22.7, 14.7, 1.15]]) {
      const plant = new THREE.Group();
      const pot = new THREE.Mesh(
        new THREE.CylinderGeometry(0.28, 0.22, 0.5, 12),
        new THREE.MeshStandardMaterial({ color: 0x2a2520, roughness: 0.9 }),
      );
      pot.position.y = 0.25;
      pot.castShadow = true;
      plant.add(pot);
      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.035, 0.045, 0.9, 6),
        new THREE.MeshStandardMaterial({ color: 0x2f4434, roughness: 1 }),
      );
      stem.position.y = 0.95;
      plant.add(stem);
      for (let i = 0; i < 5; i += 1) {
        const leaf = new THREE.Mesh(
          new THREE.SphereGeometry(0.3, 8, 6),
          new THREE.MeshStandardMaterial({ color: i % 2 ? 0x2f6b45 : 0x3d7f52, roughness: 1 }),
        );
        const a = (i / 5) * Math.PI * 2;
        leaf.position.set(Math.cos(a) * 0.28, 1.35 + (i % 3) * 0.16, Math.sin(a) * 0.28);
        leaf.scale.set(1, 0.7, 1);
        leaf.castShadow = true;
        plant.add(leaf);
      }
      plant.position.set(x, 0, z);
      plant.scale.setScalar(s);
      this.scene.add(plant);
    }

    // bookshelf against the left wall
    const shelf = new THREE.Group();
    const wood = new THREE.MeshStandardMaterial({ color: 0x3a2e28, roughness: 0.7 });
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.7, 4.0, 4.2), wood);
    frame.position.set(1.05, 2.0, 6.4);
    frame.castShadow = true;
    frame.receiveShadow = true;
    frame.userData.blocker = true;
    shelf.add(frame);
    for (let row = 0; row < 5; row += 1) {
      const y = 0.45 + row * 0.78;
      const bookColors = [0xff4fa3, 0xffb347, 0x35d0ff, 0x6be07a, 0x9b7bff, 0xd8d2c4];
      for (let i = 0; i < 7; i += 1) {
        const w = 0.07 + Math.random() * 0.05;
        const h = 0.3 + Math.random() * 0.18;
        const book = new THREE.Mesh(
          new THREE.BoxGeometry(0.24, h, w),
          new THREE.MeshStandardMaterial({ color: bookColors[(i + row) % bookColors.length], roughness: 0.85 }),
        );
        book.position.set(1.42, y + h / 2, 4.55 + i * 0.24);
        book.castShadow = true;
        shelf.add(book);
      }
    }
    this.scene.add(shelf);

    // water cooler
    const cooler = new THREE.Group();
    const stand = new THREE.Mesh(
      new THREE.CylinderGeometry(0.32, 0.32, 1.0, 14),
      new THREE.MeshStandardMaterial({ color: 0xc9c6bd, roughness: 0.7 }),
    );
    stand.position.y = 0.5;
    stand.castShadow = true;
    cooler.add(stand);
    const bottle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.26, 0.5, 14),
      new THREE.MeshPhysicalMaterial({ color: 0x7fb6e8, roughness: 0.15, transparent: true, opacity: 0.6 }),
    );
    bottle.position.y = 1.25;
    cooler.add(bottle);
    cooler.position.set(22.9, 0, 8.0);
    this.scene.add(cooler);

    // whiteboard on the back wall, right of the windows
    const board = new THREE.Mesh(
      new THREE.BoxGeometry(2.8, 1.5, 0.06),
      new THREE.MeshStandardMaterial({ color: 0xd9d7cf, roughness: 0.85 }),
    );
    board.position.set(21.2, 1.9, 0.12);
    board.castShadow = true;
    board.userData.blocker = true;
    this.scene.add(board);
    const markup = (() => {
      const { canvas, ctx } = makeCanvas(1024, 560);
      ctx.fillStyle = "#e6e4db";
      ctx.fillRect(0, 0, 1024, 560);
      ctx.strokeStyle = "rgba(30,30,40,0.14)";
      for (let y = 80; y < 560; y += 90) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(1024, y);
        ctx.stroke();
      }
      ctx.fillStyle = "#1d2440";
      ctx.font = "700 44px ui-sans-serif, system-ui, sans-serif";
      ctx.fillText("BEFORE WE SHIP", 54, 78);
      ctx.font = "600 32px ui-monospace, monospace";
      const lines = [
        "1. kill flaky tests   ✓",
        "2. demo > slides      ✓",
        "3. docs future-me     ~",
        "4. deploy on friday   ?",
      ];
      lines.forEach((l, i) => {
        ctx.fillStyle = i === 3 ? "#b4232f" : "#2b3550";
        ctx.fillText(l, 56, 160 + i * 78);
      });
      ctx.strokeStyle = "#b4232f";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(714, 390);
      ctx.lineTo(908, 434);
      ctx.stroke();
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    })();
    const boardFace = new THREE.Mesh(
      new THREE.PlaneGeometry(2.7, 1.4),
      new THREE.MeshBasicMaterial({ map: markup }),
    );
    boardFace.position.set(21.2, 1.9, 0.16);
    this.scene.add(boardFace);

    // coat rack near the entrance
    const rack = new THREE.Group();
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.03, 1.8, 8),
      new THREE.MeshStandardMaterial({ color: 0x191920, metalness: 0.5, roughness: 0.4 }),
    );
    pole.position.y = 0.9;
    rack.add(pole);
    const coat = new THREE.Mesh(
      new THREE.ConeGeometry(0.34, 0.9, 8),
      new THREE.MeshStandardMaterial({ color: 0x4a3f55, roughness: 0.95 }),
    );
    coat.position.set(0.1, 1.35, 0.05);
    coat.rotation.z = 0.08;
    rack.add(coat);
    rack.position.set(21.8, 0, 14.2);
    this.scene.add(rack);
  }

  buildDesks() {
    this.deskGroups = [];
    this.panels = [];

    const layout = this.layoutDesks || [];
    for (let i = 0; i < 6; i += 1) {
      const desk = layout[i] || { x: 380, y: 270, w: 300, h: 120, hue: 0x35d0ff, side: 0 };
      this.buildDesk(desk, i);
    }
  }

  buildDesk(desk, index) {
    const group = new THREE.Group();
    const x = desk.x / 100;
    const y = desk.y / 100;
    const w = desk.w / 100;
    const h = desk.h / 100;
    const cx = x + w / 2;
    const cz = y + h / 2;
    const side = desk.side || 0; // 0 = left column (faces east), 1 = right column (faces west)
    const hue = desk.hue;
    const inward = side === 0 ? 1 : -1;

    const woodMat = new THREE.MeshStandardMaterial({ color: 0x3e3129, roughness: 0.62 });
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x17171e, metalness: 0.5, roughness: 0.35 });
    const accentMat = new THREE.MeshStandardMaterial({
      color: hue, emissive: hue, emissiveIntensity: 0.8, roughness: 0.4,
    });

    const top = new THREE.Mesh(new THREE.BoxGeometry(w, 0.08, h), woodMat);
    top.position.set(cx, 0.78, cz);
    top.castShadow = true;
    top.receiveShadow = true;
    top.userData.blocker = true;
    group.add(top);

    // a low modesty panel on the aisle side
    const modesty = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, h * 0.9), woodMat);
    modesty.position.set(cx + inward * (w / 2 - 0.06), 0.5, cz);
    group.add(modesty);

    for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.78, 0.06), metalMat);
      leg.position.set(cx + dx * (w / 2 - 0.12), 0.39, cz + dz * (h / 2 - 0.12));
      group.add(leg);
    }

    // monitor
    const monitor = new THREE.Group();
    const bezel = new THREE.Mesh(new THREE.BoxGeometry(0.98, 0.6, 0.05),
      new THREE.MeshStandardMaterial({ color: 0x0a0a10, roughness: 0.35 }));
    bezel.castShadow = true;
    monitor.add(bezel);
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.9, 0.52),
      new THREE.MeshBasicMaterial({ map: this.screenTexture(index, "", hue) }),
    );
    screen.position.z = 0.028;
    screen.userData = { deskId: index };
    monitor.add(screen);
    const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.26, 8), metalMat);
    stand.position.y = -0.43;
    monitor.add(stand);
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.03, 0.18), metalMat);
    foot.position.y = -0.56;
    monitor.add(foot);

    monitor.position.set(cx + inward * 0.35, 1.16, cz);
    monitor.rotation.y = side === 0 ? Math.PI / 2 : -Math.PI / 2;
    group.add(monitor);

    // keyboard + mug + succulent
    const key = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.025, 0.17),
      new THREE.MeshStandardMaterial({ color: 0x1c1c24, roughness: 0.6 }));
    key.position.set(cx + inward * -0.15, 0.835, cz);
    key.rotation.y = monitor.rotation.y;
    key.castShadow = true;
    group.add(key);

    const mug = new THREE.Mesh(
      new THREE.CylinderGeometry(0.055, 0.05, 0.12, 12),
      new THREE.MeshStandardMaterial({ color: index % 2 ? 0xe8e3d6 : 0x2b2b33, roughness: 0.6 }),
    );
    mug.position.set(cx + inward * -0.55, 0.88, cz + 0.32);
    mug.castShadow = true;
    group.add(mug);

    const pot = new THREE.Mesh(
      new THREE.CylinderGeometry(0.09, 0.07, 0.13, 8),
      new THREE.MeshStandardMaterial({ color: 0x6b4a35, roughness: 0.9 }),
    );
    pot.position.set(cx + inward * -0.72, 0.86, cz - 0.36);
    group.add(pot);
    const succulent = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 8, 6),
      new THREE.MeshStandardMaterial({ color: 0x3f7a4f, roughness: 1 }),
    );
    succulent.scale.y = 0.7;
    succulent.position.set(cx + inward * -0.72, 0.96, cz - 0.36);
    succulent.castShadow = true;
    group.add(succulent);

    // office chair, on the aisle side, slightly tucked in
    const chair = new THREE.Group();
    const seatMat = new THREE.MeshStandardMaterial({ color: 0x20212a, roughness: 0.9 });
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.09, 0.5), seatMat);
    seat.position.y = 0.47;
    seat.castShadow = true;
    chair.add(seat);
    const backrest = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.55, 0.08), seatMat);
    backrest.position.set(0, 0.78, -0.22);
    backrest.rotation.x = 0.08;
    backrest.castShadow = true;
    chair.add(backrest);
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.38, 8), metalMat);
    post.position.y = 0.24;
    chair.add(post);
    for (let k = 0; k < 5; k += 1) {
      const a = (k / 5) * Math.PI * 2;
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 0.06), metalMat);
      foot.position.set(Math.cos(a) * 0.13, 0.05, Math.sin(a) * 0.13);
      foot.rotation.y = -a;
      chair.add(foot);
    }
    chair.position.set(cx + inward * -0.95, 0, cz + 0.05);
    chair.rotation.y = side === 0 ? -0.35 : Math.PI + 0.35;
    group.add(chair);

    // the holographic project panel
    const panelGroup = new THREE.Group();
    const tex = this.panelTexture(index);
    const panelMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false });
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 1.03), panelMat);
    panel.userData = { deskId: index, blocker: true };
    panelGroup.add(panel);

    const frame = new THREE.Mesh(
      new THREE.PlaneGeometry(1.82, 1.15),
      new THREE.MeshStandardMaterial({
        color: 0x0c0d14,
        emissive: hue,
        emissiveIntensity: 0.35,
        metalness: 0.4,
        roughness: 0.35,
        transparent: true,
        opacity: 0.75,
      }),
    );
    frame.position.z = -0.012;
    frame.userData.blocker = true;
    panelGroup.add(frame);

    // tiny desk-side pylon so the panel reads as furniture, not a floating bug
    const pylon = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 1.1, 8), metalMat);
    pylon.position.set(cx + inward * 0.85, 1.0, cz - 0.5);
    group.add(pylon);
    const emitter = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), accentMat);
    emitter.position.set(cx + inward * 0.85, 1.5, cz - 0.5);
    group.add(emitter);

    panelGroup.position.set(cx + inward * 0.92, 2.0, cz);
    panelGroup.rotation.y = side === 0 ? Math.PI / 2 : -Math.PI / 2;
    panelGroup.rotation.x = -0.05;
    group.add(panelGroup);

    this.panels.push({ group: panelGroup, mesh: panel, tex, index, baseY: 2.0 });
    this.scene.add(group);
    this.deskGroups.push(group);
  }

  buildAvatar() {
    const pad = new THREE.Mesh(
      new THREE.RingGeometry(0.62, 0.74, 56),
      new THREE.MeshBasicMaterial({ color: 0x35d0ff, transparent: true, opacity: 0.45, side: THREE.DoubleSide }),
    );
    pad.rotation.x = -Math.PI / 2;
    pad.position.set(12, 0.02, 7.9);
    pad.visible = false;
    this.createPad = pad;
    this.scene.add(pad);

    this.avatar = new THREE.Group();
    this.scene.add(this.avatar);
    this.setAvatar({ preset: 0, color: PALETTE[0] });
  }

  setAvatar({ preset = 0, color = PALETTE[0] }) {
    this.avatarPreset = preset;
    this.avatarColor = color;
    if (this.avatarBody) {
      this.avatar.remove(this.avatarBody);
      this.avatarBody.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
    }
    const cfg = PRESETS[preset] || PRESETS[0];
    const g = new THREE.Group();
    const outfit = new THREE.MeshStandardMaterial({ color, roughness: 0.85 });
    const outfitDark = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color).multiplyScalar(0.55),
      roughness: 0.9,
    });
    const skin = new THREE.MeshStandardMaterial({ color: 0xd9a97f, roughness: 0.75 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x18141c, roughness: 0.9 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x101014, roughness: 0.6 });

    const shoulder = cfg.shoulder;
    const hip = 0.78;

    const pelvis = new THREE.Mesh(new THREE.CapsuleGeometry(0.17, 0.14, 4, 10), outfitDark);
    pelvis.position.y = hip;
    pelvis.castShadow = true;
    g.add(pelvis);

    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.34, 5, 12), outfit);
    torso.position.y = 1.12;
    torso.scale.x = shoulder / 0.42;
    torso.castShadow = true;
    g.add(torso);
    // collar
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 0.06, 10), outfitDark);
    collar.position.y = 1.4;
    g.add(collar);

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.065, 0.09, 8), skin);
    neck.position.y = 1.45;
    g.add(neck);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.155, 18, 14), skin);
    head.scale.set(1, 1.08, 0.98);
    head.position.y = 1.57;
    head.castShadow = true;
    g.add(head);

    // a face, just enough to give the silhouette a front
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x171420 });
    for (const dx of [-0.055, 0.055]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.019, 8, 6), eyeMat);
      eye.scale.set(0.9, 1.15, 0.6);
      eye.position.set(dx, 1.6, 0.142);
      g.add(eye);
      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.009, 0.012), hairMat);
      brow.position.set(dx, 1.645, 0.146);
      brow.rotation.z = dx < 0 ? 0.08 : -0.08;
      g.add(brow);
    }
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.008, 0.008),
      new THREE.MeshBasicMaterial({ color: 0x8a5a4a }));
    mouth.position.set(0, 1.535, 0.149);
    g.add(mouth);

    if (cfg.hair === "long") {
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.163, 16, 12), hairMat);
      cap.scale.set(1.02, 0.92, 1.02);
      cap.position.set(0, 1.65, -0.015);
      cap.castShadow = true;
      g.add(cap);
      const backHair = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.26, 4, 10), hairMat);
      backHair.position.set(0, 1.42, -0.13);
      backHair.castShadow = true;
      g.add(backHair);
    } else if (cfg.hair === "short") {
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), hairMat);
      cap.position.set(0, 1.66, -0.01);
      cap.castShadow = true;
      g.add(cap);
    } else {
      const beanie = new THREE.Mesh(new THREE.CylinderGeometry(0.158, 0.166, 0.14, 14), outfitDark);
      beanie.position.y = 1.7;
      beanie.castShadow = true;
      g.add(beanie);
      const pom = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), outfit);
      pom.position.y = 1.79;
      g.add(pom);
    }

    const makeArm = (sideSign) => {
      const pivot = new THREE.Group();
      pivot.position.set(sideSign * (shoulder / 2 + 0.015), 1.33, 0);
      const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.24, 4, 8), outfit);
      upper.position.y = -0.17;
      upper.castShadow = true;
      pivot.add(upper);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), skin);
      hand.position.y = -0.35;
      hand.castShadow = true;
      pivot.add(hand);
      g.add(pivot);
      return pivot;
    };
    this.armL = makeArm(-1);
    this.armR = makeArm(1);

    const makeLeg = (sideSign) => {
      const pivot = new THREE.Group();
      pivot.position.set(sideSign * 0.11, hip - 0.04, 0);
      const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.28, 4, 8), outfitDark);
      thigh.position.y = -0.2;
      thigh.castShadow = true;
      pivot.add(thigh);
      const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.24, 4, 8), outfitDark);
      shin.position.y = -0.48;
      shin.castShadow = true;
      pivot.add(shin);
      const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.26), shoeMat);
      shoe.position.set(0, -0.65, 0.05);
      shoe.castShadow = true;
      pivot.add(shoe);
      g.add(pivot);
      return pivot;
    };
    this.legL = makeLeg(-1);
    this.legR = makeLeg(1);

    this.avatarBaseScale = cfg.height / 1.78;
    g.scale.setScalar(this.avatarBaseScale);
    this.avatarBody = g;
    this.avatar.add(g);
  }

  /* ------------------------------------------------------------------ */
  /* textures                                                             */
  /* ------------------------------------------------------------------ */

  projectData(i) {
    const p = this.projects[i] || {};
    return {
      name: (p.name || `project-${i + 1}`).replace(/-/g, " "),
      desc: (this.lang === "es" ? p.es : p.description) || p.description || "",
      tags: ((p.topics && p.topics.length) ? p.topics : (p.tags || [])).slice(0, 4),
      lang: p.language || "code",
      stars: p.stars || 0,
      hue: this.deskHue(i),
    };
  }

  deskHue(i) {
    const desk = this.layoutDesks[i];
    if (desk && typeof desk.hue === "number") return desk.hue;
    const hues = [0x35d0ff, 0xff4fa3, 0xffb347, 0x6be07a, 0x9b7bff, 0xff7a5c];
    return hues[i % hues.length];
  }

  panelTexture(i) {
    const data = this.projectData(i);
    const { canvas, ctx } = makeCanvas(1024, 620);
    const hue = data.hue;

    const bg = ctx.createLinearGradient(0, 0, 1024, 620);
    bg.addColorStop(0, "rgba(12, 16, 28, 0.97)");
    bg.addColorStop(1, "rgba(7, 9, 16, 0.97)");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 1024, 620);

    // hue wash
    const wash = ctx.createRadialGradient(820, 40, 20, 820, 40, 700);
    wash.addColorStop(0, hexToRgba(hue, 0.18));
    wash.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = wash;
    ctx.fillRect(0, 0, 1024, 620);

    ctx.strokeStyle = hexToRgba(hue, 0.75);
    ctx.lineWidth = 3;
    ctx.strokeRect(1.5, 1.5, 1021, 617);

    // header
    ctx.fillStyle = hexToRgba(hue, 0.95);
    ctx.fillRect(0, 0, 1024, 7);

    ctx.font = "800 118px ui-sans-serif, system-ui, sans-serif";
    ctx.fillStyle = hexToRgba(hue, 0.2);
    ctx.textAlign = "right";
    ctx.fillText(String(i + 1).padStart(2, "0"), 980, 150);
    ctx.textAlign = "left";

    ctx.font = "700 22px ui-monospace, monospace";
    ctx.fillStyle = "rgba(164, 169, 187, 0.9)";
    ctx.fillText(`STATION ${String(i + 1).padStart(2, "0")} / 06`, 54, 62);

    ctx.font = "800 52px ui-sans-serif, system-ui, sans-serif";
    ctx.fillStyle = "#f2f4f8";
    const title = data.name.toUpperCase();
    ctx.fillText(title.length > 22 ? `${title.slice(0, 21)}…` : title, 54, 140);

    ctx.font = "400 25px ui-sans-serif, system-ui, sans-serif";
    ctx.fillStyle = "rgba(198, 203, 219, 0.92)";
    const lines = wrap(ctx, data.desc, 900, 3);
    lines.forEach((line, k) => ctx.fillText(line, 54, 196 + k * 36));

    // tags
    let tx = 54;
    const ty = 344;
    ctx.font = "700 17px ui-monospace, monospace";
    for (const tag of data.tags) {
      const label = String(tag).toUpperCase().slice(0, 18);
      const w = ctx.measureText(label).width + 28;
      if (tx + w > 960) break;
      ctx.fillStyle = hexToRgba(hue, 0.12);
      roundRect(ctx, tx, ty, w, 40, 20);
      ctx.fill();
      ctx.strokeStyle = hexToRgba(hue, 0.45);
      ctx.lineWidth = 1.5;
      roundRect(ctx, tx, ty, w, 40, 20);
      ctx.stroke();
      ctx.fillStyle = hexToRgba(hue, 0.95);
      ctx.fillText(label, tx + 14, ty + 26);
      tx += w + 10;
    }

    // footers: a fake little diff, then metadata
    ctx.strokeStyle = "rgba(150, 165, 210, 0.18)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(54, 416);
    ctx.lineTo(970, 416);
    ctx.stroke();

    const bars = [0.55, 0.8, 0.35, 0.92, 0.62];
    bars.forEach((b, k) => {
      ctx.fillStyle = hexToRgba(hue, 0.35 + k * 0.08);
      roundRect(ctx, 54 + k * 82, 452, 58 * b, 12, 6);
      ctx.fill();
    });

    ctx.font = "700 20px ui-monospace, monospace";
    ctx.fillStyle = "rgba(164, 169, 187, 0.85)";
    ctx.textAlign = "right";
    ctx.fillText(`${data.lang.toUpperCase()}  ·  ${data.stars}★`, 968, 462);
    ctx.fillText("GITHUB  ↗", 968, 500);
    ctx.textAlign = "left";

    ctx.font = "600 15px ui-monospace, monospace";
    ctx.fillStyle = hexToRgba(hue, 0.55);
    ctx.fillText("LIVE PANEL · BEND", 54, 500);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    return tex;
  }

  screenTexture(index, label, hue) {
    const { canvas, ctx } = makeCanvas(1024, 600);
    ctx.fillStyle = "#0b0d15";
    ctx.fillRect(0, 0, 1024, 600);
    const grad = ctx.createLinearGradient(0, 0, 1024, 600);
    grad.addColorStop(0, hexToRgba(hue, 0.22));
    grad.addColorStop(1, "rgba(5,6,12,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 600);

    // window chrome
    ctx.fillStyle = "rgba(255,255,255,0.06)";
    ctx.fillRect(0, 0, 1024, 54);
    ["#ff4fa3", "#ffb347", "#6be07a"].forEach((c, i) => {
      ctx.beginPath();
      ctx.arc(32 + i * 28, 27, 7, 0, Math.PI * 2);
      ctx.fillStyle = c;
      ctx.fill();
    });
    ctx.font = "600 18px ui-monospace, monospace";
    ctx.fillStyle = "rgba(200,205,220,0.5)";
    ctx.fillText(label ? `${label.toLowerCase()} — zsh` : "intake — zsh", 150, 34);

    ctx.font = "700 190px ui-sans-serif, system-ui, sans-serif";
    ctx.fillStyle = hexToRgba(hue, 0.16);
    ctx.textAlign = "right";
    ctx.fillText(index < 0 ? "HR" : String(index + 1).padStart(2, "0"), 960, 430);
    ctx.textAlign = "left";

    ctx.font = "600 24px ui-monospace, monospace";
    const rows = index < 0
      ? ["$ opening candidate file", "$ authorizing: gonzalo", "$ six projects found", "$ run --in-person"]
      : ["$ git log --oneline -3", "$ deploy --prod", "$ status: ships", "$ coffee --refill"];
    rows.forEach((row, i) => {
      ctx.fillStyle = i === 0 ? hexToRgba(hue, 0.95) : "rgba(200,205,220,0.55)";
      ctx.fillText(row, 60, 150 + i * 52);
    });

    // progress bars
    for (let i = 0; i < 4; i += 1) {
      const y = 400 + i * 34;
      ctx.fillStyle = "rgba(255,255,255,0.07)";
      roundRect(ctx, 60, y, 520, 12, 6);
      ctx.fill();
      ctx.fillStyle = hexToRgba(hue, 0.8);
      roundRect(ctx, 60, y, 120 + i * 92, 12, 6);
      ctx.fill();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  /* ------------------------------------------------------------------ */
  /* live updates                                                         */
  /* ------------------------------------------------------------------ */

  setLayout(layout) {
    this.layoutDesks = layout.desks;
  }

  setLang(lang) {
    this.lang = lang;
    for (const p of this.panels) {
      p.tex.dispose();
      p.tex = this.panelTexture(p.index);
      p.mesh.material.map = p.tex;
      p.mesh.material.needsUpdate = true;
    }
  }

  setProjects(projects) {
    this.projects = projects;
    for (const p of this.panels) {
      p.tex.dispose();
      p.tex = this.panelTexture(p.index);
      p.mesh.material.map = p.tex;
      p.mesh.material.needsUpdate = true;
    }
  }

  setFocus(id) {
    this.focusId = id;
    for (const p of this.panels) {
      const on = p.index === id;
      p.group.scale.setScalar(on ? 1.035 : 1);
      const frame = p.group.children[1];
      if (frame && frame.material) {
        frame.material.emissiveIntensity = on ? 1.15 : 0.35;
      }
    }
  }

  /* ------------------------------------------------------------------ */
  /* runtime                                                              */
  /* ------------------------------------------------------------------ */

  placeAvatar(xm, zm, yaw, speed) {
    this.avatarPos.x = xm;
    this.avatarPos.z = zm;
    this.targetYaw = yaw;
    this.speed = speed;
  }

  setMode(mode) {
    this.mode = mode;
    if (this.createPad) this.createPad.visible = mode === "create";
  }

  setBlend(b) {
    this.blend = clamp(b, 0, 1);
  }

  setCamera({ yaw, pitch, dist }) {
    if (yaw !== undefined) this.cameraOrbit.yaw = yaw;
    if (pitch !== undefined) this.cameraOrbit.pitch = pitch;
    if (dist !== undefined) this.cameraOrbit.dist = dist;
  }

  snapCamera() {
    const { yaw, pitch, dist } = this.cameraOrbit;
    const target = new THREE.Vector3(this.avatarPos.x, 1.15, this.avatarPos.z);
    this.cameraPos.set(
      target.x + Math.sin(yaw) * Math.cos(pitch) * dist,
      target.y + Math.sin(pitch) * dist,
      target.z + Math.cos(yaw) * Math.cos(pitch) * dist,
    );
    this.cameraPos.x = clamp(this.cameraPos.x, 0.9, 23.1);
    this.cameraPos.z = clamp(this.cameraPos.z, 0.9, 21.0);
    this.cameraPos.y = clamp(this.cameraPos.y, 0.75, 3.2);
    this.cameraTarget.copy(target);
    this.camera.position.copy(this.cameraPos);
    this.camera.lookAt(this.cameraTarget);
  }

  pickAt(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const targets = [];
    for (const p of this.panels) targets.push(...p.group.children);
    const hits = this.raycaster.intersectObjects(targets, false);
    for (const hit of hits) {
      const id = hit.object.userData && hit.object.userData.deskId;
      if (typeof id === "number") return id;
    }
    return null;
  }

  groundAt(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    const p = new THREE.Vector2(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1,
    );
    this.raycaster.setFromCamera(p, this.camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const point = new THREE.Vector3();
    if (!this.raycaster.ray.intersectPlane(plane, point)) return null;
    if (Math.abs(point.x - 12) > 20 || Math.abs(point.z - 8) > 14) return null;
    return { x: point.x, z: point.z };
  }

  pointerOnDesk(clientX, clientY) {
    return this.pickAt(clientX, clientY);
  }

  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  update(dt) {
    this.time += dt;
    const t = this.time;

    // avatar animation
    const moving = Math.min(1, this.speed / 2.6);
    this.walkPhase += dt * (3.2 + this.speed * 2.4);
    const swing = Math.sin(this.walkPhase) * 0.62 * moving;
    if (this.legL && this.legR) {
      this.legL.rotation.x = swing;
      this.legR.rotation.x = -swing;
      this.armL.rotation.x = -swing * 0.8;
      this.armR.rotation.x = swing * 0.8;
      this.avatarBody.position.y = Math.abs(Math.sin(this.walkPhase * 2)) * 0.03 * moving;
      this.avatarBody.rotation.z = Math.sin(this.walkPhase) * 0.015 * moving;
      const breathe = 1 + Math.sin(t * 1.6) * 0.008;
      this.avatarBody.scale.y = this.avatarBaseScale * breathe;
    }

    // turn towards movement
    let diff = this.targetYaw - this.avatarYaw;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    this.avatarYaw += diff * Math.min(1, dt * 11);
    this.avatar.position.set(this.avatarPos.x, 0, this.avatarPos.z);
    this.avatar.rotation.y = this.avatarYaw;

    // face the camera and sway gently during character creation
    if (this.mode === "create") {
      this.avatar.rotation.y = Math.sin(t * 0.32) * 0.32;
    }

    // panels breathe, and lean towards a focused visitor
    for (const p of this.panels) {
      p.group.position.y = p.baseY + Math.sin(t * 1.1 + p.index * 0.8) * 0.012;
      const target = p.index === this.focusId ? 1.035 : 1;
      p.group.scale.x += (target - p.group.scale.x) * Math.min(1, dt * 8);
      p.group.scale.y = p.group.scale.x;
      p.group.scale.z = p.group.scale.x;
    }

    this.updateCamera(dt);
    this.renderer.render(this.scene, this.camera);
  }

  updateCamera(dt) {
    const target = new THREE.Vector3(this.avatarPos.x, 1.15, this.avatarPos.z);
    let desired;
    let look;

    if (this.mode === "cinematic") {
      const a = this.time * 0.05;
      desired = new THREE.Vector3(
        12 + Math.cos(a) * 5.2,
        2.6 + Math.sin(a * 0.7) * 0.14,
        9.6 + Math.sin(a) * 2.6,
      );
      look = new THREE.Vector3(12, 1.25, 7.2);
    } else if (this.mode === "create") {
      desired = new THREE.Vector3(this.avatarPos.x + 0.72, 1.55, this.avatarPos.z + 2.85);
      look = new THREE.Vector3(this.avatarPos.x, 1.02, this.avatarPos.z);
    } else {
      const { yaw, pitch, dist } = this.cameraOrbit;
      desired = new THREE.Vector3(
        target.x + Math.sin(yaw) * Math.cos(pitch) * dist,
        target.y + Math.sin(pitch) * dist,
        target.z + Math.cos(yaw) * Math.cos(pitch) * dist,
      );
      look = target;

      const anchor = new THREE.Vector3(target.x, 1.4, target.z);
      const toCam = new THREE.Vector3().subVectors(desired, anchor);
      const want = toCam.length();
      if (want > 0.1) {
        toCam.normalize();
        this.cameraRay.set(anchor, toCam);
        this.cameraRay.far = want;
        const blockers = this.cameraRay.intersectObjects(this.blockers, false);
        if (blockers.length) {
          const safe = Math.max(0.9, blockers[0].distance - 0.28);
          desired.copy(anchor).addScaledVector(toCam, safe);
        }
      }

      if (this.blend > 0 && this.blend < 1) {
        const a = this.blend;
        const close = new THREE.Vector3(this.avatarPos.x + 0.72, 1.55, this.avatarPos.z + 2.85);
        const closeLook = new THREE.Vector3(this.avatarPos.x, 1.02, this.avatarPos.z);
        const e = easeInOut(a);
        desired.lerpVectors(close, desired, e);
        look = new THREE.Vector3().lerpVectors(closeLook, look, e);
      }
    }

    // keep the camera inside the office
    desired.x = clamp(desired.x, 0.9, 23.1);
    desired.z = clamp(desired.z, 0.9, 21.0);
    desired.y = clamp(desired.y, 0.75, 3.2);

    const k = this.mode === "cinematic" ? 1 - Math.exp(-dt * 1.6) : 1 - Math.exp(-dt * 9);
    this.cameraPos.lerp(desired, k);
    this.cameraTarget.lerp(look, 1 - Math.exp(-dt * 12));
    this.camera.position.copy(this.cameraPos);
    this.camera.lookAt(this.cameraTarget);
  }
}

function roundRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, h / 2, w / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}
