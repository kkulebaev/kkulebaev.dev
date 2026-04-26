// Whitelist of GitHub repos to feature on the site.
// Edit this file, then run `pnpm projects:fetch` to refresh
// `src/content/projects.generated.ts`.
//
// Each entry:
//   slug      — required, "owner/repo" on GitHub
//   tags      — optional, short uppercase labels shown on the card
//   demoUrl   — optional, live demo URL
//
// Example:
//   { slug: 'kkulebaev/foo', tags: ['VUE', 'VITE'], demoUrl: 'https://foo.example.com' }

/** @type {ReadonlyArray<{ slug: string; tags?: readonly string[]; demoUrl?: string }>} */
export const projectWhitelist = [
  { slug: 'kkulebaev/x-tweet-tracker-forwarder' },
  { slug: 'kkulebaev/birthday-reminder-bot' },
  { slug: 'kkulebaev/orbit-todo-bot' },
  { slug: 'kkulebaev/x-tweet-tracker-api' },
  { slug: 'kkulebaev/weekly-headlines-cron' },
  { slug: 'kkulebaev/tgstat-to-ads' },
  { slug: 'kkulebaev/telegram-notify-service' },
  { slug: 'kkulebaev/x-tweet-tracker-cron' },
  { slug: 'kkulebaev/telegram-channel-collector' },
  { slug: 'kkulebaev/x-tweet-tracker-bot' },
]
