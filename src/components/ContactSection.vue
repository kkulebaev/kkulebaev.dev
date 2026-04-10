<script setup lang="ts">
import type { ContactRow, KVPair } from '../content/portfolio'

type Props = {
  connectionFacts: readonly KVPair[]
  contactRows: readonly ContactRow[]
}

defineProps<Props>()
</script>

<template>
  <!-- CTA Block -->
  <section class="section section--contact-cta">
    <div class="section__heading section__heading--center">
      <p class="eyebrow">Initialize Connection</p>
      <h2>Ready to architect the next standard?</h2>
    </div>

    <div class="contact-cta">
      <div class="contact-cta__actions">
        <a class="button button--primary" href="mailto:konstantinkulebaev@gmail.com">
          START_CHAT <span class="material-symbols-outlined button__icon">send</span>
        </a>
        <a class="button button--panel" href="https://github.com/kkulebaev" target="_blank" rel="noreferrer">DOWNLOAD_CV</a>
      </div>

      <div class="contact-cta__facts">
        <span v-for="fact in connectionFacts" :key="fact.key">{{ fact.key }}: {{ fact.value }}</span>
      </div>
    </div>
  </section>

  <!-- Contact Terminal -->
  <section id="contact" class="section section--contact-terminal">
    <p class="eyebrow"><span class="eyebrow__mark">$</span> locate contact</p>

    <div class="contact-window">
      <div class="terminal-window__bar">
        <div class="window-dots">
          <span class="window-dot--red"></span>
          <span class="window-dot--yellow"></span>
          <span class="window-dot--green"></span>
        </div>
        <span class="terminal-window__title">contact_protocols.sh</span>
      </div>

      <div class="contact-window__body">
        <div class="contact-terminal__prompt">
          <span class="contact-terminal__prompt-mark">&gt;</span>
          <div class="contact-terminal__prompt-body">
            <div class="contact-window__status-row">
              <span class="contact-window__status-label">status_monitor:</span>
              <span class="contact-window__online-badge">
                <span class="contact-window__online-dot"></span>
                <span class="contact-window__online-text">ONLINE</span>
              </span>
            </div>

            <div class="contact-grid">
              <a
                v-for="row in contactRows"
                :key="row.key"
                :href="row.href"
                target="_blank"
                rel="noreferrer"
                class="contact-grid__item"
                :class="`contact-grid__item--${row.accent}`"
              >
                <span class="contact-grid__key">{{ row.key }}</span>
                <strong class="contact-grid__value">{{ row.value }}</strong>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-window__footer">
          <span>COMPILING ENCRYPTION... [OK]</span>
          <span>ESTABLISHING TUNNEL... [OK]</span>
          <div class="contact-window__cursor">
            <span class="contact-window__cursor-underscore">_</span>
            <span class="cursor-blink"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
