<script setup lang="ts">
const skills = [
  'Vue',
  'TypeScript',
  'Vite',
  'Nuxt',
  'Node.js',
  'Design Systems',
] as const

const featuredProjects = [
  {
    title: 'kkulebaev.dev',
    tag: 'Portfolio',
    description: 'Личный сайт с сильным акцентом на производительность, читабельность и выразительную типографику.',
  },
  {
    title: 'Terminal UI Kit',
    tag: 'Design System',
    description: 'Набор компонентов с консольной эстетикой: окна, метрики, статусные бейджи и карточки проектов.',
  },
  {
    title: 'Frontend Experiments',
    tag: 'Lab',
    description: 'Подборка интерфейсных экспериментов, анимаций и визуальных прототипов для веба.',
  },
] as const

const experience = [
  {
    period: '2024 — сейчас',
    role: 'Senior Frontend Developer',
    summary: 'Проектирование UI-архитектуры, разработка продуктовых интерфейсов и ускорение командной поставки.',
  },
  {
    period: '2022 — 2024',
    role: 'Frontend Engineer',
    summary: 'Создание SPA и внутренних продуктов, развитие компонентной базы и DX команды.',
  },
] as const
</script>

<template>
  <div class="page-shell">
    <div class="noise"></div>

    <header class="topbar">
      <div class="brand-block">
        <span class="brand-dot"></span>
        <span class="brand-name">kkulebaev.dev</span>
      </div>

      <nav class="topnav">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main class="layout">
      <section class="hero card card-terminal">
        <div class="terminal-head">
          <div class="terminal-lights">
            <span class="light red"></span>
            <span class="light yellow"></span>
            <span class="light green"></span>
          </div>
          <span class="terminal-title">~/portfolio/main.ts</span>
        </div>

        <div class="hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">Frontend developer</p>
            <h1>Создаю быстрые и аккуратные интерфейсы с инженерным подходом</h1>
            <p class="lead">
              Фокус на Vue, TypeScript и продуктовых интерфейсах, где важны структура,
              визуальная ясность и ощущение качества в деталях.
            </p>

            <div class="hero-actions">
              <a class="button button-primary" href="#projects">Смотреть проекты</a>
              <a class="button button-secondary" href="#contact">Связаться</a>
            </div>

            <ul class="skill-list" aria-label="Основные навыки">
              <li v-for="skill in skills" :key="skill">{{ skill }}</li>
            </ul>
          </div>

          <aside class="hero-panel">
            <div class="metric-card">
              <span class="metric-label">Status</span>
              <strong>Available for product work</strong>
              <p>Open to frontend, UI architecture and design system tasks</p>
            </div>

            <div class="metric-grid">
              <div class="metric-item">
                <span>Experience</span>
                <strong>5+ years</strong>
              </div>
              <div class="metric-item">
                <span>Main stack</span>
                <strong>Vue + TS</strong>
              </div>
              <div class="metric-item">
                <span>Focus</span>
                <strong>Product UI</strong>
              </div>
              <div class="metric-item">
                <span>Location</span>
                <strong>Remote</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="projects" class="content-grid">
        <div class="section-copy">
          <p class="eyebrow">Selected work</p>
          <h2>Проекты и эксперименты</h2>
          <p>
            Портфолио, UI-системы и продуктовые интерфейсы, в которых важны темп разработки,
            поддерживаемость и визуальная дисциплина.
          </p>
        </div>

        <div class="cards-grid">
          <article v-for="project in featuredProjects" :key="project.title" class="card project-card">
            <span class="project-tag">{{ project.tag }}</span>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </article>
        </div>
      </section>

      <section id="experience" class="content-grid reversed">
        <div class="section-copy">
          <p class="eyebrow">Experience</p>
          <h2>Опыт, ориентированный на продукт</h2>
          <p>
            Работаю на стыке дизайна и разработки, чтобы интерфейс не только выглядел хорошо,
            но и удобно развивался командой.
          </p>
        </div>

        <div class="timeline card">
          <article v-for="item in experience" :key="item.period + item.role" class="timeline-item">
            <span class="timeline-period">{{ item.period }}</span>
            <h3>{{ item.role }}</h3>
            <p>{{ item.summary }}</p>
          </article>
        </div>
      </section>

      <section id="contact" class="contact card">
        <div>
          <p class="eyebrow">Contact</p>
          <h2>Нужен интерфейс, который приятно поддерживать?</h2>
          <p>
            Могу помочь с разработкой продуктового фронтенда, дизайн-системой или переводом
            идеи из дизайна в аккуратный код.
          </p>
        </div>

        <a class="button button-primary" href="mailto:hello@kkulebaev.dev">hello@kkulebaev.dev</a>
      </section>
    </main>
  </div>
</template>
