<script setup lang="ts">
const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Labs', href: '#labs' },
  { label: 'Contact', href: '#contact' },
] as const

const shellMeta = {
  version: 'KKDEV.OS v2.4.0',
  path: '~/kkulebaev/console',
  status: 'terminal SSH:Active',
} as const

const sideLinks = [
  { label: 'Root', href: '#top', glyph: '[]', active: true },
  { label: 'Projects', href: '#projects', glyph: '>_', active: false },
  { label: 'About', href: '#experience', glyph: '{}', active: false },
] as const

const projects = [
  {
    title: 'Krypton_Vault',
    version: 'v.1.0.4',
    description:
      'A decentralized asset management dashboard with real-time analytics and biometric-inspired security visualization.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCORFWlrlVKwe1y6j51N6N8MJb3gVPo9COO57CdQHqqlgrq5XGuZl3hBuVyCkuRQu3wYobegV3YjaqsMUb8Xm62jwHy7t1Kx4wzseDhupT5ul6nRF-9dddL3d_PDa2tRkBDoa-cMn-6PIINHXvMHgbmj79LkQwzBlbE21t_z674nyPX5MnG5cftKQE1vCwzIr-ZIF8nw0nYxJgWDd2Wg4ldHosbUxMvnJGFwfnqeH7YxOo-hQ3YjXcuDL1HhnsOwGVli8HP3qP4gCQ',
    tags: ['NEXTJS', 'TYPESCRIPT', 'TRPC'],
    codeHref: 'https://github.com/kkulebaev',
    demoHref: '#contact',
  },
  {
    title: 'Void_OS_CLI',
    version: 'v.3.2.0',
    description:
      'Custom terminal emulator for web-based IDEs with integrated LLM support and low-latency file system mirroring.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQJbp0pB2v345SZHb-HdcKcBUEWwtezH24zwMcDPgp2KaIENDKdkcmghqGvfkE1Lj9gruUGb-JJ5cKZ95AqkgADQrVsXOXhK8hAtmPVYwXnRZSEL3rVkzeZbK7EyWvdwDs5Dx-di1WonOiUlrpFXGgEL8ntKFNdpJMaM8nAAIOUdYj1W3iSTZkt8-_cajRa8CDSF49rsdvBwTC-ZEYb_sYYx0Iy0sT822T38RjUHxtNPY4Ai9HKMh-1Xa9-dTwmLKzocsPDFkMAyI',
    tags: ['RUST', 'WEBASSEMBLY', 'XTERM'],
    codeHref: 'https://github.com/kkulebaev',
    demoHref: '#contact',
  },
  {
    title: 'Flux_Engine',
    version: 'v.0.8.1-beta',
    description:
      'Lightweight state management library optimized for high-frequency data streams in financial trading platforms.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ02B9UEhWnAJCjcV7XQ5TbTi4Jbf0Fpp16DrpZ7LxC5ogUyYAaoXkqTGEQ1CVA_Fcp2NTdr4OSFrW7npQTqpxXe7Icy5nA70oWDWn5ObERuN_0dK0huOd1gLx_5WZs8LCQQWSRO3T4kJzHJx11XjnaMGr7Xl_mH7gg5Zz3Lkdnay8Duvvf0DfWuUOVW1eBuOTSxLIB0_Qc7erKh2F8sJRmKhIn7yKnZIFD_fqREiXJIZDUnGmzlBnw4B75mTvbmiBDYMuToaMMKw',
    tags: ['ZUSTAND', 'REACTIVE', 'OBSERVABLES'],
    codeHref: 'https://github.com/kkulebaev',
    demoHref: '#contact',
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

const stackGroups = [
  {
    title: 'CORE_LANGUAGES',
    accent: 'primary',
    items: [
      { label: 'TypeScript', value: '100%' },
      { label: 'React / Next.js', value: '95%' },
      { label: 'Vue / Nuxt', value: '92%' },
      { label: 'HTML / CSS', value: '95%' },
    ],
  },
  {
    title: 'ARCHITECTURE',
    accent: 'secondary',
    items: [
      { label: 'Design Systems', value: '' },
      { label: 'Component APIs', value: '' },
      { label: 'SSR / Performance', value: '' },
      { label: 'Build Tooling', value: '' },
    ],
  },
  {
    title: 'INTERFACE',
    accent: 'tertiary',
    items: [
      { label: 'Tailwind CSS', value: '' },
      { label: 'Motion Systems', value: '' },
      { label: 'Dense Layouts', value: '' },
      { label: 'Interaction States', value: '' },
    ],
  },
  {
    title: 'OPERATIONS',
    accent: 'muted',
    items: [
      { label: 'Node.js Runtimes', value: '' },
      { label: 'Docker / CI', value: '' },
      { label: 'Deploy Pipelines', value: '' },
      { label: 'Frontend QA', value: '' },
    ],
  },
] as const

const experiments = [
  'Terminal-inspired UI shells for portfolios and product marketing',
  'Dense data layouts with restrained animation and stronger type rhythm',
  'Frontend systems that feel editorial instead of template-driven',
] as const

const runtimeFacts = [
  { key: 'render.mode', value: 'single-page portfolio' },
  { key: 'surface.logic', value: 'tonal layering' },
  { key: 'motion.rule', value: 'fast step feedback' },
  { key: 'accent.use', value: 'cyan / lime / sparse' },
] as const

const connectionFacts = [
  { key: 'IP', value: '95.216.201.91' },
  { key: 'LOC', value: 'UTC / Remote' },
  { key: 'PORT', value: '443' },
] as const

const contactRows = [
  { key: 'email_address', value: 'konstantinkulebaev@gmail.com', href: 'mailto:konstantinkulebaev@gmail.com' },
  { key: 'github_handle', value: 'github.com/kkulebaev', href: 'https://github.com/kkulebaev' },
  { key: 'linkedin_id', value: 'linkedin.com/in/kkulebaev', href: 'https://linkedin.com/in/kkulebaev' },
  { key: 'telegram', value: '@kkulebaev', href: 'https://t.me/kkulebaev' },
] as const

const systemFooter = [
  { label: 'SYS_READY', value: '0.0.0.0:443' },
  { label: 'branch', value: 'main' },
  { label: 'utf-8', value: 'enabled' },
  { label: 'stack', value: 'typescript' },
  { label: 'latency', value: '12ms' },
] as const
</script>

<template>
  <div id="top" class="shell">
    <header class="topbar">
      <div class="topbar__path">{{ shellMeta.path }}</div>

      <nav class="topbar__nav">
        <a v-for="link in navLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>

      <div class="topbar__status">{{ shellMeta.status }}</div>
    </header>

    <aside class="siderail">
      <div class="siderail__meta">
        <span class="siderail__meta-label">{{ shellMeta.version }}</span>
        <span class="siderail__meta-value">{{ shellMeta.path }}</span>
      </div>

      <div class="siderail__stack">
        <a
          v-for="item in sideLinks"
          :key="item.label"
          class="siderail__item"
          :class="{ 'siderail__item--active': item.active }"
          :href="item.href"
        >
          <span class="siderail__glyph">{{ item.glyph }}</span>
          <span>{{ item.label }}</span>
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
              <span>Available for freelance projects</span>
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
          <article v-for="project in projects" :key="project.title" class="project-card">
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
                <a class="button button--primary" :href="project.codeHref" target="_blank" rel="noreferrer">
                  VIEW_CODE
                </a>
                <a class="button button--panel" :href="project.demoHref">LIVE_DEMO</a>
              </div>
            </div>
          </article>
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
                  <span v-for="fact in runtimeFacts" :key="fact.key">
                    {{ fact.key }}
                    <strong>{{ fact.value }}</strong>
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="labs" class="section section--band">
        <div class="stack-layout">
          <div class="stack-layout__intro">
            <p class="eyebrow eyebrow--secondary">&gt; _stack_analysis</p>
            <h2>Expertise.<br />Inventory</h2>
            <p>
              A systematic breakdown of tools and technologies utilized in the construction of
              modular digital experiences.
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
                <li v-for="item in group.items" :key="item.label">
                  <span class="stack-group__lead">&gt;&gt;</span>
                  <span>{{ item.label }}</span>
                  <strong v-if="item.value">{{ item.value }}</strong>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" class="section section--contact">
        <div class="section__heading section__heading--center">
          <p class="eyebrow eyebrow--secondary">Initialize Connection</p>
          <h2>Ready to architect the next standard?</h2>
        </div>

        <div class="contact-cta">
          <div class="contact-cta__actions">
            <a class="button button--primary" href="mailto:konstantinkulebaev@gmail.com">START_CHAT</a>
            <a class="button button--panel" href="https://github.com/kkulebaev" target="_blank" rel="noreferrer">
              DOWNLOAD_CV
            </a>
          </div>

          <div class="contact-cta__facts">
            <span v-for="fact in connectionFacts" :key="fact.key">{{ fact.key }}: {{ fact.value }}</span>
          </div>
        </div>

        <div class="contact-terminal">
          <div class="contact-terminal__heading">
            <span class="contact-terminal__line">contact_protocols.sh</span>
            <span class="contact-terminal__line contact-terminal__line--muted">
              &gt; status_monitor: <span class="contact-terminal__online">ONLINE</span>
            </span>
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
      </section>
    </main>

    <footer class="sysbar">
      <span v-for="item in systemFooter" :key="item.label">
        {{ item.label }}: <strong>{{ item.value }}</strong>
      </span>
    </footer>
  </div>
</template>
