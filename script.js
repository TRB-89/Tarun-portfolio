/**
 * ==========================================================================
 * ADOBE ILLUSTRATOR-INSPIRED CREATIVE WORKSPACE PORTFOLIO
 * Author: Creative Developer & AI Engineer
 * Tech: Vanilla JS (ES6+), GSAP & ScrollTrigger, Lucide Icons, Web Audio API
 * ==========================================================================
 */

'use strict';

/* ==========================================================================
   01. CENTRALIZED EDITABLE PORTFOLIO DATA OBJECT
   Modify this object to easily change personal details, links, and content!
   ========================================================================== */
const PORTFOLIO_DATA = {
  profile: {
    fullName: "Tarun R",
    roleTitle: "Creative Developer & AI Systems Engineer",
    degree: "B.Tech in Computer Science & Business Systems",
    institution: "RIT (Rajalakshmi Institute of Technology)",
    email: "tarunbanurekha@gmail.com",
    githubUrl: "https://github.com/TRB-89",
    linkedinUrl: "https://www.linkedin.com/in/tarun-r-127503384/",
    resumeUrl: "assets/resume.pdf",
    portraitImagePath: "assets/portrait.jpg",
    bio: {
      lead: "I am a Computer Science & Business Systems undergraduate bridging algorithmic intelligence, modern full-stack architecture, and creative visual engineering.",
      secondary: "My passion lies in crafting resilient software that solves tangible human challenges: from AI-powered career re-entry platforms and empathetic conversational companions to community-driven sustainability action networks.",
      credo: "I look at code the way a master designer looks at a canvas: every component must possess structural integrity, purposeful aesthetics, and seamless user empathy."
    }
  },

  projects: [
    {
      id: "gfg",
      number: "01",
      title: "GFG: Gap For Good",
      category: "AI Career Platform",
      status: "LIVE PLATFORM",
      year: "2026",
      url: "https://gfg-sable.vercel.app/",
      description: "An AI-supported career comeback platform helping women return to work after maternity, caregiving, and other career breaks with personalized readiness scores and skill gap bridges.",
      tags: ["AI Skill Normalizer", "Readiness Engine", "FastAPI", "React / Next.js", "Supabase"]
    },
    {
      id: "aura",
      number: "02",
      title: "AURA",
      category: "Voice AI & Mental Health",
      status: "LIVE PLATFORM",
      year: "2026",
      url: "https://aura-umber-eight-10.vercel.app/",
      description: "An AI-powered emotional wellness companion featuring real-time conversational empathy, bi-directional voice interaction, introspective journaling, and session reflections.",
      tags: ["Conversational Voice AI", "Sentiment Analysis", "Real-Time Audio API", "Emotional Reflections", "React / Tailwind"]
    },
    {
      id: "one-planet",
      number: "03",
      title: "ONE PLANET",
      category: "Social Impact & Sustainability",
      status: "LIVE PLATFORM",
      year: "2026",
      url: "https://one-planet-nine.vercel.app/",
      description: "An SDG action hub helping grassroots communities discover sustainability challenges, report ecological problems, explore solutions, and coordinate collective impact.",
      tags: ["SDG Goal Metrics", "Community Action Hub", "Geo-Incident Reporting", "Full-Stack Cloud"]
    },
    {
      id: "agent-memory",
      number: "04",
      title: "AGENT MEMORY SYSTEM",
      category: "Autonomous AI Systems",
      status: "IN DEVELOPMENT",
      year: "2026 — ACTIVE",
      url: "#",
      description: "An efficient, user-controllable context memory system for long-running AI agents, designed to manage retention, progressive summarization, and retrieval across sessions.",
      tags: ["Context Compression", "Episodic Memory", "Vector Retrieval", "Python / LangChain", "Multi-Agent Systems"]
    }
  ],

  experience: [
    {
      period: "2026 — PRESENT",
      tag: "HACKATHONS & SPRINT BUILDS",
      title: "National Hackathon Finalist & Innovator",
      desc: "Collaborated in high-tempo competitive hackathons designing and shipping full-stack prototypes. Spearheaded the architecture for AI-driven solutions addressing real-world community challenges and SDG objectives.",
      chips: ["Fast Prototyping", "Team Leadership", "System Pitching"]
    },
    {
      period: "2025 — 2026",
      tag: "AI SYSTEMS ENGINEERING",
      title: "Lead Developer — AI Solutions & Platform Architecture",
      desc: "Architected and deployed production web applications including GFG (career comeback platform) and AURA (voice mental wellness). Implemented scalable cloud backends, API endpoints, and low-latency client state synchronization.",
      chips: ["FastAPI", "React", "Audio Streaming"]
    },
    {
      period: "2024 — 2025",
      tag: "ACADEMIC & STUDENT INNOVATION",
      title: "Undergraduate Researcher — CS & Business Systems",
      desc: "Pursuing deep technical foundations in algorithms, enterprise systems, database architectures, and business process modeling. Developed multiple open-source utilities and coordinated tech club developer workshops.",
      chips: ["Algorithms", "DBMS", "Tech Mentorship"]
    },
    {
      period: "CONTINUOUS",
      tag: "CERTIFICATIONS & KNOWLEDGE",
      title: "Advanced Computing & Cloud Credentials",
      desc: "Completed rigorous coursework and professional specializations in Deep Learning, Full-Stack Cloud Architecture, Relational Databases, and Microservices engineering.",
      chips: ["Cloud Architecture", "Machine Learning", "Security Best Practices"]
    }
  ]
};

