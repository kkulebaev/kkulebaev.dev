<script setup lang="ts">
import { computed } from 'vue'
import AppSiderail from './components/AppSiderail.vue'
import AppTopbar from './components/AppTopbar.vue'
import ContactSection from './components/ContactSection.vue'
import CtaSection from './components/CtaSection.vue'
import HeroSection from './components/HeroSection.vue'
import LabsSection from './components/LabsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import Sysbar from './components/Sysbar.vue'
import { useLatency } from './composables/useLatency'

import {
  availableForHire,
  connectionFacts,
  contactRows,
  navLinks,
  projectCardAccents,
  projects,
  shellMeta,
  sideLinks,
  stackGroups,
  systemFooter,
} from './content/portfolio'

const { latency } = useLatency()

const sysbarItems = computed(() => [
  ...systemFooter,
  { label: 'LATENCY', value: latency.value, accent: 'white' as const },
])
</script>

<template>
  <div id="whoami" class="shell">
    <AppTopbar :path="shellMeta.path" :status="shellMeta.status" :links="navLinks" />
    <AppSiderail :meta="shellMeta" :links="sideLinks" />

    <main class="page">
      <HeroSection :available="availableForHire" />
      <ProjectsSection :projects="projects" :accents="projectCardAccents" />
      <LabsSection :groups="stackGroups" />
      <CtaSection :connection-facts="connectionFacts" />
      <ContactSection :contact-rows="contactRows" />
    </main>

    <Sysbar :items="sysbarItems" />
  </div>
</template>
