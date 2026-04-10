<script setup lang="ts">
import { computed } from 'vue'
import type { SysbarItem } from '../content/portfolio'

type Props = {
  items: readonly SysbarItem[]
}

const props = defineProps<Props>()

const leftItems = computed(() => props.items.slice(0, 3))
const rightItems = computed(() => props.items.slice(3))

function accentClass(item: SysbarItem) {
  if (item.accent === 'lime') return 'sysbar__lime'
  if (item.accent === 'white') return 'sysbar__white'
  return ''
}
</script>

<template>
  <footer class="sysbar" aria-label="System status">
    <div class="sysbar__group">
      <span v-for="item in leftItems" :key="item.label" :class="accentClass(item)">
        <template v-if="item.value">{{ item.label }}: <strong>{{ item.value }}</strong></template>
        <template v-else>{{ item.label }}</template>
      </span>
    </div>
    <div class="sysbar__group">
      <span v-for="item in rightItems" :key="item.label" :class="accentClass(item)">
        <template v-if="item.value">{{ item.label }}: <strong>{{ item.value }}</strong></template>
        <template v-else>{{ item.label }}</template>
      </span>
    </div>
  </footer>
</template>