/* ==========================================================================
   02. AUDIO SYNTHESIZER (Optional subtle UI feedback)
   ========================================================================== */
class WorkspaceAudio {
  constructor() {
    this.enabled = false;
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) this.init();
    return this.enabled;
  }

  playClick() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(620, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(840, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {
      // Audio context might be restricted
    }
  }

  playSelect() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch (e) {}
  }
}

const audioSystem = new WorkspaceAudio();

/* ==========================================================================
   03. CUSTOM CURSOR & COORDINATES HUD
   ========================================================================== */
class CustomCursor {
  constructor() {
    this.cursorEl = document.getElementById('custom-cursor');
    this.curX = document.getElementById('cur-x');
    this.curY = document.getElementById('cur-y');
    this.curLabel = document.getElementById('cur-label');
    
    this.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    if (this.isTouch) {
      if (this.cursorEl) this.cursorEl.style.display = 'none';
      return;
    }

    this.bindEvents();
    this.render();
  }

  bindEvents() {
    window.addEventListener('mousemove', (e) => {
      this.target.x = e.clientX;
      this.target.y = e.clientY;
      if (this.curX) this.curX.textContent = Math.round(e.clientX);
      if (this.curY) this.curY.textContent = Math.round(e.clientY);
      
      // Update Transform Inspector coordinates
      const inspX = document.getElementById('insp-x');
      const inspY = document.getElementById('insp-y');
      if (inspX) inspX.textContent = `${Math.round(e.clientX)} px`;
      if (inspY) inspY.textContent = `${Math.round(e.clientY)} px`;
    }, { passive: true });

    // Interactive Hover Listeners
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('a, button, [tabindex="0"], .project-card, .skill-tile, .timeline-card');
      if (!target) {
        document.body.classList.remove('cursor-hover', 'cursor-project');
        if (this.curLabel) this.curLabel.textContent = document.body.dataset.tool.toUpperCase();
        return;
      }

      document.body.classList.add('cursor-hover');
      audioSystem.playSelect();

      // Check for project card
      if (target.closest('.project-card')) {
        document.body.classList.add('cursor-project');
        if (this.curLabel) this.curLabel.textContent = 'VIEW PROJECT';
      } else if (target.closest('#email-copy-box')) {
        if (this.curLabel) this.curLabel.textContent = 'COPY EMAIL';
      } else if (target.tagName === 'A' && target.getAttribute('download')) {
        if (this.curLabel) this.curLabel.textContent = 'DOWNLOAD';
      } else if (target.tagName === 'A' && target.getAttribute('target') === '_blank') {
        if (this.curLabel) this.curLabel.textContent = 'EXTERNAL LINK';
      } else {
        if (this.curLabel) this.curLabel.textContent = 'INTERACT';
      }

      // Update Inspector Element Name
      const inspElement = document.getElementById('insp-element');
      const inspW = document.getElementById('insp-w');
      const inspH = document.getElementById('insp-h');
      if (inspElement) {
        const tag = target.tagName.toLowerCase();
        const id = target.id ? `#${target.id}` : '';
        const cls = target.classList[0] ? `.${target.classList[0]}` : '';
        inspElement.textContent = `<${tag}${id || cls}>`;
      }
      if (inspW && inspH) {
        const rect = target.getBoundingClientRect();
        inspW.textContent = `${Math.round(rect.width)} px`;
        inspH.textContent = `${Math.round(rect.height)} px`;
      }
    });
  }

  render() {
    // Smooth lerp
    this.pos.x += (this.target.x - this.pos.x) * 0.22;
    this.pos.y += (this.target.y - this.pos.y) * 0.22;

    if (this.cursorEl) {
      this.cursorEl.style.transform = `translate3d(${this.pos.x}px, ${this.pos.y}px, 0)`;
    }

    requestAnimationFrame(() => this.render());
  }
}

