<script setup lang="ts">
import type { Project, ProjectCardAccent } from '../content/portfolio'

type Props = {
  projects: readonly Project[]
  accents: readonly ProjectCardAccent[]
}

defineProps<Props>()
</script>

<template>
  <section id="repositories" class="section section--offset">
    <div class="section__heading section__heading--split">
      <div>
        <p class="eyebrow">&gt; _repositories</p>
        <h2>~/github/repositories</h2>
      </div>
      <p class="section__meta">LS -AL /PROJECTS <span>{{ projects.length }} OBJECTS FOUND</span></p>
    </div>

    <div v-if="projects.length === 0" class="project-empty">
      <span class="project-empty__prompt">$</span>
      <span>no projects published yet</span>
    </div>

    <div v-else class="project-grid">
      <article
        v-for="(project, index) in projects"
        :key="project.slug"
        class="project-card"
        :class="`project-card--${accents[index % accents.length]}`"
      >
        <div class="project-card__bar">
          <div class="window-dots window-dots--ghost">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="project-card__body">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>

          <div v-if="project.tags && project.tags.length" class="project-card__tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>

          <div class="project-card__actions">
            <a class="button button--primary" :href="project.codeHref" target="_blank" rel="noreferrer">VIEW_CODE</a>
            <a v-if="project.demoHref" class="button button--panel" :href="project.demoHref" target="_blank" rel="noreferrer">LIVE_DEMO</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
