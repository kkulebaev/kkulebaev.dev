/* ═══════════════════════════════════════════════
   Portfolio Content — types & data
   ═══════════════════════════════════════════════ */

// ── Types ──

export type NavLink = {
  label: string
  href: `#${string}`
}

export type ShellMeta = {
  version: string
  path: string
  status: string
}

export type SideLink = {
  label: string
  href: `#${string}`
  glyph: string
  active: boolean
}

export type StackAccent = 'primary' | 'secondary' | 'tertiary' | 'muted'

export type StackItem = {
  label: string
  value?: string
}

export type StackGroup = {
  title: string
  accent: StackAccent
  items: readonly StackItem[]
}

export type Project = {
  title: string
  version: string
  description: string
  image: string
  tags: readonly string[]
  codeHref: string
  demoHref: string
}

export type ProjectCardAccent = 'primary' | 'secondary' | 'tertiary'

export type KVPair = {
  key: string
  value: string
}

export type ContactRow = {
  key: string
  value: string
  href: string
  accent: 'primary' | 'secondary' | 'tertiary'
}

export type SysbarItem = {
  label: string
  value: string
  accent?: 'lime' | 'white'
}

// ── Shell ──

export const shellMeta: ShellMeta = {
  version: 'Ubuntu 24.04.4 LTS',
  path: '~/kkulebaev/console',
  status: 'SSH:Active',
}

export const navLinks: readonly NavLink[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Labs', href: '#labs' },
  { label: 'Contact', href: '#contact' },
]

export const sideLinks: readonly SideLink[] = [
  { label: 'Root', href: '#top', glyph: 'folder', active: true },
  { label: 'Projects', href: '#projects', glyph: 'terminal', active: false },
  { label: 'About', href: '#experience', glyph: 'person', active: false },
]

// ── Projects ──

export const projectCardAccents: readonly ProjectCardAccent[] = [
  'primary',
  'secondary',
  'tertiary',
]

export const projects: readonly Project[] = [
  {
    title: 'Krypton_Vault',
    version: 'v.1.0.4',
    description:
      'A decentralized asset management dashboard with real-time analytics and biometric-inspired security visualization.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCORFWlrlVKwe1y6j51N6N8MJb3gVPo9COO57CdQHqqlgrq5XGuZl3hBuVyCkuRQu3wYobegV3YjaqsMUb8Xm62jwHy7t1Kx4wzseDhupT5ul6nRF-9dddL3d_PDa2tRkBDoa-cMn-6PIINHXvMHgbmj79LkQwzBlbE21t_z674nyPX5MnG5cftKQE1vCwzIr-ZIF8nw0nYxJgWDd2Wg4ldHosbUxMvnJGFwfnqeH7YxOo-hQ3YjXcuDL1HhnsOwGVli8HP3qP4gCQ',
    tags: ['NEXTJS', 'TYPESCRIPT', 'TRPC'],
    codeHref: 'https://github.com/archon-dev',
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
    codeHref: 'https://github.com/archon-dev',
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
    codeHref: 'https://github.com/archon-dev',
    demoHref: '#contact',
  },
]

// ── Stack / Labs ──

export const stackGroups: readonly StackGroup[] = [
  {
    title: 'CORE_LANGUAGES',
    accent: 'primary',
    items: [
      { label: 'TypeScript', value: '100%' },
      { label: 'React / Next.js', value: '95%' },
      { label: 'Rust (WASM)', value: '40%' },
    ],
  },
  {
    title: 'ARCHITECTURE',
    accent: 'secondary',
    items: [
      { label: 'Design Systems' },
      { label: 'Micro-Frontends' },
      { label: 'Performance Optimization' },
    ],
  },
  {
    title: 'INTERFACE',
    accent: 'tertiary',
    items: [
      { label: 'Tailwind CSS' },
      { label: 'Framer Motion' },
      { label: 'Three.js / GLSL' },
    ],
  },
  {
    title: 'OPERATIONS',
    accent: 'muted',
    items: [
      { label: 'Docker / CI/CD' },
      { label: 'Node.js Runtimes' },
    ],
  },
]

// ── Contact ──

export const connectionFacts: readonly KVPair[] = [
  { key: 'IP', value: '192.168.1.101' },
  { key: 'LOC', value: 'SAN_FRANCISCO, CA' },
  { key: 'PORT', value: '3000' },
]

export const contactRows: readonly ContactRow[] = [
  {
    key: 'email_address',
    value: 'konstantinkulebaev@gmail.com',
    href: 'mailto:konstantinkulebaev@gmail.com',
    accent: 'primary',
  },
  {
    key: 'github_handle',
    value: 'github.com/kkulebaev',
    href: 'https://github.com/kkulebaev',
    accent: 'secondary',
  },
  {
    key: 'linkedin_id',
    value: 'linkedin.com/in/kkulebaev',
    href: 'https://linkedin.com/in/kkulebaev',
    accent: 'tertiary',
  },
  {
    key: 'twitter_x',
    value: '@kkulebaev',
    href: 'https://x.com/kkulebaev',
    accent: 'primary',
  },
]

// ── Sysbar ──

export const systemFooter: readonly SysbarItem[] = [
  { label: 'SYS_READY', value: '0.0.0.0:3000', accent: 'lime' },
  { label: 'BRANCH', value: 'MAIN' },
  { label: 'UTF-8', value: '' },
  { label: 'TYPESCRIPT', value: '' },
  { label: 'LATENCY', value: '12ms', accent: 'white' },
]
