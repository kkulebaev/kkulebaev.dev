<script setup lang="ts">
import type { NavLink } from '../content/portfolio'

type Props = {
  path: string
  status: string
  links: readonly NavLink[]
}

defineProps<Props>()
</script>

<template>
  <header class="topbar">
    <div class="topbar__path">{{ path }}</div>

    <nav class="topbar__nav" aria-label="Primary">
      <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
    </nav>

    <div class="topbar__status">
      <span class="topbar__status-icon" aria-hidden="true">&gt;_</span>
      <span>{{ status }}</span>
    </div>
    <span class="topbar__control" aria-hidden="true">&lt;/&gt;</span>
  </header>
</template>
