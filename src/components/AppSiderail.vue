<script setup lang="ts">
import { computed } from 'vue'
import type { ShellMeta, SideLink } from '../content/portfolio'

type Props = {
  meta: ShellMeta
  links: readonly SideLink[]
}

const props = defineProps<Props>()

const osName = computed(() => props.meta.version.split(' ')[0] ?? props.meta.version)
const osVersion = computed(() => props.meta.version.split(' ').slice(1).join(' ') || '')
</script>

<template>
  <aside class="siderail">
    <div class="siderail__meta">
      <span class="siderail__meta-label">{{ osName }}</span>
      <span class="siderail__meta-value">{{ osVersion }}</span>
    </div>

    <div class="siderail__stack">
      <a
        v-for="item in links"
        :key="item.label"
        class="siderail__item"
        :class="{ 'siderail__item--active': item.active }"
        :href="item.href"
      >
        <span class="material-symbols-outlined siderail__glyph">{{ item.glyph }}</span>
        <span>{{ item.label }}</span>
      </a>
    </div>

    <a class="siderail__deploy" href="#contact">DEPLOY</a>
  </aside>
</template>
