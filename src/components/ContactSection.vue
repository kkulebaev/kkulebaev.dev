<script setup lang="ts">
import type { ContactRow, KVPair } from '../content/portfolio'

type Props = {
  connectionFacts: readonly KVPair[]
  contactRows: readonly ContactRow[]
}

defineProps<Props>()
</script>

<template>
  <section id="contact" class="section section--contact">
    <div class="section__heading section__heading--center">
      <p class="eyebrow eyebrow--secondary">Initialize Connection</p>
      <h2>Ready to architect the next standard?</h2>
    </div>

    <div class="contact-cta">
      <div class="contact-cta__actions">
        <a class="button button--primary" href="mailto:konstantinkulebaev@gmail.com">START_CHAT</a>
        <a class="button button--panel" href="https://github.com/kkulebaev" target="_blank" rel="noreferrer">DOWNLOAD_CV</a>
      </div>

      <div class="contact-cta__facts">
        <span v-for="fact in connectionFacts" :key="fact.key">{{ fact.key }}: {{ fact.value }}</span>
      </div>
    </div>

    <div class="terminal-window contact-window">
      <div class="terminal-window__bar">
        <div class="window-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span class="terminal-window__title">locate.contact</span>
      </div>

      <div class="terminal-window__body contact-window__body">
        <p class="eyebrow"><span class="eyebrow__mark">$</span> locate contact</p>
        <p class="contact-window__status">contact_protocols.sh &gt; status_monitor: <span>ONLINE</span></p>

        <div class="contact-grid">
          <a
            v-for="row in contactRows"
            :key="row.key"
            :href="row.href"
            target="_blank"
            rel="noreferrer"
            class="contact-grid__item"
          >
            <span class="contact-grid__key">{{ row.key }}</span>
            <strong class="contact-grid__value">{{ row.value }}</strong>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
