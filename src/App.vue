<script setup lang="ts">
const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
] as const

const shellFacts = [
  { label: 'Ubuntu', value: '24.04.4 LTS' },
  { label: 'Root', value: '~/kkulebaev/console' },
  { label: 'Role', value: 'Frontend Developer' },
] as const

const projectCardAccent = ['primary', 'secondary', 'tertiary'] as const

const projects = [
  {
    title: 'Krypton_Vault',
    version: 'v.1.0.4',
    description:
      'A decentralized asset management dashboard with real-time analytics and biometric-inspired security visualization.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCORFWlrlVKwe1y6j51N6N8MJb3gVPo9COO57CdQHqqlgrq5XGuZl3hBuVyCkuRQu3wYobegV3YjaqsMUb8Xm62jwHy7t1Kx4wzseDhupT5ul6nRF-9dddL3d_PDa2tRkBDoa-cMn-6PIINHXvMHgbmj79LkQwzBlbE21t_z674nyPX5MnG5cftKQE1vCwzIr-ZIF8nw0nYxJgWDd2Wg4ldHosbUxMvnJGFwfnqeH7YxOo-hQ3YjXcuDL1HhnsOwGVli8HP3qP4gCQ',
    tags: ['NEXTJS', 'TYPESCRIPT', 'TRPC'],
  },
  {
    title: 'Void_OS_CLI',
    version: 'v.3.2.0',
    description:
      'A browser-based terminal environment for developer tools with low-latency filesystem mirroring and assistant-native commands.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQJbp0pB2v345SZHb-HdcKcBUEWwtezH24zwMcDPgp2KaIENDKdkcmghqGvfkE1Lj9gruUGb-JJ5cKZ95AqkgADQrVsXOXhK8hAtmPVYwXnRZSEL3rVkzeZbK7EyWvdwDs5Dx-di1WonOiUlrpFXGgEL8ntKFNdpJMaM8nAAIOUdYj1W3iSTZkt8-_cajRa8CDSF49rsdvBwTC-ZEYb_sYYx0Iy0sT822T38RjUHxtNPY4Ai9HKMh-1Xa9-dTwmLKzocsPDFkMAyI',
    tags: ['RUST', 'WEBASSEMBLY', 'XTERM'],
  },
  {
    title: 'Flux_Engine',
    version: 'v.0.8.1-beta',
    description:
      'Lightweight state management library optimized for high-frequency data streams in financial trading platforms.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ02B9UEhWnAJCjcV7XQ5TbTi4Jbf0Fpp16DrpZ7LxC5ogUyYAaoXkqTGEQ1CVA_Fcp2NTdr4OSFrW7npQTqpxXe7Icy5nA70oWDWn5ObERuN_0dK0huOd1gLx_5WZs8LCQQWSRO3T4kJzHJx11XjnaMGr7Xl_mH7gg5Zz3Lkdnay8Duvvf0DfWuUOVW1eBuOTSxLIB0_Qc7erKh2F8sJRmKhIn7yKnZIFD_fqREiXJIZDUnGmzlBnw4B75mTvbmiBDYMuToaMMKw',
    tags: ['ZUSTAND', 'REACTIVE', 'OBSERVABLES'],
  },
] as const

const stackGroups = [
  {
    title: 'CORE_LANGUAGES',
    accent: 'primary',
    items: [
      ['TypeScript', '100%'],
      ['JavaScript', '96%'],
      ['HTML / CSS', '95%'],
      ['Vue / Nuxt', '92%'],
    ],
  },
  {
    title: 'ARCHITECTURE',
    accent: 'secondary',
    items: [
      ['Design systems', '94%'],
      ['Component APIs', '92%'],
      ['SSR / performance', '89%'],
      ['Build tooling', '84%'],
    ],
  },
] as const

const timeline = [
  {
    year: '2026',
    title: 'Independent frontend systems work',
    text: 'Shipping portfolio, product, and dashboard interfaces that need strong structure and a sharper visual point of view.',
  },
  {
    year: '2025',
    title: 'Design-to-code acceleration',
    text: 'Focused on turning product mockups into maintainable Vue and React frontends with cleaner tokens, motion, and content hierarchy.',
  },
  {
    year: '2024',
    title: 'Platform and tooling depth',
    text: 'Expanded into component architecture, deployment pipelines, and the operational details needed to keep rich interfaces reliable.',
  },
] as const

const experiments = [
  'Terminal-inspired UI shells for portfolios and product marketing',
  'Dense data layouts with restrained animation and stronger type rhythm',
  'Frontend systems that feel editorial instead of template-driven',
] as const

const contactRows = [
  { key: 'email', value: 'konstantinkulebaev@gmail.com', href: 'mailto:konstantinkulebaev@gmail.com' },
  { key: 'github', value: 'github.com/kkulebaev', href: 'https://github.com/kkulebaev' },
  { key: 'linkedin', value: 'linkedin.com/in/kkulebaev', href: 'https://linkedin.com/in/kkulebaev' },
] as const
</script>

