<template>
  <section class="hero">
    <div class="hero__header">
      <span class="hero__eyebrow">
        <span class="hero__eyebrow-mark">$</span> whoami
      </span>
      <h1>Frontend<br /><span>Developer</span></h1>
    </div>
    <div class="hero__body">
      <p class="hero__lede">
        Building clean, code-driven UI for the next-gen web. Specializing in high-performance architectures and
        architecting digital spaces that bridge technical logic with human intuition.
      </p>
      <div class="hero__actions">
        <a class="hero-link" href="https://github.com/kkulebaev" target="_blank" rel="noreferrer">
          <span class="hero-link__prefix">&gt;</span>
          <span>GITHUB</span>
          <span class="material-symbols-outlined hero-link__icon">arrow_outward</span>
        </a>
        <a class="hero-link hero-link--secondary" href="#contacts">
          <span class="hero-link__prefix">&gt;</span>
          <span>CONTACT</span>
          <span class="material-symbols-outlined hero-link__icon">mail</span>
        </a>
        <div class="availability" :class="{ 'availability--unavailable': !available }">
          <span class="availability__dot"></span>
          <span>{{ available ? 'Available for hire' : 'Unavailable for hire' }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  available: boolean
}>()
</script>
