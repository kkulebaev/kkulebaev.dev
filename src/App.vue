<script setup lang="ts">
const shellFacts = [
  { label: 'Ubuntu', value: '24.04.4 LTS', icon: 'code' },
  { label: 'Root', value: '~/kkulebaev/console', icon: 'folder' },
  { label: 'About', value: 'Frontend Developer', icon: 'person' },
] as const

const projects = [
  {
    title: 'Krypton_Vault',
    version: 'v.1.0.4',
    description:
      'A decentralized asset management dashboard with real-time analytics and biometric authentication.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCORFWlrlVKwe1y6j51N6N8MJb3M0AmM7m-AIiZs9xQwu7XHr2BUKf8Kch1WW1S6iYNKmTOLyJgB7MBzc5X0gLqDgYUFg9fVCjA9fAs2m57Q7CuyF2YvUC5yTRF7zwLG0xNg9X2xFPIhTYD4gq9jGH-KWC6lJyQdNQ5J6z7S1r95CmydClqixDFA1kNAjP4Iptk2vwh29bjb1tnqljjiUQDQE9j3aEINH_yk_0Fw2JtT2M5oTfJ5vSjnhQ9fn4HYa9DeyrOlrYpUhY',
    tags: ['REACT', 'TYPESCRIPT', 'WEBAUTHN'],
  },
  {
    title: 'Void_OS_CLI',
    version: 'v.3.2.0',
    description:
      'Custom terminal emulator for web-based IDEs with integrated filesystem navigation and command palettes.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtHkK1FEbi15a67q0cZ5gkjQ3d7tUNe5YqW3c7qGSkpNqnP4c4ElMCzjN5ooWM4u1dBjPsP0yq2w5g4K1Akz-PJrBIyQvJ48ca5K7SRm0Qw7v4bFd4c3vdjwhnFALYvHfX9yABwXrYy7yKJkSUDRmmuY7laCJNLQxGW3DPdT6Cw1hDYJPTzlLqwhfW11ll6OHvXqFl4s0HfGQPihlypwU3txXGgN8XaS6q0NbNS5i4O7o4kLxLOAwqmiC2u2jzD5aQ',
    tags: ['CLI', 'XTERM', 'UX'],
  },
  {
    title: 'Flux_Engine',
    version: 'v.0.8.9',
    description:
      'An interface system for modular digital experiences with data panes, overlays, and precision telemetry.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBK9e8I70P7bA2v2CNr8r9gJ7mmPcmk9Jm6d6lJgKNnDlRmj5LMfA5-W3NL5RLz5j09vK98fizXst4WPFjH7KhSPO8rW3WQW3bQxKQAGD3QpvhJ2q2-kV76NwqQv3aI-Fxlb9Vr7ImrDIKeA0T6Go0KT57XvZQxkT3AqXe6ycR5xlMeEs-07Xw4dMvk1mWpU2NJEUdXCOjWj3YQiEUbq-dsA3LUg5p8I-H2K19qqd0ln4K0QV9Fh-0l',
    tags: ['VUE', 'MOTION', 'SYSTEMS'],
  },
] as const

const expertiseGroups = [
  {
    title: 'CORE_LANGUAGES',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS / SCSS'],
  },
  {
    title: 'FRONTEND_FRAMEWORKS',
    items: ['Vue / Nuxt', 'React / Next.js', 'State Systems', 'SSR Patterns'],
  },
  {
    title: 'STYLING_UI',
    items: ['Tailwind CSS', 'Design Tokens', 'Animation Systems', 'Responsive Layouts'],
  },
  {
    title: 'BACKEND_INFRA',
    items: ['Node.js Runtimes', 'Docker / CI/CD', 'REST APIs', 'Tooling Pipelines'],
  },
] as const

const stats = [
  { label: 'ARCHITECTURE', value: '95%' },
  { label: 'INTERFACE', value: '92%' },
  { label: 'REACTIVE', value: '88%' },
  { label: 'OBSERVABLES', value: '84%' },
] as const

const labs = [
  {
    title: 'status_monitor:',
    description: 'ONLINE',
  },
  {
    title: 'Initialize Connection',
    description: 'contact_protocols.sh',
  },
  {
    title: 'Network Target',
    description: 'IP: 192.168.1.101 · PORT: 3000',
  },
] as const