/* ==========================================================================
   04. INTRO / LOADING ANIMATION SEQUENCE
   ========================================================================== */
function initIntroAnimation() {
  const loader = document.getElementById('intro-loader');
  const skipBtn = document.getElementById('skip-intro-btn');
  const bezier = document.getElementById('loader-bezier');
  const anchors = document.getElementById('loader-anchors');
  const selectionBox = document.getElementById('loader-selection-box');
  const loaderText = document.getElementById('loader-text');
  
  if (!loader) return;

  // Check if returning visitor in this session
  const hasVisited = sessionStorage.getItem('portfolio_intro_seen');
  if (hasVisited === 'true') {
    loader.style.display = 'none';
    document.body.classList.remove('is-loading');
    initHeroAnimations();
    return;
  }

  // Split text into span characters
  if (loaderText) {
    const text = loaderText.textContent;
    loaderText.textContent = '';
    const frag = document.createDocumentFragment();
    for (let char of text) {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = char;
      frag.appendChild(span);
    }
    loaderText.appendChild(frag);
  }

  // GSAP Master Timeline for Intro
  const tl = gsap.timeline({
    onComplete: () => {
      finishIntro();
    }
  });

  // 1. Draw SVG Bezier curve
  tl.to(bezier, {
    strokeDashoffset: 0,
    duration: 1.1,
    ease: "power2.inOut"
  });

  // 2. Anchor points appear
  tl.to(anchors, {
    opacity: 1,
    duration: 0.3,
    ease: "power1.out"
  }, "-=0.3");

  // 3. Selection Box animates into view
  tl.to(selectionBox, {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: "back.out(1.4)"
  }, "-=0.2");

  // 4. Stagger Characters of "DESIGNING IDEAS. ENGINEERING EXPERIENCES."
  tl.to('.loader-text .char', {
    opacity: 1,
    y: 0,
    duration: 0.04,
    stagger: 0.02,
    ease: "power2.out"
  }, "-=0.3");

  // 5. Expand selection box into entire screen
  tl.to(selectionBox, {
    scale: 1.25,
    opacity: 0,
    duration: 0.5,
    ease: "power3.in"
  }, "+=0.3");

  tl.to(loader, {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
  }, "-=0.2");

  function finishIntro() {
    sessionStorage.setItem('portfolio_intro_seen', 'true');
    loader.style.display = 'none';
    document.body.classList.remove('is-loading');
    initHeroAnimations();
  }

  // Skip Intro Handler
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      tl.kill();
      finishIntro();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !document.body.classList.contains('intro-done')) {
      tl.kill();
      finishIntro();
    }
  });
}

/* ==========================================================================
   05. HERO SECTION REVEAL ANIMATIONS
   ========================================================================== */
function initHeroAnimations() {
  document.body.classList.add('intro-done');

  // Stagger characters of CREATIVE DEVELOPER
  const creativeChars = document.querySelectorAll('#hero-title-creative .word-char');
  const developerChars = document.querySelectorAll('#hero-title-developer .word-char');

  gsap.from(creativeChars, {
    y: 40,
    opacity: 0,
    stagger: 0.04,
    duration: 0.7,
    ease: "power3.out"
  });

  gsap.from(developerChars, {
    y: 40,
    opacity: 0,
    stagger: 0.04,
    duration: 0.7,
    delay: 0.25,
    ease: "power3.out"
  });

  // Entrance of Meta Pills and Subtitle
  gsap.from('.meta-pill', {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    delay: 0.4,
    ease: "power2.out"
  });

  gsap.from('.hero-desc, .hero-specs-list', {
    y: 25,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    ease: "power2.out"
  });

  gsap.from('.hero-actions .btn-primary, .hero-actions .btn-secondary', {
    scale: 0.9,
    opacity: 0,
    duration: 0.6,
    delay: 0.6,
    stagger: 0.1,
    ease: "back.out(1.5)"
  });

  // Floating Bounding Box animation
  gsap.from('.hero-title-bounding-box', {
    scale: 0.95,
    opacity: 0,
    duration: 0.6,
    delay: 0.7,
    ease: "power2.out"
  });

  // Floating side badges entrance
  gsap.from('.hero-floating-badge', {
    x: (i) => (i === 0 ? 30 : -30),
    opacity: 0,
    duration: 0.8,
    delay: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  });
}

