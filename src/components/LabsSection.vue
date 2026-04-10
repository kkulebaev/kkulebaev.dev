<script setup lang="ts">
import type { StackGroup } from '../content/portfolio'

type Props = {
  groups: readonly StackGroup[]
}

defineProps<Props>()
</script>

<template>
  <section id="stack" class="section section--band">
    <div class="stack-layout">
      <div class="stack-layout__intro">
        <p class="eyebrow eyebrow--secondary">&gt; _stack_analysis</p>
        <h2>Expertise.<br />Inventory</h2>
        <p>A systematic breakdown of tools and technologies utilized in the construction of modular digital experiences.</p>
      </div>

      <div class="stack-layout__groups">
        <article v-for="group in groups" :key="group.title" class="stack-group" :class="`stack-group--${group.accent}`">
          <h3>{{ group.title }}</h3>
          <ul>
            <li v-for="item in group.items" :key="item.label">
              <span class="stack-group__lead">&gt;&gt;</span>
              <span>{{ item.label }}</span>
              <strong v-if="item.value">{{ item.value }}</strong>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
