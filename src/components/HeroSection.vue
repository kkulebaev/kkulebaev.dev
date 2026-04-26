<template>
  <section class="hero">
    <div class="hero__header">
      <span class="hero__eyebrow">
        <span class="hero__eyebrow-mark">$</span> whoami
      </span>
      <h1>Software<br /><span>Engineer</span></h1>
    </div>
    <div class="hero__body">
      <p class="hero__lede">
        Building clean, code-driven products for the modern web. Software engineering with a deep frontend
        focus — equally at home across the full stack, where technical logic meets product intuition.
      </p>
      <div class="hero__actions">
        <a class="hero-link" href="#repositories">
          <span class="hero-link__prefix">&gt;</span>
          <span>VIEW_WORK</span>
          <span class="material-symbols-outlined hero-link__icon">arrow_forward</span>
        </a>
        <a class="hero-link hero-link--secondary" href="#contacts">
          <span class="hero-link__prefix">&gt;</span>
          <span>GET_IN_TOUCH</span>
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
