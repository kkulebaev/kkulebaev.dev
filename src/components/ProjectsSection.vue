<script setup lang="ts">
import type { Project, ProjectCardAccent } from '../content/portfolio'

type Props = {
  projects: readonly Project[]
  accents: readonly ProjectCardAccent[]
}

defineProps<Props>()
</script>

<template>
  <section id="projects" class="section section--offset">
    <div class="section__heading section__heading--split">
      <div>
        <p class="eyebrow">&gt; _repositories</p>
        <h2>~/github/repositories</h2>
      </div>
      <p class="section__meta">LS -AL /PROJECTS <span>{{ projects.length }} OBJECTS FOUND</span></p>
    </div>

    <div class="project-grid">
      <article
        v-for="(project, index) in projects"
        :key="project.title"
        class="project-card"
        :class="`project-card--${accents[index % accents.length]}`"
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
          <img :src="project.image" :alt="project.title" class="project-card__image" loading="lazy" />
        </div>

        <div class="project-card__body">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>

          <div class="project-card__tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>

          <div class="project-card__actions">
            <a class="button button--primary" :href="project.codeHref" target="_blank" rel="noreferrer">VIEW_CODE</a>
            <a class="button button--panel" :href="project.demoHref">LIVE_DEMO</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
