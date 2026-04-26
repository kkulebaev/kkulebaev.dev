# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site (`kkulebaev.dev`) — single-page Vue 3 + Vite + TypeScript app, styled in a "technical editorial / terminal shell" aesthetic.

## Commands

Package manager is **pnpm** (pinned via `packageManager` and `engines`, version `>=10.28.2`). Do not use npm/yarn.

- `pnpm install` — install deps
- `pnpm dev` — Vite dev server
- `pnpm build` — runs `typecheck` then `vite build` (typecheck must pass)
- `pnpm typecheck` — `vue-tsc --noEmit` (standalone TS check)
- `pnpm preview` — preview production build

There is no test runner, linter, or formatter configured.

## Architecture

The app is a single page composed in `src/App.vue` from section components. Layout is intentionally data-driven:

- **`src/content/portfolio.ts`** — single source of truth for page content (nav links, projects, stack groups, contacts, shell metadata, footer items). Editing the page usually means editing this file, not the section components.
- **`src/components/*Section.vue`** — pure presentational sections (Hero, Projects, Labs, Cta, Contact) that receive data via props from `App.vue`.
- **`src/components/AppTopbar.vue`, `AppSiderail.vue`, `Sysbar.vue`** — chrome around the page (shell header, side rail, status bar).
- **`src/composables/useLatency.ts`** — reactive latency value injected into the sysbar.
- **`src/styles/`** — CSS is split into layered files imported by `src/style.css` in order: `tokens.css` (design tokens) → `base.css` → `layout.css` → `components.css` → `sections.css`. Prefer reusing tokens / existing recipes over ad hoc values; the design system intentionally minimizes one-off visual values.

## Deployment

Deployed to Railway via `Dockerfile` (multi-stage: `node:24-alpine` builder → `caddy:2-alpine` runner). Caddy serves `dist/` on `$PORT` with SPA fallback to `index.html` and a `/health` endpoint. `auto_https` is off because Railway terminates TLS.