<template>
  <div class="shell">
    <header class="topbar">
      <div class="topbar__path">~/kkulebaev/console</div>

      <nav class="topbar__nav">
        <a v-for="link in navLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>

      <div class="topbar__status">
        <span class="topbar__status-icon">&gt;_</span>
        <span>SSH:Active</span>
      </div>
    </header>

    <aside class="siderail">
      <div class="siderail__meta">
        <span class="siderail__meta-label">{{ shellFacts[0].label }}</span>
        <span class="siderail__meta-value">{{ shellFacts[0].value }}</span>
      </div>

      <div class="siderail__stack">
        <a class="siderail__item siderail__item--active" href="#">
          <span class="siderail__glyph">[]</span>
          <span>Root</span>
        </a>
        <a class="siderail__item" href="#projects">
          <span class="siderail__glyph">&gt;_</span>
          <span>Projects</span>
        </a>
        <a class="siderail__item" href="#experience">
          <span class="siderail__glyph">{}</span>
          <span>About</span>
        </a>
      </div>

      <a class="siderail__deploy" href="#contact">DEPLOY</a>
    </aside>

    <main class="page">
      <section class="hero">
        <div class="hero__copy">
          <p class="eyebrow"><span class="eyebrow__mark">$</span> whoami</p>
          <h1>Frontend<br /><span>Developer</span></h1>
          <p class="hero__lede">
            Building clean, code-driven UI for the next-gen web. Specializing in high-performance
            architectures and architecting digital spaces that bridge technical logic with human
            intuition.
          </p>

          <div class="hero__actions">
            <a class="button button--ghost" href="https://github.com/kkulebaev" target="_blank" rel="noreferrer">
              <span>&gt;</span> GITHUB
            </a>
            <a class="button button--ghost button--secondary" href="#contact">
              <span>&gt;</span> CONTACT
            </a>
            <div class="availability">
              <span class="availability__dot"></span>
              <span>Available for hire</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="section section--offset">
        <div class="section__heading section__heading--split">
          <div>
            <p class="eyebrow">&gt; _repositories</p>
            <h2>~/github/repositories</h2>
          </div>
          <p class="section__meta">LS -AL /PROJECTS <span>3 OBJECTS FOUND</span></p>
        </div>

        <div class="project-grid">
          <article
            v-for="(project, index) in projects"
            :key="project.title"
            class="project-card"
            :class="`project-card--${projectCardAccent[index]}`"
          >
            <div class="project-card__bar">
              <div class="window-dots window-dots--ghost">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>{{ project.version }}</span>
            </div>

            <div class="project-card__image-wrap">
              <img :src="project.image" :alt="project.title" class="project-card__image" />
            </div>

            <div class="project-card__body">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>

              <div class="project-card__tags">
                <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>

              <div class="project-card__actions">
                <a class="button button--primary" href="https://github.com/kkulebaev" target="_blank" rel="noreferrer">
                  VIEW_CODE
                </a>
                <a class="button button--panel" href="#contact">LIVE_DEMO</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="stack" class="section section--band">
        <div class="stack-layout">
          <div class="stack-layout__intro">
            <p class="eyebrow eyebrow--secondary">&gt; _stack_analysis</p>
            <h2>Expertise.<br />Inventory</h2>
            <p>
              A systematic breakdown of the tools, patterns, and frontend decisions behind
              interfaces that need both technical rigor and stronger editorial presence.
            </p>
          </div>

          <div class="stack-layout__groups">
            <article
              v-for="group in stackGroups"
              :key="group.title"
              class="stack-group"
              :class="`stack-group--${group.accent}`"
            >
              <h3>{{ group.title }}</h3>
              <ul>
                <li v-for="[label, value] in group.items" :key="label">
                  <span class="stack-group__lead">&gt;&gt;</span>
                  <span>{{ label }}</span>
                  <strong>{{ value }}</strong>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="experience" class="section section--offset-sm experience-layout">
        <div class="section__heading">
          <p class="eyebrow">&gt; _experience</p>
          <h2>Product-minded frontend work with a systems bias.</h2>
        </div>

        <div class="experience-layout__grid">
          <div class="timeline">
            <article v-for="entry in timeline" :key="entry.year" class="timeline__item">
              <span class="timeline__year">{{ entry.year }}</span>
              <div>
                <h3>{{ entry.title }}</h3>
                <p>{{ entry.text }}</p>
              </div>
            </article>
          </div>

          <aside class="terminal-window terminal-window--tall">
            <div class="terminal-window__bar">
              <div class="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="terminal-window__title">labs.index</span>
            </div>

            <div class="terminal-window__body">
              <div class="terminal-window__section">
                <p class="eyebrow eyebrow--secondary">active.experiments</p>
                <ul class="experiment-list">
                  <li v-for="experiment in experiments" :key="experiment">{{ experiment }}</li>
                </ul>
              </div>

              <div class="terminal-window__section terminal-window__section--muted">
                <p class="eyebrow">runtime</p>
                <div class="runtime-grid">
                  <span>render.mode <strong>single-page portfolio</strong></span>
                  <span>surface.logic <strong>tonal layering</strong></span>
                  <span>motion.rule <strong>fast step feedback</strong></span>
                  <span>accent.use <strong>cyan / lime / sparse</strong></span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="contact-panel">
          <div class="contact-panel__copy">
            <p class="eyebrow">&gt; _contact</p>
            <h2>Ready to build something cleaner and sharper?</h2>
            <p>
              I work best on products that care about interface quality, system clarity, and the
              details that make technical work feel premium instead of generic.
            </p>

            <div class="contact-panel__meta">direct / responsive / async-friendly</div>

            <div class="contact-panel__actions">
              <a class="button button--primary" href="mailto:konstantinkulebaev@gmail.com">START_CHAT</a>
              <a class="button button--ghost" href="https://github.com/kkulebaev" target="_blank" rel="noreferrer">
                <span>&gt;</span> SOURCE
              </a>
            </div>
          </div>

          <div class="contact-terminal">
            <div class="contact-terminal__line">contact_protocols.sh</div>
            <div class="contact-terminal__line contact-terminal__line--muted">
              status_monitor:
              <span class="contact-terminal__online">ONLINE</span>
            </div>
            <div class="contact-terminal__list">
              <a
                v-for="row in contactRows"
                :key="row.key"
                :href="row.href"
                target="_blank"
                rel="noreferrer"
                class="contact-terminal__row"
              >
                <span>{{ row.key }}</span>
                <strong>{{ row.value }}</strong>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
