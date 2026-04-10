# ── Stage 1: Build ──────────────────────────────
FROM node:24.14.1-alpine AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && corepack prepare pnpm@10.28.2 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

# ── Stage 2: Serve (Railway) ─────────────────────
# https://docs.railway.com/guides/vue#use-a-dockerfile
FROM caddy:2-alpine AS runner

WORKDIR /srv

COPY --from=builder /app/dist ./dist
COPY Caddyfile /etc/caddy/Caddyfile

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
