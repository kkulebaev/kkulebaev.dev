<script setup lang="ts">
const terminalFacts = [
  { icon: 'code', label: 'Ubuntu', value: '24.04.4 LTS' },
  { icon: 'folder', label: 'Root', value: '~/kkulebaev/console' },
  { icon: 'person', label: 'About', value: 'Frontend Developer' },
] as const

const projects = [
  {
    title: 'Krypton_Vault',
    version: 'v.1.0.4',
    description:
      'A decentralized asset management dashboard with real-time analytics and biometric authentication.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCORFWlrlVKwe1y6j51N6N8MJb3M0AmM7m-AIiZs9xQwu7XHr2BUKf8Kch1WW1S6iYNKmTOLyJgB7MBzc5X0gLqDgYUFg9fVCjA9fAs2m57Q7CuyF2YvUC5yTRF7zwLG0xNg9X2xFPIhTYD4gq9jGH-KWC6lJyQdNQ5J6z7S1r95CmydClqixDFA1kNAjP4Iptk2vwh29bjb1tnqljjiUQDQE9j3aEINH_yk_0Fw2JtT2M5oTfJ5vSjnhQ9fn4HYa9DeyrOlrYpUhY',
  },
  {
    title: 'Void_OS_CLI',
    version: 'v.2.3.1',
    description:
      'A terminal-inspired operating system concept with modular command workflows and a cyberpunk shell aesthetic.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtHkK1FEbi15a67q0cZ5gkjQ3d7tUNe5YqW3c7qGSkpNqnP4c4ElMCzjN5ooWM4u1dBjPsP0yq2w5g4K1Akz-PJrBIyQvJ48ca5K7SRm0Qw7v4bFd4c3vdjwhnFALYvHfX9yABwXrYy7yKJkSUDRmmuY7laCJNLQxGW3DPdT6Cw1hDYJPTzlLqwhfW11ll6OHvXqFl4s0HfGQPihlypwU3txXGgN8XaS6q0NbNS5i4O7o4kLxLOAwqmiC2u2jzD5aQ',
  },
  {
    title: 'Flux_Engine',
    version: 'v.0.8.9',
    description:
      'A futuristic control interface for modular digital experiences with layered panels and precision status telemetry.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBK9e8I70P7bA2v2CNr8r9gJ7mmPcmk9Jm6d6lJgKNnDlRmj5LMfA5-W3NL5RLz5j09vK98fizXst4WPFjH7KhSPO8rW3WQW3bQxKQAGD3QpvhJ2q2-kV76NwqQv3aI-Fxlb9Vr7ImrDIKeA0T6Go0KT57XvZQxkT3AqXe6ycR5xlMeEs-07Xw4dMvk1mWpU2NJEUdXCOjWj3YQiEUbq-dsA3LUg5p8I-H2K19qqd0ln4K0QV9Fh-0l',
  },
] as const

const inventory = [
  'Vue / Nuxt Architecture',
  'TypeScript Systems',
  'Vite Tooling',
  'Tailwind / Utility UI',
  'Node.js Runtimes',
  'Docker / CI/CD',
] as const

const labs = ['SIGNAL_STACK', 'Quantum_Brief', 'Terminal_Motion'] as const
</script>

<template>
  <div class="shell">
    <header class="site-header">
      <div class="path-chip">~/kkulebaev/console</div>

      <nav class="nav-links">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#labs">Labs</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main class="page">
      <section class="hero-window panel">
        <div class="window-toolbar">
          <div class="window-lights">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="window-title">terminal</div>
          <div class="status-badge">SSH:Active</div>
        </div>

        <div class="hero-content">
          <aside class="terminal-sidebar">
            <div v-for="fact in terminalFacts" :key="fact.label" class="fact-row">
              <span class="fact-icon material-symbols-outlined">{{ fact.icon }}</span>
              <div>
                <div class="fact-label">{{ fact.label }}</div>
                <div class="fact-value">{{ fact.value }}</div>
              </div>
            </div>

            <a class="deploy-button" href="#contact">DEPLOY</a>
          </aside>

          <div class="hero-copy">
            <div class="prompt-line">$ whoami</div>
            <div class="hero-kicker">Frontend<br />Developer</div>
            <p class="hero-text">
              Building clean, code-driven UI for the next-gen web. Specializing in
              high-performance architectures and architecting digital spaces that bridge
              technical logic with human intuition.
            </p>

            <div class="hero-actions">
              <a class="outline-link" href="https://github.com/kkulebaev" target="_blank" rel="noreferrer">
                GITHUB <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="section-block">
        <div class="section-heading">
          <span class="section-label">LS -AL /PROJECTS</span>
          <h2>Selected Projects</h2>
        </div>

        <div class="project-grid">
          <article v-for="project in projects" :key="project.title" class="project-card panel">
            <img :src="project.image" :alt="project.title" class="project-image" />
            <div class="project-body">
              <div class="project-meta">
                <h3>{{ project.title }}</h3>
                <span class="project-version">{{ project.version }}</span>
              </div>
              <p>{{ project.description }}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" class="section-block experience-layout">
        <div class="section-heading large">
          <span class="section-label">Expertise.Inventory</span>
          <h2>Crafting modular digital experiences that are precise, fast, and deeply considered.</h2>
          <p>
            A systematic breakdown of tools and technologies utilized in the construction of modular,
            responsive, and high-fidelity interfaces for the modern web.
          </p>
        </div>

        <div class="inventory panel">
          <div v-for="item in inventory" :key="item" class="inventory-item">
            <span class="inventory-bullet"></span>
            <span>{{ item }}</span>
          </div>
        </div>
      </section>

      <section id="labs" class="section-block labs-layout">
        <div class="section-heading">
          <span class="section-label">Labs</span>
          <h2>Signal-rich experiments</h2>
        </div>

        <div class="labs-grid">
          <article v-for="lab in labs" :key="lab" class="lab-card panel">
            <span class="lab-label">prototype</span>
            <h3>{{ lab }}</h3>
          </article>
        </div>
      </section>

      <section id="contact" class="cta panel">
        <div class="cta-copy">
          <span class="section-label">Contact</span>
          <h2>Ready to architect the next standard?</h2>
          <p>
            If you need a frontend system with strong visual language and clean implementation,
            let’s build it together.
          </p>
        </div>

        <div class="cta-actions">
          <a class="primary-link" href="mailto:kkulebaev.dev@mail.com">START_A_PROJECT</a>
          <a class="secondary-link" href="https://github.com/kkulebaev" target="_blank" rel="noreferrer">
            CV_DOWNLOAD
          </a>
        </div>
      </section>
    </main>
  </div>
</template>
