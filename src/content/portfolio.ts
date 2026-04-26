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
}

export type StackGroup = {
  title: string
  accent: StackAccent
  items: readonly StackItem[]
}

export type Project = {
  slug: string
  title: string
  description: string
  tags?: readonly string[]
  codeHref: string
  demoHref?: string
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

// ── Availability ──

export const availableForHire = false

// Flip to true once `/cv.pdf` is published in `public/`.
export const cvAvailable = false

// ── Shell ──

export const shellMeta: ShellMeta = {
  version: 'Ubuntu 24.04.4 LTS',
  path: '~/kkulebaev/console',
  status: 'SSH:Active',
}

export const navLinks: readonly NavLink[] = [
  { label: 'whoami', href: '#whoami' },
  { label: '_repositories', href: '#repositories' },
  { label: '_stack', href: '#stack' },
  { label: '_contacts', href: '#contacts' },
]

export const sideLinks: readonly SideLink[] = [
  { label: 'Root', href: '#whoami', glyph: 'folder', active: true },
  { label: 'Projects', href: '#repositories', glyph: 'terminal', active: false },
  { label: 'Stack', href: '#stack', glyph: 'layers', active: false },
]

// ── Projects ──

export const projectCardAccents: readonly ProjectCardAccent[] = [
  'primary',
  'secondary',
  'tertiary',
]

// Populated at build time by `pnpm projects:fetch` from the whitelist in
// `projects.whitelist.ts`. The generated file is committed; refresh it when
// repos change.
export { projects } from './projects.generated'

// ── Stack / Labs ──

export const stackGroups: readonly StackGroup[] = [
  {
    title: 'LANGUAGES',
    accent: 'primary',
    items: [
      { label: 'TypeScript' },
      { label: 'JavaScript' },
      { label: 'Go' },
      { label: 'Rust' },
    ],
  },
  {
    title: 'FRAMEWORKS',
    accent: 'secondary',
    items: [
      { label: 'Vue' },
      { label: 'React' },
    ],
  },
  {
    title: 'TOOLING',
    accent: 'tertiary',
    items: [
      { label: 'Vite' },
      { label: 'pnpm' },
      { label: 'Vitest' },
      { label: 'Storybook' },
      { label: 'oxlint' },
      { label: 'oxfmt' },
      { label: 'GitHub Actions' },
    ],
  },
  {
    title: 'INFRA',
    accent: 'muted',
    items: [
      { label: 'Docker' },
      { label: 'PostgreSQL' },
      { label: 'Redis' },
      { label: 'Caddy' },
      { label: 'nginx' },
      { label: 'Railway' },
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
    key: 'telegram',
    value: 't.me/kkulebaev',
    href: 'https://t.me/kkulebaev',
    accent: 'primary',
  },
  {
    key: 'email',
    value: 'konstantinkulebaev@gmail.com',
    href: 'mailto:konstantinkulebaev@gmail.com',
    accent: 'primary',
  },
  {
    key: 'github',
    value: 'github.com/kkulebaev',
    href: 'https://github.com/kkulebaev',
    accent: 'secondary',
  },
  {
    key: 'linkedin',
    value: 'linkedin.com/in/kkulebaev',
    href: 'https://linkedin.com/in/kkulebaev',
    accent: 'secondary',
  },
  {
    key: 'twitter_x',
    value: '@kkulebaev',
    href: 'https://x.com/kkulebaev',
    accent: 'tertiary',
  },
  {
    key: 'threads',
    value: '@konstantin_kulebaev',
    href: 'https://threads.com/@konstantin_kulebaev',
    accent: 'tertiary',
  },
]

// ── Sysbar ──

export const systemFooter: readonly SysbarItem[] = [
  { label: 'SYS_READY', value: '0.0.0.0:3000', accent: 'lime' },
  { label: 'BRANCH', value: 'MAIN' },
  { label: 'UTF-8', value: '' },
  { label: 'TYPESCRIPT', value: '' },
]