/* ==========================================================================
   06. CREATIVE WORKSPACE TOOLBAR & TOOL MODES
   ========================================================================== */
function initWorkspaceTools() {
  const toolButtons = document.querySelectorAll('.tool-btn[data-tool]');
  const penCanvas = document.getElementById('vector-pen-canvas');
  let penPoints = [];
  let isDrawingPen = false;
  let penCtx = null;

  function redrawPenPaths() {
    if (!penCtx || !penCanvas) return;
    penCtx.clearRect(0, 0, penCanvas.width, penCanvas.height);
    if (penPoints.length === 0) return;

    // Draw Path
    penCtx.beginPath();
    penCtx.moveTo(penPoints[0].x, penPoints[0].y);
    for (let i = 1; i < penPoints.length; i++) {
      penCtx.lineTo(penPoints[i].x, penPoints[i].y);
    }
    penCtx.strokeStyle = '#F15A29';
    penCtx.lineWidth = 2;
    penCtx.stroke();

    // Draw Anchor Points
    for (let pt of penPoints) {
      penCtx.fillStyle = '#FFFFFF';
      penCtx.strokeStyle = '#F15A29';
      penCtx.lineWidth = 1.5;
      penCtx.fillRect(pt.x - 4, pt.y - 4, 8, 8);
      penCtx.strokeRect(pt.x - 4, pt.y - 4, 8, 8);
    }
  }

  function resizeCanvas() {
    if (!penCanvas) return;
    penCanvas.width = window.innerWidth;
    penCanvas.height = window.innerHeight;
    redrawPenPaths();
  }

  if (penCanvas) {
    penCtx = penCanvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  }

  // Switch Tool Active State
  toolButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tool = btn.dataset.tool;
      toolButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.body.dataset.tool = tool;

      // Update Cursor Indicator
      document.body.classList.remove('cursor-crosshair', 'cursor-pen');
      if (tool === 'pen') {
        document.body.classList.add('cursor-pen');
      } else if (tool === 'shape' || tool === 'direct') {
        document.body.classList.add('cursor-crosshair');
      }

      const curLabel = document.getElementById('cur-label');
      if (curLabel) curLabel.textContent = tool.toUpperCase();

      audioSystem.playClick();
      showToast(`Active Tool: ${tool.toUpperCase()} MODE`);
    });
  });

  // Pen Tool Interactive Drawing Engine
  if (penCanvas && penCtx) {
    penCanvas.addEventListener('mousedown', (e) => {
      if (document.body.dataset.tool !== 'pen') return;
      isDrawingPen = true;
      penPoints.push({ x: e.clientX, y: e.clientY });
      redrawPenPaths();
      audioSystem.playClick();
    });

    penCanvas.addEventListener('mousemove', (e) => {
      if (!isDrawingPen || document.body.dataset.tool !== 'pen') return;
      // Draw live anchor preview
    });

    window.addEventListener('mouseup', () => {
      isDrawingPen = false;
    });
  }

  // Layers Palette Toggle (F7)
  const layersBtn = document.getElementById('toolbar-layers-btn');
  const layersMenuBtn = document.getElementById('toggle-layers-window');
  const layersWindow = document.getElementById('layers-window');
  const layersClose = document.getElementById('layers-close-btn');

  function toggleLayers() {
    if (!layersWindow) return;
    const isHidden = layersWindow.hasAttribute('hidden');
    if (isHidden) {
      layersWindow.removeAttribute('hidden');
      audioSystem.playClick();
    } else {
      layersWindow.setAttribute('hidden', '');
    }
  }

  if (layersBtn) layersBtn.addEventListener('click', toggleLayers);
  if (layersMenuBtn) layersMenuBtn.addEventListener('click', toggleLayers);
  if (layersClose) layersClose.addEventListener('click', toggleLayers);

  // Layers Click to Scroll to Section
  const layerItems = document.querySelectorAll('.layer-item[data-target]');
  layerItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetSec = document.querySelector(item.dataset.target);
      if (targetSec) {
        layerItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        targetSec.scrollIntoView({ behavior: 'smooth' });
        audioSystem.playClick();
      }
    });
  });

  // Grid and Guides Toggles
  const gridBtn = document.getElementById('toolbar-grid-btn');
  const menuGridBtn = document.getElementById('toggle-grid-btn');
  function toggleGrid() {
    document.body.classList.toggle('hide-grid');
    audioSystem.playClick();
    const isHidden = document.body.classList.contains('hide-grid');
    showToast(isHidden ? "Grid: Hidden" : "Grid: Visible");
  }
  if (gridBtn) gridBtn.addEventListener('click', toggleGrid);
  if (menuGridBtn) menuGridBtn.addEventListener('click', toggleGrid);

  // Sound Toggle
  const soundBtn = document.getElementById('toggle-sound-btn');
  const soundLabel = document.getElementById('sound-state-label');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const state = audioSystem.toggle();
      if (soundLabel) soundLabel.textContent = state ? "On (Active)" : "Off";
      showToast(state ? "Sound UI: Enabled" : "Sound UI: Muted");
    });
  }

  // Transform Inspector Minimize & Toggle
  const inspectorMinBtn = document.getElementById('inspector-min-btn') || document.getElementById('inspector-close-btn');
  const togglePropsMenuBtn = document.getElementById('toggle-props-window');
  const floatingInspector = document.getElementById('floating-inspector');

  function toggleInspectorCollapse() {
    if (!floatingInspector) return;
    floatingInspector.classList.toggle('collapsed');
    audioSystem.playClick();
    if (inspectorMinBtn) {
      inspectorMinBtn.innerHTML = floatingInspector.classList.contains('collapsed') ? '&#43;' : '&minus;';
    }
  }

  if (inspectorMinBtn) {
    inspectorMinBtn.addEventListener('click', toggleInspectorCollapse);
  }

  if (togglePropsMenuBtn && floatingInspector) {
    togglePropsMenuBtn.addEventListener('click', () => {
      const isHidden = floatingInspector.style.display === 'none';
      floatingInspector.style.display = isHidden ? '' : 'none';
      audioSystem.playClick();
      showToast(isHidden ? "Inspector: Visible" : "Inspector: Hidden");
    });
  }

  // Keyboard shortcut F7 for layers, V for select, P for pen, T for type
  window.addEventListener('keydown', (e) => {
    if (e.key === 'F7') {
      e.preventDefault();
      toggleLayers();
    } else if (e.key === 'v' || e.key === 'V') {
      const selectBtn = document.querySelector('[data-tool="select"]');
      if (selectBtn) selectBtn.click();
    } else if (e.key === 'p' || e.key === 'P') {
      const penBtn = document.querySelector('[data-tool="pen"]');
      if (penBtn) penBtn.click();
    }
  });
}

