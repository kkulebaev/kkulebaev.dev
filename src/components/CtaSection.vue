<script setup lang="ts">
import type { KVPair } from '../content/portfolio'

type Props = {
  connectionFacts: readonly KVPair[]
  cvAvailable: boolean
}

defineProps<Props>()
</script>

<template>
  <section id="cta" class="section section--contact-cta">
    <div class="section__heading section__heading--center">
      <p class="eyebrow">Initialize Connection</p>
      <h2>Ready to architect the next standard?</h2>
    </div>

    <div class="contact-cta">
      <div class="contact-cta__actions">
        <a class="button button--primary" href="https://t.me/kkulebaev" target="_blank" rel="noreferrer">
          START_CHAT <span class="material-symbols-outlined button__icon">send</span>
        </a>
        <a v-if="cvAvailable" class="button button--panel" href="/cv.pdf" target="_blank" rel="noreferrer">DOWNLOAD_CV</a>
      </div>

      <div class="contact-cta__facts">
        <span v-for="fact in connectionFacts" :key="fact.key">{{ fact.key }}: {{ fact.value }}</span>
      </div>
    </div>
  </section>
</template>

