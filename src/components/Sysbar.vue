<script setup lang="ts">
import { computed } from 'vue'
import type { SysbarItem } from '../content/portfolio'

type Props = {
  items: readonly SysbarItem[]
}

const props = defineProps<Props>()

const leftItems = computed(() => props.items.slice(0, 3))
const rightItems = computed(() => props.items.slice(3))
</script>

<template>
  <footer class="sysbar" aria-label="System status">
    <div class="sysbar__group">
      <span v-for="item in leftItems" :key="item.label">
        {{ item.label }}: <strong>{{ item.value }}</strong>
      </span>
    </div>
    <div class="sysbar__group">
      <span v-for="item in rightItems" :key="item.label">
        {{ item.label }}: <strong>{{ item.value }}</strong>
      </span>
    </div>
  </footer>
</template>