/* ==========================================================================
   07. NAVIGATION, ACTIVE STATES & RULERS GENERATION
   ========================================================================== */
function initNavigationAndRulers() {
  // Generate Illustrator Ruler Ticks
  const topRulerTicks = document.getElementById('ruler-top-ticks');
  const leftRulerTicks = document.getElementById('ruler-left-ticks');

  if (topRulerTicks) {
    let html = '';
    for (let x = 0; x < window.innerWidth; x += 100) {
      html += `<span style="position:absolute;left:${x}px;font-size:8px;color:#666;padding-left:2px;border-left:1px solid #333;height:100%">${x}</span>`;
    }
    topRulerTicks.innerHTML = html;
  }

  if (leftRulerTicks) {
    let html = '';
    for (let y = 0; y < 1600; y += 100) {
      html += `<span style="position:absolute;top:${y}px;font-size:8px;color:#666;padding-top:2px;border-top:1px solid #333;width:100%">${y}</span>`;
    }
    leftRulerTicks.innerHTML = html;
  }

  // Section Observer for Active Navigation Links
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.desktop-nav .nav-item');

  function updateActiveNav() {
    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navItems.forEach(item => {
        if (item.getAttribute('href') === `#${currentId}`) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });

      // Update Artboard indicator in top menubar
      const artboardTag = document.querySelector('.artboard-tag');
      if (artboardTag) {
        artboardTag.textContent = `ARTBOARD: ${currentId.toUpperCase()}`;
      }
    }
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileClose = document.getElementById('mobile-drawer-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      mobileToggle.setAttribute('aria-expanded', 'true');
    }
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (mobileClose) mobileClose.addEventListener('click', closeDrawer);
  mobileLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // Top Menu Actions
  const resetViewBtn = document.getElementById('action-reset-view');
  if (resetViewBtn) {
    resetViewBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast("Artboard View: Reset to 100% [0, 0]");
    });
  }

  const replayIntroBtn = document.getElementById('action-replay-intro');
  if (replayIntroBtn) {
    replayIntroBtn.addEventListener('click', () => {
      sessionStorage.removeItem('portfolio_intro_seen');
      location.reload();
    });
  }

  // Back to Top button
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   08. PROJECT INTERACTIONS & GSAP SCROLL TRIGGERS
   ========================================================================== */