const contactRows = [
  { key: 'email_address', value: 'konstantinkulebaev@gmail.com' },
  { key: 'github_handle', value: 'github.com/kkulebaev' },
  { key: 'linkedin_id', value: 'linkedin.com/in/kkulebaev' },
] as const
</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <div class="path-pill">~/kkulebaev/console</div>
      <nav class="nav-links">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#labs">Labs</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main class="page-grid">
      <section class="hero panel">
        <div class="hero-toolbar">
          <div class="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span class="toolbar-title">terminal</span>
          <span class="toolbar-status">SSH:Active</span>
        </div>

        <div class="hero-body">
          <aside class="hero-sidebar">
            <article v-for="fact in shellFacts" :key="fact.label" class="sidebar-card">
              <span class="material-symbols-outlined sidebar-icon">{{ fact.icon }}</span>
              <div class="sidebar-copy">
                <span class="sidebar-label">{{ fact.label }}</span>
                <strong>{{ fact.value }}</strong>
              </div>
            </article>

            <a class="deploy-cta" href="#contact">DEPLOY</a>
          </aside>

          <div class="hero-copy">
            <div class="command-line">whoami</div>
            <h1>Frontend<br />Developer</h1>
            <p>
              Building clean, code-driven digital experiences for the modern web. Specializing in
              high-performance architectures and interface systems that bridge technical logic with
              human intuition.
            </p>

            <div class="hero-actions">
              <a class="ghost-button" href="https://github.com/kkulebaev" target="_blank" rel="noreferrer">
                GITHUB ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="section-stack">
        <div class="section-head">
          <div class="section-kicker">LS -AL /PROJECTS</div>
          <h2>~/github/repositories</h2>
        </div>

        <div class="project-grid">
          <article v-for="project in projects" :key="project.title" class="project-card panel">
            <img :src="project.image" :alt="project.title" class="project-image" />
            <div class="project-content">
              <div class="project-topline">
                <h3>{{ project.title }}</h3>
                <span class="version-pill">{{ project.version }}</span>
              </div>
              <p>{{ project.description }}</p>
              <div class="tag-row">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" class="expertise-grid">
        <div class="section-stack">
          <div class="section-head section-head-wide">
            <div class="section-kicker">Expertise.Inventory</div>
            <h2>Crafting modular digital experiences that are precise, fast, and deeply considered.</h2>
            <p>
              A systematic breakdown of tools and technologies utilized in the construction of
              modular, responsive, and high-fidelity interfaces for the modern web.
            </p>
          </div>

          <div class="expertise-cards">
            <article v-for="group in expertiseGroups" :key="group.title" class="expertise-card panel">
              <div class="expertise-title">{{ group.title }}</div>
              <ul>
                <li v-for="item in group.items" :key="item">{{ item }}</li>
              </ul>
            </article>
          </div>
        </div>

        <aside class="metrics panel">
          <div v-for="stat in stats" :key="stat.label" class="metric-row">
            <div class="metric-head">
              <span>{{ stat.label }}</span>
              <strong>{{ stat.value }}</strong>
            </div>
            <div class="metric-bar">
              <div class="metric-fill" :style="{ width: stat.value }"></div>
            </div>
          </div>
        </aside>
      </section>

      <section id="labs" class="section-stack">
        <div class="section-head">
          <div class="section-kicker">_labs</div>
          <h2>Signal-rich experiments</h2>
        </div>

        <div class="labs-grid">
          <article v-for="lab in labs" :key="lab.title" class="lab-card panel">
            <span class="lab-arrow">&gt;&gt;</span>
            <h3>{{ lab.title }}</h3>
            <p>{{ lab.description }}</p>
          </article>
        </div>
      </section>

      <section id="contact" class="contact-panel panel">
        <div class="contact-copy">
          <div class="section-kicker">locate contact</div>
          <h2>Ready to architect the next standard?</h2>
          <div class="contact-actions">
            <a class="primary-button" href="mailto:konstantinkulebaev@gmail.com">START_CHAT</a>
            <a class="ghost-button" href="https://github.com/kkulebaev" target="_blank" rel="noreferrer">
              DOWNLOAD_CV
            </a>
          </div>
        </div>

        <div class="contact-terminal">
          <div class="terminal-line">contact_protocols.sh</div>
          <div class="terminal-line muted">status_monitor: <span class="online">ONLINE</span></div>
          <div class="terminal-line muted">LOC: SAN_FRANCISCO, CA</div>
          <div class="terminal-line muted">PORT: 3000</div>
          <div class="contact-list">
            <div v-for="row in contactRows" :key="row.key" class="contact-row">
              <span>{{ row.key }}</span>
              <strong>{{ row.value }}</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
