// Tiny procedural soundscape: no assets, no network, muted until the visitor asks.
export class Sound {
  constructor() {
    this.enabled = false;
    this.ctx = null;
    this.master = null;
    this.ambient = null;
    this.lastStep = 0;
  }

  ensure() {
    if (this.ctx) {
      if (this.ctx.state === "suspended") this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.0;
    this.master.connect(this.ctx.destination);
    this.buildAmbient();
  }

  buildAmbient() {
    const ctx = this.ctx;
    const bus = ctx.createGain();
    bus.gain.value = 0.035;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 420;
    filter.Q.value = 0.6;
    bus.connect(filter);
    filter.connect(this.master);

    // A slow, detuned chord: the building's empty-room hum.
    const freqs = [55, 82.5, 110, 164.81];
    const oscs = freqs.map((f, i) => {
      const osc = ctx.createOscillator();
      osc.type = i === 3 ? "sine" : "triangle";
      osc.frequency.value = f;
      osc.detune.value = (i - 1.5) * 6;
      const g = ctx.createGain();
      g.gain.value = i === 3 ? 0.05 : 0.16 / (i + 1);
      osc.connect(g);
      g.connect(bus);
      osc.start();
      return osc;
    });

    // Filter LFO so the pad breathes.
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.05;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 140;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    this.ambient = { bus, filter, oscs: [...oscs, lfo] };
  }

  setEnabled(on) {
    this.enabled = !!on;
    if (this.enabled) {
      this.ensure();
      if (this.master) {
        const t = this.ctx.currentTime;
        this.master.gain.cancelScheduledValues(t);
        this.master.gain.setTargetAtTime(0.5, t, 0.35);
      }
    } else if (this.master) {
      const t = this.ctx.currentTime;
      this.master.gain.cancelScheduledValues(t);
      this.master.gain.setTargetAtTime(0.0, t, 0.2);
    }
  }

  tone(freq, dur = 0.12, { type = "sine", gain = 0.12, slide = 0, delay = 0 } = {}) {
    if (!this.enabled || !this.ctx) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t0 + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g);
    g.connect(this.master);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
    return osc;
  }

  noise(dur = 0.08, { gain = 0.05, freq = 500, q = 1.2, delay = 0 } = {}) {
    if (!this.enabled || !this.ctx) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime + delay;
    const len = Math.max(1, Math.floor(ctx.sampleRate * dur));
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i += 1) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = freq;
    filter.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(filter);
    filter.connect(g);
    g.connect(this.master);
    src.start(t0);
    src.stop(t0 + dur + 0.02);
  }

  step() {
    const now = performance.now();
    if (now - this.lastStep < 230) return;
    this.lastStep = now;
    this.noise(0.07, { gain: 0.035, freq: 260 + Math.random() * 120, q: 0.9 });
  }

  ui() {
    this.tone(720, 0.06, { type: "square", gain: 0.04 });
  }

  open() {
    this.tone(392, 0.16, { type: "triangle", gain: 0.09 });
    this.tone(587.33, 0.28, { type: "triangle", gain: 0.07, delay: 0.06 });
  }

  close() {
    this.tone(587.33, 0.12, { type: "triangle", gain: 0.05, slide: -180 });
  }

  chime() {
    [523.25, 659.25, 783.99].forEach((f, i) => {
      this.tone(f, 0.5, { type: "sine", gain: 0.08, delay: i * 0.09 });
    });
  }

  startShift() {
    this.tone(110, 0.5, { type: "sine", gain: 0.16 });
    this.noise(0.25, { gain: 0.04, freq: 180, q: 0.7 });
    this.chime();
  }
}
