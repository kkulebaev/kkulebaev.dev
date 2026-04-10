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

    <div class="topbar__right">
      <div class="topbar__status">
        <span class="material-symbols-outlined topbar__status-icon" aria-hidden="true">terminal</span>
        <span>{{ status }}</span>
      </div>
      <span class="material-symbols-outlined topbar__control" aria-hidden="true">code</span>
    </div>
  </header>
</template>
