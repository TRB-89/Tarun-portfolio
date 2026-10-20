/**
 * TARUN R. — CREATIVE DEVELOPER & AI SYSTEMS ENGINEER
 * EXPERIMENTAL Y2K × MONOCHROME BRUTALISM × CHROME 3D
 * Core Engine & Interactive Three.js Runtimes
 */

(function () {
  'use strict';

  // =========================================================================
  // 01. PROJECT DATA ARCHIVE (VERIFIED REAL PROJECTS)
  // =========================================================================
  const PROJECTS_ARCHIVE = [
    {
      id: 'aura',
      index: '01',
      title: 'AURA — Personal AI Desktop Assistant',
      shortTitle: 'AURA',
      category: 'EMOTIONAL VOICE AI COMPANION',
      description: 'Voice-driven personal intelligence companion featuring streaming neural speech, contextual memory architecture, and multimodal desktop task execution.',
      longDesc: 'AURA is an intelligent desktop companion designed with real-time neural speech recognition and emotional synthesis. Features a persistent memory engine that tracks context across multiple conversational sessions, extracts actionable intents, and dispatches system automation routines.',
      innovations: [
        'Low-latency bidirectional streaming via WebSockets and real-time audio chunking.',
        'Dynamic acoustic emotion modulation matching conversation sentiment.',
        'Persistent contextual memory graph with vector retrieval.',
        'Native desktop automation bindings and speech-to-code execution.'
      ],
      techStack: ['Python', 'WebSockets', 'LLM Orchestration', 'Voice Synthesis', 'React', 'FastAPI'],
      liveUrl: 'https://aura-umber-eight-10.vercel.app/',
      repoUrl: 'https://github.com/TRB-89',
      terminalSnippet: `[INIT] Neural Voice Processing Pipeline... OK\n[LLM] Connecting to low-latency context buffer... STREAMING\n[AUDIO] Synthesizing emotional waveform... 48kHz / 24-bit\n[READY] Awaiting voice directive or desktop command prompt.`
    },
    {
      id: 'gfg',
      index: '02',
      title: 'GFG: Gap For Good — Career Comeback Platform',
      shortTitle: 'GFG',
      category: 'AI CAREER RE-ENTRY PLATFORM',
      description: 'Intelligent career transition platform bridging employment gaps with automated skill mapping, personalized re-skilling roadmaps, and resume engineering.',
      longDesc: 'Gap For Good empowers professionals returning to the workforce after career breaks. The platform uses AI to analyze past experience, pinpoint transferable skills, identify high-growth market demand, and generate structured step-by-step upskilling trajectories.',
      innovations: [
        'Proprietary skill-gap diagnostic engine comparing resumes to real-time market data.',
        'Automated generative resume re-framing highlighting career hiatus achievements.',
        'Dynamic learning path sequencer with milestone-based mastery tracking.',
        'Peer community cohort matching and mentor syndication.'
      ],
      techStack: ['React', 'Next.js', 'AI Scoring Models', 'Supabase', 'Tailwind/CSS', 'PostgreSQL'],
      liveUrl: 'https://gfg-sable.vercel.app/',
      repoUrl: 'https://github.com/TRB-89',
      terminalSnippet: `[PARSE] Evaluating candidate career trajectory...\n[GAP_ANALYSIS] Hiatus interval identified: 18 months.\n[SKILL_MAP] Transferable competencies extracted: 14.\n[CURRICULUM] Customized 90-day re-entry roadmap compiled.`
    },
    {
      id: 'one-planet',
      index: '03',
      title: 'ONE PLANET — SDG Action Hub',
      shortTitle: 'ONE PLANET',
      category: 'SDG ACTION & COMMUNITY PLATFORM',
      description: 'Centralized collaborative network aligning grassroots climate & sustainability initiatives with UN Sustainable Development Goals through real-time impact tracking.',
      longDesc: 'ONE PLANET unites changemakers, student initiatives, and environmental advocates around measurable climate actions. Provides verifiable carbon footprint audits, localized volunteer matching, and real-time community milestone progress across the 17 UN SDGs.',
      innovations: [
        'Multi-tenant SDG metric dashboard with verifiable impact proof submission.',
        'Geospatial event aggregation for local community environmental drives.',
        'Gamified civic engagement with cryptographic achievement tokens.',
        'Real-time aggregated global carbon offset visualizer.'
      ],
      techStack: ['Full-Stack JavaScript', 'Supabase', 'Geospatial APIs', 'Chart.js', 'REST APIs'],
      liveUrl: 'https://one-planet-nine.vercel.app/',
      repoUrl: 'https://github.com/TRB-89',
      terminalSnippet: `[SYNC] Querying UN SDG Registry nodes... CONNECTED\n[IMPACT] Total verified actions this cycle: 12,480+\n[GEO] Locating active environmental hubs in your sector...\n[TELEMETRY] Carbon footprint mitigation rate: -3.8% MoM`
    },
    {
      id: 'campussync',
      index: '04',
      title: 'CampusSync — Smart Academic Planner',
      shortTitle: 'CAMPUSSYNC',
      category: 'ACADEMIC OPERATING SYSTEM',
      description: 'Unified academic operating system for university students featuring dynamic timetable conflict resolution, assignment milestone trackers, and peer study syndication.',
      longDesc: 'CampusSync streamlines university life by combining timetable scheduling, course workload balancing, deadline alerts, and collaborative study group syndication into a high-performance unified dashboard.',
      innovations: [
        'Constraint-satisfaction algorithm solving complex class timetable conflicts.',
        'Automated syllabus deadline extraction and milestone distribution.',
        'Secure multi-role academic resource repository.',
        'Low-overhead relational database architecture with optimized indexing.'
      ],
      techStack: ['Java', 'Spring Boot', 'MySQL', 'React', 'RESTful APIs', 'JWT Security'],
      liveUrl: 'https://github.com/TRB-89',
      repoUrl: 'https://github.com/TRB-89',
      terminalSnippet: `[BOOT] Spring Boot Microservices Context... READY\n[DB] MySQL Connection Pool established (HikariCP)\n[SCHEDULER] Resolving 4-way course timetable clash... RESOLVED\n[SYNC] Assignment milestones synchronized across calendar feed.`
    }
  ];

  let currentProjectIndex = 0;

  // =========================================================================
  // 02. LENIS SMOOTH SCROLL & GSAP SCROLLTRIGGER SYNC
  // =========================================================================
  let lenis = null;

  function initSmoothScroll() {
    if (typeof Lenis !== 'undefined') {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      if (typeof ScrollTrigger !== 'undefined') {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      }
    }
  }

  // =========================================================================
  // 03. RETRO AUDIO SYNTHESIZER (NATIVE WEB AUDIO API)
  // =========================================================================
  const AudioEngine = {
    ctx: null,
    ambientOsc: null,
    ambientGain: null,
    isEnabled: false,

    init() {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      this.ctx = new AudioContext();
    },

    toggle() {
      if (!this.ctx) this.init();
      if (!this.ctx) return false;

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.isEnabled = !this.isEnabled;

      if (this.isEnabled) {
        this.startAmbientDrone();
        this.playBlip(520, 0.08);
      } else {
        this.stopAmbientDrone();
      }

      return this.isEnabled;
    },

    startAmbientDrone() {
      if (!this.ctx || this.ambientOsc) return;

      try {
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(55, this.ctx.currentTime); // Sub-bass A1 note

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(140, this.ctx.currentTime);
        filter.Q.setValueAtTime(3, this.ctx.currentTime);

        gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.025, this.ctx.currentTime + 1.5);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        this.ambientOsc = osc;
        this.ambientGain = gain;
      } catch (e) {
        console.warn('Audio drone error', e);
      }
    },

    stopAmbientDrone() {
      if (!this.ambientGain || !this.ambientOsc) return;
      try {
        const currTime = this.ctx.currentTime;
        this.ambientGain.gain.setValueAtTime(this.ambientGain.gain.value, currTime);
        this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, currTime + 0.5);
        setTimeout(() => {
          if (this.ambientOsc) {
            this.ambientOsc.stop();
            this.ambientOsc.disconnect();
            this.ambientOsc = null;
          }
        }, 600);
      } catch (e) {
        this.ambientOsc = null;
      }
    },

    playClick() {
      if (!this.isEnabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.03);
        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.035);
      } catch (e) {}
    },

    playProjectSwitch() {
      if (!this.isEnabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(320, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(740, this.ctx.currentTime + 0.09);
        gain.gain.setValueAtTime(0.035, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.09);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.095);
      } catch (e) {}
    },

    playBlip(freq = 600, duration = 0.05) {
      if (!this.isEnabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration + 0.01);
      } catch (e) {}
    }
  };

  // =========================================================================
  // 04. MINIMAL CUSTOM CURSOR & MAGNETIC INTERACTIONS
  // =========================================================================
  function initCursor() {
    const cursor = document.getElementById('custom-cursor');
    const coordsEl = document.getElementById('cursor-coords');
    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX;
    let curY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (coordsEl) {
        coordsEl.textContent = `${String(Math.floor(mouseX)).padStart(4, '0')} // ${String(Math.floor(mouseY)).padStart(4, '0')}`;
      }
    });

    function renderCursor() {
      curX += (mouseX - curX) * 0.2;
      curY += (mouseY - curY) * 0.2;
      cursor.style.transform = `translate(${curX}px, ${curY}px)`;
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Magnetic buttons & links
    const hoverElements = document.querySelectorAll('a, button, [data-magnetic], .quick-tab, .channel-card');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('is-hovering');
        AudioEngine.playClick();
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('is-hovering');
        if (el.hasAttribute('data-magnetic')) {
          el.style.transform = 'translate(0px, 0px)';
        }
      });

      if (el.hasAttribute('data-magnetic')) {
        el.addEventListener('mousemove', (e) => {
          const rect = el.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = (e.clientX - centerX) * 0.25;
          const deltaY = (e.clientY - centerY) * 0.25;
          el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });
      }
    });
  }

  // =========================================================================
  // STUDIO ENVIRONMENT MAP GENERATOR (CINEMATIC OPIUM HIGH-CONTRAST CHROME)
  // =========================================================================
  function createStudioEnvironmentMap(renderer) {
    if (!renderer || typeof THREE.PMREMGenerator === 'undefined') return null;
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const envCanvas = document.createElement('canvas');
    envCanvas.width = 1024;
    envCanvas.height = 512;
    const ctx = envCanvas.getContext('2d');

    // Deep pitch black studio base (#020203)
    ctx.fillStyle = '#020203';
    ctx.fillRect(0, 0, 1024, 512);

    // Subtle dark horizon gradient
    const horizon = ctx.createLinearGradient(0, 140, 0, 370);
    horizon.addColorStop(0, '#010102');
    horizon.addColorStop(0.5, '#0b0d10');
    horizon.addColorStop(1, '#010102');
    ctx.fillStyle = horizon;
    ctx.fillRect(0, 140, 1024, 230);

    // Overhead Key Softbox (Intense pure white with soft glow)
    const topGlow = ctx.createRadialGradient(512, 110, 10, 512, 110, 240);
    topGlow.addColorStop(0, '#ffffff');
    topGlow.addColorStop(0.35, 'rgba(255, 255, 255, 0.98)');
    topGlow.addColorStop(0.75, 'rgba(225, 235, 250, 0.45)');
    topGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = topGlow;
    ctx.fillRect(240, 0, 544, 260);

    // Sharp overhead softbox strip
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(380, 60, 264, 45);

    // Left vertical high-contrast strip light (razor-sharp chrome highlight)
    const leftGlow = ctx.createLinearGradient(120, 0, 260, 0);
    leftGlow.addColorStop(0, 'rgba(0,0,0,0)');
    leftGlow.addColorStop(0.5, 'rgba(255,255,255,0.95)');
    leftGlow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = leftGlow;
    ctx.fillRect(120, 80, 140, 340);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(180, 100, 16, 300);

    // Right vertical high-contrast strip light
    const rightGlow = ctx.createLinearGradient(760, 0, 900, 0);
    rightGlow.addColorStop(0, 'rgba(0,0,0,0)');
    rightGlow.addColorStop(0.5, 'rgba(240,245,255,0.9)');
    rightGlow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = rightGlow;
    ctx.fillRect(760, 90, 140, 320);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(825, 110, 14, 280);

    // Bottom rim bounce
    const botGlow = ctx.createRadialGradient(512, 460, 10, 512, 460, 170);
    botGlow.addColorStop(0, 'rgba(215, 225, 240, 0.55)');
    botGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = botGlow;
    ctx.fillRect(340, 360, 344, 150);

    const envTex = new THREE.CanvasTexture(envCanvas);
    const renderTarget = pmremGenerator.fromEquirectangular(envTex);
    envTex.dispose();
    pmremGenerator.dispose();
    return renderTarget.texture;
  }

  // =========================================================================
  // 05. THREE.JS SCENE 1: HERO (REALISTIC POLISHED SILVER CHROME 3D DICE)
  // =========================================================================
  function initHeroScene() {
    const canvas = document.getElementById('hero-3d-canvas');
    const container = document.getElementById('hero-canvas-container');
    if (!canvas || !container || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Studio Environment Map for Physically Accurate Metallic Reflections
    const studioEnv = createStudioEnvironmentMap(renderer);
    if (studioEnv) {
      scene.environment = studioEnv;
    }

    // Cinematic Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(6, 8, 7);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xdbe3ed, 1.8);
    rimLight.position.set(-7, -4, -5);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0xffffff, 2.0, 25);
    fillLight.position.set(0, 2, 6);
    scene.add(fillLight);

    // Create 3D Dice Assembly
    const diceGroup = new THREE.Group();
    scene.add(diceGroup);

    // Procedural Dice Face Texture (Polished Silver Chrome Plate + Glossy Black Chrome Pips #101010)
    function createDiceFaceTexture(dots) {
      const tc = document.createElement('canvas');
      tc.width = 512;
      tc.height = 512;
      const ctx = tc.getContext('2d');

      // Polished Silver Chrome Liquid Base
      const grad = ctx.createLinearGradient(0, 0, 512, 512);
      grad.addColorStop(0, '#f2f5f9');
      grad.addColorStop(0.25, '#dbe2ec');
      grad.addColorStop(0.5, '#ffffff');
      grad.addColorStop(0.75, '#c5ccd6');
      grad.addColorStop(1, '#e2e7ef');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      // Fine chrome edge bevel highlight
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.lineWidth = 14;
      ctx.strokeRect(10, 10, 492, 492);

      // Inner hairline specular reflection
      ctx.strokeStyle = 'rgba(160, 170, 185, 0.45)';
      ctx.lineWidth = 2;
      ctx.strokeRect(22, 22, 468, 468);

      // Subtle technical coordinates hairline
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(256, 28); ctx.lineTo(256, 484);
      ctx.moveTo(28, 256); ctx.lineTo(484, 256);
      ctx.stroke();

      // Draw Pips (Glossy Black Chrome #101010 with subtle metallic reflection & high-contrast silver rim)
      const drawPip = (x, y) => {
        // 1. Inset bevel outer ring - razor-sharp white-silver specular rim highlight
        ctx.beginPath();
        ctx.arc(x, y, 40, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fill();

        // 2. Inset groove shadow (creates 3D recessed depth)
        ctx.beginPath();
        ctx.arc(x, y, 38, 0, Math.PI * 2);
        ctx.fillStyle = '#050505';
        ctx.fill();

        // 3. Glossy black chrome body (#101010)
        ctx.beginPath();
        ctx.arc(x, y, 36, 0, Math.PI * 2);
        const pipGrad = ctx.createRadialGradient(x - 10, y - 10, 2, x, y, 36);
        pipGrad.addColorStop(0, '#262626'); // subtle specular hotspot
        pipGrad.addColorStop(0.35, '#101010'); // glossy black chrome body (#101010)
        pipGrad.addColorStop(1, '#080808'); // dark rim
        ctx.fillStyle = pipGrad;
        ctx.fill();

        // 4. Subtle metallic reflection crescent (physically accurate glossy highlight)
        ctx.beginPath();
        ctx.arc(x - 9, y - 9, 14, 0, Math.PI * 2);
        const specGrad = ctx.createRadialGradient(x - 9, y - 9, 1, x - 9, y - 9, 14);
        specGrad.addColorStop(0, 'rgba(255, 255, 255, 0.55)');
        specGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
        specGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = specGrad;
        ctx.fill();

        // 5. Razor-sharp subtle rim stroke
        ctx.beginPath();
        ctx.arc(x, y, 36, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      };

      const c = 256;
      const l = 130;
      const r = 382;

      switch (dots) {
        case 1: drawPip(c, c); break;
        case 2: drawPip(l, l); drawPip(r, r); break;
        case 3: drawPip(l, l); drawPip(c, c); drawPip(r, r); break;
        case 4: drawPip(l, l); drawPip(r, l); drawPip(l, r); drawPip(r, r); break;
        case 5: drawPip(l, l); drawPip(r, l); drawPip(c, c); drawPip(l, r); drawPip(r, r); break;
        case 6: drawPip(l, 140); drawPip(l, c); drawPip(l, 372); drawPip(r, 140); drawPip(r, c); drawPip(r, 372); break;
      }

      const tex = new THREE.CanvasTexture(tc);
      tex.needsUpdate = true;
      return tex;
    }

    // Realistic Polished Silver Chrome Materials with High Gloss & Environmental Reflections
    const createChromeMaterial = (dots) => new THREE.MeshPhysicalMaterial({
      map: createDiceFaceTexture(dots),
      roughness: 0.02,
      metalness: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      reflectivity: 1.0,
      envMap: studioEnv,
      envMapIntensity: 1.8
    });

    // Materials for the 6 faces (Right=1, Left=6, Top=2, Bottom=5, Front=3, Back=4)
    const diceMaterials = [
      createChromeMaterial(1),
      createChromeMaterial(6),
      createChromeMaterial(2),
      createChromeMaterial(5),
      createChromeMaterial(3),
      createChromeMaterial(4),
    ];

    const diceGeometry = new THREE.BoxGeometry(2.3, 2.3, 2.3, 2, 2, 2);
    const diceMesh = new THREE.Mesh(diceGeometry, diceMaterials);
    diceGroup.add(diceMesh);

    // Inner Polished Chrome Core Sphere for internal reflections
    const coreGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 1.0,
      roughness: 0.02,
      clearcoat: 1.0,
      envMap: studioEnv,
      envMapIntensity: 1.6
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    diceGroup.add(coreMesh);

    // Floating Dust Particles
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.04,
      transparent: true,
      opacity: 0.45
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Atmospheric Background Watermark Element
    const watermarkEl = document.getElementById('hero-bg-watermark');
    let targetWatermarkX = 0;
    let targetWatermarkY = 0;
    let watermarkCurX = 0;
    let watermarkCurY = 0;

    // Mouse Interaction
    let targetRotX = 0.4;
    let targetRotY = 0.6;
    let mouseNormX = 0;
    let mouseNormY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseNormX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseNormY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotY = mouseNormX * 1.2;
      targetRotX = -mouseNormY * 0.9;

      // Subtle atmospheric parallax on the background watermark
      targetWatermarkX = mouseNormX * -14;
      targetWatermarkY = mouseNormY * -10;
    });

    // Resize Handler
    function handleResize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener('resize', handleResize);

    // ScrollTrigger Depth Displacement
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          diceGroup.position.y = -self.progress * 4.2;
          diceGroup.position.z = -self.progress * 3.5;
          diceGroup.rotation.x = self.progress * Math.PI * 1.5;
          diceGroup.rotation.y = self.progress * Math.PI * 1.2;

          // Subtle watermark scroll opacity fade
          if (watermarkEl) {
            watermarkEl.style.opacity = Math.max(0, 1 - self.progress * 1.6);
          }
        }
      });
    }

    // Render Loop with Visibility Check
    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    observer.observe(container);

    let clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Perpetual slow spin with mouse inertia
      diceMesh.rotation.y += 0.006;
      diceMesh.rotation.x += 0.003;

      diceGroup.rotation.x += (targetRotX - diceGroup.rotation.x) * 0.05;
      diceGroup.rotation.y += (targetRotY - diceGroup.rotation.y) * 0.05;
      diceGroup.position.y = Math.sin(elapsed * 1.2) * 0.12;

      // Subtle parallax lerp for background watermark
      if (watermarkEl) {
        watermarkCurX += (targetWatermarkX - watermarkCurX) * 0.04;
        watermarkCurY += (targetWatermarkY - watermarkCurY) * 0.04;
        watermarkEl.style.transform = `translate(calc(-50% + ${watermarkCurX.toFixed(2)}px), calc(-50% + ${watermarkCurY.toFixed(2)}px))`;
      }

      particles.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
    }
    animate();
  }

  // =========================================================================
  // 06. THREE.JS SCENE 2: WORK (3D RETRO HANDHELD CONSOLE)
  // =========================================================================
  let workConsoleAPI = {
    triggerGlitch: () => {},
    updateScreenTexture: () => {}
  };

  function initWorkConsoleScene() {
    const canvas = document.getElementById('work-3d-console-canvas');
    const container = document.getElementById('console-canvas-wrap');
    if (!canvas || !container || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
    keyLight.position.set(4, 6, 7);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xd1d5db, 1.2);
    rimLight.position.set(-5, -4, -3);
    scene.add(rimLight);

    // Root Group
    const consoleGroup = new THREE.Group();
    scene.add(consoleGroup);

    // -----------------------------------------------------------------------
    // Dynamic Offscreen Screen Canvas (Renders live project UI + scanlines)
    // -----------------------------------------------------------------------
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 384;
    const sCtx = screenCanvas.getContext('2d');
    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.minFilter = THREE.LinearFilter;
    screenTexture.magFilter = THREE.LinearFilter;

    let glitchFactor = 0;

    function renderScreenContent() {
      const p = PROJECTS_ARCHIVE[currentProjectIndex];

      // Screen background: deep obsidian CRT tint
      sCtx.fillStyle = '#060809';
      sCtx.fillRect(0, 0, 512, 384);

      // CRT curvature grid lines
      sCtx.strokeStyle = 'rgba(0, 255, 102, 0.08)';
      sCtx.lineWidth = 1;
      for (let x = 0; x < 512; x += 32) {
        sCtx.beginPath();
        sCtx.moveTo(x, 0); sCtx.lineTo(x, 384);
        sCtx.stroke();
      }
      for (let y = 0; y < 384; y += 32) {
        sCtx.beginPath();
        sCtx.moveTo(0, y); sCtx.lineTo(512, y);
        sCtx.stroke();
      }

      // Top Status Bar
      sCtx.fillStyle = '#00ff66';
      sCtx.font = '14px "Silkscreen", monospace';
      sCtx.fillText(`TR-OS // SYS_0${p.index}`, 20, 26);
      sCtx.fillText(`PWR: 98% [■■■■]`, 340, 26);

      sCtx.strokeStyle = 'rgba(0, 255, 102, 0.4)';
      sCtx.beginPath();
      sCtx.moveTo(20, 36); sCtx.lineTo(492, 36);
      sCtx.stroke();

      // Main Project Title Banner
      sCtx.fillStyle = '#ffffff';
      sCtx.font = 'bold 26px "Space Grotesk", sans-serif';
      sCtx.fillText(p.shortTitle, 20, 78);

      // Category Pill
      sCtx.fillStyle = '#00ff66';
      sCtx.font = '11px "Silkscreen", monospace';
      sCtx.fillText(`[ ${p.category} ]`, 20, 104);

      // Animated Waveform / Neural Visualizer Box
      sCtx.fillStyle = '#0a100d';
      sCtx.fillRect(20, 120, 472, 130);
      sCtx.strokeStyle = 'rgba(0, 255, 102, 0.5)';
      sCtx.strokeRect(20, 120, 472, 130);

      // Animated Sine / Pulse Waves inside screen
      const time = performance.now() * 0.003;
      sCtx.beginPath();
      sCtx.strokeStyle = '#00ff66';
      sCtx.lineWidth = 2;
      for (let x = 0; x < 472; x += 4) {
        const y = 185 + Math.sin(time + x * 0.05 + currentProjectIndex) * 28 * Math.cos(x * 0.015);
        if (x === 0) sCtx.moveTo(20 + x, y);
        else sCtx.lineTo(20 + x, y);
      }
      sCtx.stroke();

      // Technical coordinates & tags
      sCtx.fillStyle = '#888888';
      sCtx.font = '11px "JetBrains Mono", monospace';
      sCtx.fillText(`NODE: 0x7F // CLUSTER: ACTIVE // LATENCY: 12ms`, 30, 235);

      // Project Tech Stack Strip
      sCtx.fillStyle = '#ffffff';
      sCtx.font = '12px "JetBrains Mono", monospace';
      const stackText = p.techStack.slice(0, 4).join(' • ');
      sCtx.fillText(`STACK: ${stackText}`, 20, 280);

      // Bottom Navigation Prompt
      sCtx.fillStyle = '#00ff66';
      sCtx.font = '12px "Silkscreen", monospace';
      sCtx.fillText(`[ CLICK CONSOLE TO OPEN DOSSIER ]`, 100, 320);

      // CRT Scanlines Effect
      sCtx.fillStyle = 'rgba(0, 0, 0, 0.28)';
      for (let y = 0; y < 384; y += 4) {
        sCtx.fillRect(0, y, 512, 2);
      }

      // Glitch Shader Burst if triggered
      if (glitchFactor > 0.01) {
        sCtx.fillStyle = `rgba(255, 255, 255, ${glitchFactor * 0.4})`;
        sCtx.fillRect(0, Math.random() * 384, 512, Math.random() * 60);

        sCtx.fillStyle = `rgba(0, 255, 102, ${glitchFactor * 0.3})`;
        sCtx.fillRect(0, Math.random() * 384, 512, Math.random() * 30);
      }

      screenTexture.needsUpdate = true;
    }

    renderScreenContent();

    workConsoleAPI.triggerGlitch = () => {
      glitchFactor = 0.9;
    };
    workConsoleAPI.updateScreenTexture = renderScreenContent;

    // -----------------------------------------------------------------------
    // Construct Procedural 3D Retro Handheld Console Body
    // -----------------------------------------------------------------------
    // 1. Main Matte Obsidian Chassis
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x111315,
      roughness: 0.35,
      metalness: 0.7
    });
    const bodyGeo = new THREE.BoxGeometry(3.6, 5.0, 0.6, 2, 2, 2);
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    consoleGroup.add(bodyMesh);

    // 2. Beveled Top Screen Bezel Frame
    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0x070809,
      roughness: 0.2,
      metalness: 0.8
    });
    const bezelGeo = new THREE.BoxGeometry(3.1, 2.4, 0.65);
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
    bezelMesh.position.set(0, 0.85, 0.02);
    consoleGroup.add(bezelMesh);

    // 3. Interactive Screen Surface (Textured with screenTexture)
    const screenGeo = new THREE.PlaneGeometry(2.7, 2.0);
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
      transparent: false
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0.85, 0.36);
    screenMesh.name = 'console-screen-interactive';
    consoleGroup.add(screenMesh);

    // 4. Directional Pad (D-Pad Cross)
    const dpadMat = new THREE.MeshStandardMaterial({
      color: 0x1f2327,
      roughness: 0.25,
      metalness: 0.6
    });
    const dpadGroup = new THREE.Group();
    dpadGroup.position.set(-0.85, -1.0, 0.32);

    const dpadHoriz = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.26, 0.15), dpadMat);
    const dpadVert = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.8, 0.15), dpadMat);
    dpadGroup.add(dpadHoriz);
    dpadGroup.add(dpadVert);
    consoleGroup.add(dpadGroup);

    // 5. Action Buttons (A and B Chrome Buttons)
    const btnMat = new THREE.MeshStandardMaterial({
      color: 0xd1d5db,
      metalness: 0.95,
      roughness: 0.1
    });

    const btnB = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.16, 24), btnMat);
    btnB.rotation.x = Math.PI / 2;
    btnB.position.set(0.65, -1.15, 0.34);
    btnB.name = 'button-b';
    consoleGroup.add(btnB);

    const btnA = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.16, 24), btnMat);
    btnA.rotation.x = Math.PI / 2;
    btnA.position.set(1.05, -0.85, 0.34);
    btnA.name = 'button-a';
    consoleGroup.add(btnA);

    // 6. Start & Select Pill Buttons
    const pillMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.4, metalness: 0.5 });
    const pillGeo = new THREE.BoxGeometry(0.35, 0.1, 0.1);

    const selBtn = new THREE.Mesh(pillGeo, pillMat);
    selBtn.rotation.z = -0.35;
    selBtn.position.set(-0.35, -1.85, 0.32);
    consoleGroup.add(selBtn);

    const startBtn = new THREE.Mesh(pillGeo, pillMat);
    startBtn.rotation.z = -0.35;
    startBtn.position.set(0.15, -1.85, 0.32);
    consoleGroup.add(startBtn);

    // 7. Power LED (Pulsing Cyan/Emerald Light)
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x00ff66 });
    const ledMesh = new THREE.Mesh(new THREE.CircleGeometry(0.04, 16), ledMat);
    ledMesh.position.set(-1.25, 1.85, 0.36);
    consoleGroup.add(ledMesh);

    // -----------------------------------------------------------------------
    // Mouse Interaction, Raycasting & Tilting
    // -----------------------------------------------------------------------
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let targetTiltX = 0;
    let targetTiltY = 0;

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouse.x = x;
      mouse.y = y;

      targetTiltY = x * 0.45;
      targetTiltX = -y * 0.35;
    });

    container.addEventListener('mouseleave', () => {
      targetTiltX = 0;
      targetTiltY = 0;
    });

    // Clicking Screen / Buttons on the 3D Handheld
    container.addEventListener('click', (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(consoleGroup.children, true);

      if (intersects.length > 0) {
        const hitName = intersects[0].object.name;
        if (hitName === 'console-screen-interactive') {
          openProjectModal(currentProjectIndex);
          AudioEngine.playClick();
        } else if (hitName === 'button-a') {
          switchProject((currentProjectIndex + 1) % PROJECTS_ARCHIVE.length);
        } else if (hitName === 'button-b') {
          switchProject((currentProjectIndex - 1 + PROJECTS_ARCHIVE.length) % PROJECTS_ARCHIVE.length);
        }
      }
    });

    // Resize Handler
    function handleResize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener('resize', handleResize);

    // Visibility Observer
    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    observer.observe(container);

    let clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Glitch decay
      if (glitchFactor > 0) {
        glitchFactor = Math.max(0, glitchFactor - 0.05);
      }

      // Live update screen wave visualizer
      renderScreenContent();

      // Console gentle floating & mouse tilt
      consoleGroup.rotation.y += (targetTiltY - consoleGroup.rotation.y) * 0.08;
      consoleGroup.rotation.x += (targetTiltX - consoleGroup.rotation.x) * 0.08;
      consoleGroup.position.y = Math.sin(elapsed * 1.5) * 0.08;

      // Pulse LED brightness
      ledMat.color.setHSL(0.38, 1, 0.4 + Math.sin(elapsed * 4) * 0.15);

      renderer.render(scene, camera);
    }
    animate();
  }

  // =========================================================================
  // 07. THREE.JS SCENE 3: ABOUT SECTION (3D CHROME OPTICAL DISC & GYRO)
  // =========================================================================
  function initAboutScene() {
    const canvas = document.getElementById('about-3d-canvas');
    const container = document.getElementById('about-3d-disc-container');
    if (!canvas || !container || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 50);
    camera.position.set(0, 0, 4.5);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight1.position.set(3, 4, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xd1d5db, 1.2);
    dirLight2.position.set(-3, -3, -4);
    scene.add(dirLight2);

    const discGroup = new THREE.Group();
    scene.add(discGroup);

    // Procedural CD-ROM Optical Disc Texture with Rainbow Sheen
    const cdCanvas = document.createElement('canvas');
    cdCanvas.width = 512;
    cdCanvas.height = 512;
    const ctx = cdCanvas.getContext('2d');

    // Metallic radial tracks
    const radGrad = ctx.createRadialGradient(256, 256, 40, 256, 256, 250);
    radGrad.addColorStop(0, '#111111');
    radGrad.addColorStop(0.18, '#ffffff');
    radGrad.addColorStop(0.24, '#888888');
    radGrad.addColorStop(0.45, '#e0e0e0');
    radGrad.addColorStop(0.65, '#999999');
    radGrad.addColorStop(0.85, '#f5f5f5');
    radGrad.addColorStop(1, '#222222');
    ctx.fillStyle = radGrad;
    ctx.fillRect(0, 0, 512, 512);

    // Fine radial tracks
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    for (let r = 50; r < 240; r += 4) {
      ctx.beginPath();
      ctx.arc(256, 256, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Center Transparent Spindle
    ctx.fillStyle = '#050505';
    ctx.beginPath();
    ctx.arc(256, 256, 38, 0, Math.PI * 2);
    ctx.fill();

    const cdTex = new THREE.CanvasTexture(cdCanvas);
    const discGeo = new THREE.CylinderGeometry(1.5, 1.5, 0.03, 48);
    const discMat = new THREE.MeshStandardMaterial({
      map: cdTex,
      metalness: 0.95,
      roughness: 0.1
    });
    const discMesh = new THREE.Mesh(discGeo, discMat);
    discMesh.rotation.x = Math.PI / 3;
    discGroup.add(discMesh);

    // Gyroscope Outer Chrome Ring
    const ringGeo = new THREE.TorusGeometry(1.8, 0.025, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.95, roughness: 0.08 });
    const ringMesh1 = new THREE.Mesh(ringGeo, ringMat);
    discGroup.add(ringMesh1);

    const ringMesh2 = new THREE.Mesh(new THREE.TorusGeometry(2.0, 0.02, 16, 64), ringMat);
    ringMesh2.rotation.y = Math.PI / 2;
    discGroup.add(ringMesh2);

    // Resize
    window.addEventListener('resize', () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });

    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    observer.observe(container);

    let clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();
      discMesh.rotation.y += 0.02;
      ringMesh1.rotation.x = elapsed * 0.4;
      ringMesh1.rotation.y = elapsed * 0.3;
      ringMesh2.rotation.z = -elapsed * 0.35;

      discGroup.rotation.z = Math.sin(elapsed * 0.5) * 0.2;

      renderer.render(scene, camera);
    }
    animate();
  }

  // =========================================================================
  // 08. THREE.JS SCENE 4: CONTACT (3D CHROME PLAYING CARD TALISMAN)
  // =========================================================================
  function initContactScene() {
    const canvas = document.getElementById('contact-3d-canvas');
    const container = document.getElementById('contact-canvas-wrap');
    if (!canvas || !container || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 50);
    camera.position.set(0, 0, 5.8);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Studio Environment Map for High-Gloss Metallic Card Reflections
    const contactEnv = createStudioEnvironmentMap(renderer);
    if (contactEnv) {
      scene.environment = contactEnv;
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(5, 6, 7);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xdbe3ed, 1.6);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    const cardGroup = new THREE.Group();
    scene.add(cardGroup);

    // Procedural Ace of Spades Card Face (Deep Black Card with Pure White #FFFFFF Spade)
    function createCardFrontTexture() {
      const tc = document.createElement('canvas');
      tc.width = 512;
      tc.height = 768;
      const ctx = tc.getContext('2d');

      // Deep Pitch Black Luxury Card Plate (#050505 / #08080a)
      const grad = ctx.createLinearGradient(0, 0, 512, 768);
      grad.addColorStop(0, '#090a0c');
      grad.addColorStop(0.4, '#040405');
      grad.addColorStop(0.7, '#07080a');
      grad.addColorStop(1, '#020203');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 768);

      // Fine chrome hairline borders
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.lineWidth = 8;
      ctx.strokeRect(20, 20, 472, 728);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.lineWidth = 2;
      ctx.strokeRect(32, 32, 448, 704);

      // Corner Aces & Spades in Pure White (#FFFFFF)
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 44px "Space Grotesk", sans-serif';
      ctx.fillText('A', 50, 80);
      ctx.fillText('♠', 50, 124);

      ctx.save();
      ctx.translate(512, 768);
      ctx.rotate(Math.PI);
      ctx.fillText('A', 50, 80);
      ctx.fillText('♠', 50, 124);
      ctx.restore();

      // Center Massive Spade Symbol in PURE WHITE (#FFFFFF)
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      // Stylized Crisp Vector Spade
      ctx.moveTo(256, 230);
      ctx.bezierCurveTo(195, 305, 130, 370, 130, 445);
      ctx.bezierCurveTo(130, 520, 205, 550, 256, 495);
      ctx.bezierCurveTo(307, 550, 382, 520, 382, 445);
      ctx.bezierCurveTo(382, 370, 317, 305, 256, 230);
      ctx.fill();

      // Spade stem in PURE WHITE (#FFFFFF)
      ctx.beginPath();
      ctx.moveTo(256, 485);
      ctx.lineTo(205, 560);
      ctx.lineTo(307, 560);
      ctx.closePath();
      ctx.fill();

      // Circuit tracks across card in high-contrast crisp silver-white
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(56, 384); ctx.lineTo(130, 384); ctx.lineTo(170, 340);
      ctx.moveTo(456, 384); ctx.lineTo(382, 384); ctx.lineTo(342, 428);
      ctx.stroke();

      // Node terminals
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(56, 384, 4, 0, Math.PI * 2);
      ctx.arc(456, 384, 4, 0, Math.PI * 2);
      ctx.fill();

      // High-contrast Monogram Inset inside the Pure White Spade
      ctx.fillStyle = '#050505';
      ctx.font = 'bold 22px "Silkscreen", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('TR // 2026', 256, 435);

      const tex = new THREE.CanvasTexture(tc);
      tex.needsUpdate = true;
      return tex;
    }

    // Procedural Card Back Texture (Opium Brutalist Starburst on Obsidian Plate)
    function createCardBackTexture() {
      const tc = document.createElement('canvas');
      tc.width = 512;
      tc.height = 768;
      const ctx = tc.getContext('2d');

      // Deep Black Base Plate
      ctx.fillStyle = '#040405';
      ctx.fillRect(0, 0, 512, 768);

      // Chrome Hairline Borders
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.lineWidth = 8;
      ctx.strokeRect(20, 20, 472, 728);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.lineWidth = 2;
      ctx.strokeRect(32, 32, 448, 704);

      // Geometric Crosshair Matrix & 4-Point Star in Pure White (#FFFFFF)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(256, 80); ctx.lineTo(256, 688);
      ctx.moveTo(60, 384); ctx.lineTo(452, 384);
      ctx.stroke();

      // Center Starburst
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.moveTo(256, 300);
      ctx.bezierCurveTo(256, 360, 256, 360, 340, 384);
      ctx.bezierCurveTo(256, 384, 256, 384, 256, 468);
      ctx.bezierCurveTo(256, 408, 256, 408, 172, 384);
      ctx.bezierCurveTo(256, 384, 256, 384, 256, 300);
      ctx.fill();

      // Micro Technical Labels
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = '11px "Silkscreen", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('ARCHIVE // SPEC-2026', 256, 520);
      ctx.fillText('CHROME OPIUM TALISMAN', 256, 540);

      const tex = new THREE.CanvasTexture(tc);
      tex.needsUpdate = true;
      return tex;
    }

    const cardFrontTex = createCardFrontTexture();
    const cardBackTex = createCardBackTexture();
    const cardGeo = new THREE.BoxGeometry(2.0, 3.0, 0.04);

    // Polished Silver Chrome Edge Material
    const edgeMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 1.0,
      roughness: 0.03,
      clearcoat: 1.0,
      envMap: contactEnv,
      envMapIntensity: 1.6
    });

    // High-Gloss Obsidian Card Face Material with Pure White Spade (#FFFFFF)
    const frontMat = new THREE.MeshPhysicalMaterial({
      map: cardFrontTex,
      metalness: 0.9,
      roughness: 0.06,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      reflectivity: 1.0,
      envMap: contactEnv,
      envMapIntensity: 1.4
    });

    // High-Gloss Obsidian Card Back Material
    const backMat = new THREE.MeshPhysicalMaterial({
      map: cardBackTex,
      metalness: 0.9,
      roughness: 0.06,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      reflectivity: 1.0,
      envMap: contactEnv,
      envMapIntensity: 1.4
    });

    // BoxGeometry face order: +X, -X, +Y, -Y, +Z (Front), -Z (Back)
    const cardMaterials = [edgeMat, edgeMat, edgeMat, edgeMat, frontMat, backMat];
    const cardMesh = new THREE.Mesh(cardGeo, cardMaterials);
    cardGroup.add(cardMesh);

    // Mouse tilt tracking
    let targetTiltX = 0;
    let targetTiltY = 0;

    window.addEventListener('mousemove', (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetTiltY = normX * 0.8;
      targetTiltX = -normY * 0.6;
    });

    // Resize
    window.addEventListener('resize', () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });

    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    observer.observe(container);

    let clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Slow perpetual 3D tumbling rotation
      cardMesh.rotation.y += 0.008;

      cardGroup.rotation.x += (targetTiltX - cardGroup.rotation.x) * 0.05;
      cardGroup.rotation.y += (targetTiltY - cardGroup.rotation.y) * 0.05;
      cardGroup.position.y = Math.sin(elapsed * 1.4) * 0.1;

      renderer.render(scene, camera);
    }
    animate();
  }

  // =========================================================================
  // 09. WORK SECTION PROJECT CONTROLS & DOSSIER MODAL
  // =========================================================================
  function switchProject(newIndex) {
    if (newIndex < 0) newIndex = PROJECTS_ARCHIVE.length - 1;
    if (newIndex >= PROJECTS_ARCHIVE.length) newIndex = 0;

    currentProjectIndex = newIndex;
    const p = PROJECTS_ARCHIVE[currentProjectIndex];

    // Trigger 3D console screen glitch effect
    workConsoleAPI.triggerGlitch();
    AudioEngine.playProjectSwitch();

    // Update Counter
    const numEl = document.getElementById('current-project-num');
    if (numEl) numEl.textContent = p.index;

    // Update Quick Tabs
    document.querySelectorAll('.quick-tab').forEach((tab, idx) => {
      if (idx === currentProjectIndex) {
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
      } else {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
      }
    });

    // Update Telemetry Card with Smooth GSAP transition
    const titleEl = document.getElementById('telemetry-title');
    const catEl = document.getElementById('telemetry-category');
    const descEl = document.getElementById('telemetry-desc');
    const tagsEl = document.getElementById('telemetry-tags');
    const liveLinkEl = document.getElementById('telemetry-live-link');
    const repoLinkEl = document.getElementById('telemetry-repo-link');

    if (titleEl) titleEl.textContent = p.title;
    if (catEl) catEl.textContent = p.category;
    if (descEl) descEl.textContent = p.description;

    if (tagsEl) {
      tagsEl.innerHTML = p.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('');
    }

    if (liveLinkEl) {
      liveLinkEl.href = p.liveUrl;
    }
    if (repoLinkEl) {
      repoLinkEl.href = p.repoUrl;
    }

    // Trigger Three.js screen redraw
    workConsoleAPI.updateScreenTexture();
  }

  function openProjectModal(index) {
    const p = PROJECTS_ARCHIVE[index];
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    document.getElementById('modal-index-badge').textContent = `${p.index} // 04`;
    document.getElementById('modal-project-title').textContent = p.title;
    document.getElementById('modal-project-category').textContent = p.category;
    document.getElementById('modal-term-title').textContent = `${p.id}_engine // runtime`;
    document.getElementById('modal-term-code').textContent = p.terminalSnippet;
    document.getElementById('modal-project-long-desc').textContent = p.longDesc;

    const bulletsEl = document.getElementById('modal-project-bullets');
    bulletsEl.innerHTML = p.innovations.map(item => `<li>${item}</li>`).join('');

    const stackEl = document.getElementById('modal-project-stack');
    stackEl.innerHTML = p.techStack.map(item => `<span class="tech-tag">${item}</span>`).join('');

    document.getElementById('modal-live-btn').href = p.liveUrl;
    document.getElementById('modal-repo-btn').href = p.repoUrl;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (lenis) lenis.stop();
  }

  function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lenis) lenis.start();
  }

  function initProjectEvents() {
    // Prev / Next Buttons
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        switchProject(currentProjectIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        switchProject(currentProjectIndex + 1);
      });
    }

    // Direct Quick Tabs
    document.querySelectorAll('.quick-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        const idx = parseInt(tab.getAttribute('data-index'), 10);
        switchProject(idx);
      });
    });

    // Dossier Trigger
    const dossierBtn = document.getElementById('open-dossier-btn');
    if (dossierBtn) {
      dossierBtn.addEventListener('click', () => {
        openProjectModal(currentProjectIndex);
        AudioEngine.playClick();
      });
    }

    // Modal Close
    const closeBtn = document.getElementById('modal-close-btn');
    const backdrop = document.getElementById('modal-backdrop');
    if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
    if (backdrop) backdrop.addEventListener('click', closeProjectModal);

    // Keyboard controls (Arrow keys switch projects, ESC closes modal, 1-4 jump)
    window.addEventListener('keydown', (e) => {
      const modal = document.getElementById('project-modal');
      const isModalOpen = modal && modal.classList.contains('is-open');

      if (e.key === 'Escape' && isModalOpen) {
        closeProjectModal();
      } else if (!isModalOpen) {
        if (e.key === 'ArrowRight') switchProject(currentProjectIndex + 1);
        if (e.key === 'ArrowLeft') switchProject(currentProjectIndex - 1);
        if (['1', '2', '3', '4'].includes(e.key)) {
          switchProject(parseInt(e.key, 10) - 1);
        }
      }
    });
  }

  // =========================================================================
  // 10. THEME SWITCHER & HUD CONTROLS
  // =========================================================================
  function initHudControls() {
    // Theme Invert Toggle
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const isNowInverted = document.body.classList.toggle('theme-invert');
        const textSpan = themeBtn.querySelector('.btn-text');
        if (textSpan) {
          textSpan.textContent = isNowInverted ? 'NORMAL' : 'INVERT';
        }
        AudioEngine.playClick();
      });
    }

    // Audio Toggle
    const audioBtn = document.getElementById('audio-toggle');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        const isEnabled = AudioEngine.toggle();
        const textSpan = audioBtn.querySelector('.btn-text');
        if (textSpan) {
          textSpan.textContent = isEnabled ? 'AUDIO: ON' : 'AUDIO: OFF';
        }
        document.body.setAttribute('data-audio', isEnabled ? 'on' : 'off');
      });
    }

    // Back to Top Button
    const topBtn = document.getElementById('back-to-top');
    if (topBtn) {
      topBtn.addEventListener('click', () => {
        if (lenis) {
          lenis.scrollTo(0, { duration: 1.5 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        AudioEngine.playClick();
      });
    }

    // Real-Time Clock & Coordinates
    function updateClock() {
      const timeEl = document.getElementById('live-time-utc');
      if (timeEl) {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', { hour12: false });
        timeEl.textContent = `TIME: ${timeStr} IST // UTC+5:30`;
      }
    }
    updateClock();
    setInterval(updateClock, 1000);
  }

  // =========================================================================
  // 11. GSAP CINEMATIC REVEALS & SCROLL ANIMATIONS
  // =========================================================================
  function initGsapReveals() {
    if (typeof gsap === 'undefined') return;

    // Hero Entry Animation Timeline
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl.from('.brand-badge, .nav-item, .hud-btn', {
      opacity: 0,
      y: -20,
      stagger: 0.05,
      duration: 0.8
    });

    heroTl.from('.hero-label-top', {
      opacity: 0,
      y: 20,
      duration: 0.8
    }, '-=0.4');

    heroTl.from('.hero-first', {
      opacity: 0,
      x: -60,
      filter: 'blur(10px)',
      duration: 1.2
    }, '-=0.5');

    heroTl.from('.hero-last', {
      opacity: 0,
      x: 60,
      filter: 'blur(10px)',
      duration: 1.2
    }, '-=1.0');

    heroTl.from('.hero-bg-watermark', {
      opacity: 0,
      scale: 0.94,
      duration: 1.6,
      ease: 'power3.out'
    }, '-=0.8');

    heroTl.from('.hero-sub-bar', {
      opacity: 0,
      y: 30,
      duration: 1.0
    }, '-=0.6');

    heroTl.from('.halftone-star', {
      opacity: 0,
      scale: 0.7,
      duration: 1.5,
      stagger: 0.2
    }, '-=1.0');

    // ScrollTrigger Reveals for Sections
    if (typeof ScrollTrigger !== 'undefined') {
      // Work Section
      gsap.from('.work-header-wrap', {
        scrollTrigger: {
          trigger: '#work',
          start: 'top 80%'
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out'
      });

      // About Section
      gsap.from('.portrait-frame', {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 75%'
        },
        opacity: 0,
        x: -40,
        duration: 1.0,
        ease: 'power3.out'
      });

      gsap.from('.about-content-col', {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 75%'
        },
        opacity: 0,
        x: 40,
        duration: 1.0,
        ease: 'power3.out'
      });

      // Contact Section
      gsap.from('.contact-massive-heading .contact-left', {
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 75%'
        },
        opacity: 0,
        x: -50,
        duration: 1.0,
        ease: 'power3.out'
      });

      gsap.from('.contact-massive-heading .contact-right', {
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 75%'
        },
        opacity: 0,
        x: 50,
        duration: 1.0,
        ease: 'power3.out'
      });

      gsap.from('.channel-card', {
        scrollTrigger: {
          trigger: '.contact-channels-grid',
          start: 'top 85%'
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
      });
    }
  }

  // =========================================================================
  // 12. INITIALIZATION ORCHESTRATOR
  // =========================================================================
  window.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initCursor();
    initHeroScene();
    initWorkConsoleScene();
    initAboutScene();
    initContactScene();
    initProjectEvents();
    initHudControls();
    initGsapReveals();

    // Lucide Icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  });

})();