function initProjectShowcase() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Animate project cards as they enter viewport
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach((card, idx) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  });

  // Agent Memory Blueprint Modal Handlers
  const blueprintBtn = document.getElementById('agent-memory-info-btn');
  const blueprintModal = document.getElementById('blueprint-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalAckBtn = document.getElementById('modal-ack-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');

  function openBlueprint() {
    if (!blueprintModal) return;
    blueprintModal.removeAttribute('hidden');
    audioSystem.playClick();
  }

  function closeBlueprint() {
    if (!blueprintModal) return;
    blueprintModal.setAttribute('hidden', '');
  }

  if (blueprintBtn) blueprintBtn.addEventListener('click', openBlueprint);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeBlueprint);
  if (modalAckBtn) modalAckBtn.addEventListener('click', closeBlueprint);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeBlueprint);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && blueprintModal && !blueprintModal.hasAttribute('hidden')) {
      closeBlueprint();
    }
  });
}

/* ==========================================================================
   09. SKILLS FILTER & INTERACTION
   ========================================================================== */
function initSkillsFilter() {
  const filterChips = document.querySelectorAll('.filter-chip');
  const skillTiles = document.querySelectorAll('.skill-tile');

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const category = chip.dataset.category;
      
      filterChips.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-selected', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-selected', 'true');

      audioSystem.playClick();

      skillTiles.forEach(tile => {
        if (category === 'all' || tile.dataset.category === category) {
          tile.classList.remove('is-hidden');
          gsap.fromTo(tile, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
        } else {
          tile.classList.add('is-hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   10. EXPERIENCE TIMELINE ANIMATIONS
   ========================================================================== */
function initTimelineScroll() {
  const timelineContainer = document.getElementById('timeline-container');
  const timelineFill = document.getElementById('timeline-fill');
  const timelineItems = document.querySelectorAll('.timeline-item');

  if (!timelineContainer || !timelineFill) return;

  // ScrollTrigger to grow central progress line
  ScrollTrigger.create({
    trigger: timelineContainer,
    start: "top 70%",
    end: "bottom 80%",
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress * 100;
      timelineFill.style.height = `${progress}%`;

      // Highlight timeline items as reached
      timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.65) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  });
}

/* ==========================================================================
   11. CONTACT & CLIPBOARD COPY INTERACTION
   ========================================================================== */
function initContactInteractions() {
  const emailBox = document.getElementById('email-copy-box');
  const emailText = document.getElementById('contact-email-text');
  const copyBadge = document.getElementById('copy-badge');

  if (emailBox && emailText) {
    emailBox.addEventListener('click', async () => {
      const email = emailText.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        audioSystem.playSelect();
        if (copyBadge) {
          copyBadge.innerHTML = '<i data-lucide="check"></i> Copied to Clipboard!';
          lucide.createIcons();
        }
        showToast("Email copied to clipboard: " + email);

        setTimeout(() => {
          if (copyBadge) {
            copyBadge.innerHTML = '<i data-lucide="copy"></i> Click to Copy';
            lucide.createIcons();
          }
        }, 3000);
      } catch (err) {
        // Fallback for older browsers
        showToast("Address: " + email);
      }
    });
  }
}

/* ==========================================================================
   12. TOAST NOTIFICATION UTILITY
   ========================================================================== */
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* ==========================================================================
   13. INITIALIZATION ON DOM READY
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  // Populate dynamic data from PORTFOLIO_DATA
  const currentYear = document.getElementById('current-year');
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  // Initialize Modules
  new CustomCursor();
  initIntroAnimation();
  initWorkspaceTools();
  initNavigationAndRulers();
  initProjectShowcase();
  initSkillsFilter();
  initTimelineScroll();
  initContactInteractions();
});
