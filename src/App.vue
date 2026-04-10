<script setup lang="ts">
import AppSiderail from './components/AppSiderail.vue'
import AppTopbar from './components/AppTopbar.vue'
import ContactSection from './components/ContactSection.vue'
import HeroSection from './components/HeroSection.vue'
import LabsSection from './components/LabsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import Sysbar from './components/Sysbar.vue'

import {
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
</script>

<template>
  <div id="top" class="shell">
    <AppTopbar :path="shellMeta.path" :status="shellMeta.status" :links="navLinks" />
    <AppSiderail :meta="shellMeta" :links="sideLinks" />

    <main class="page">
      <HeroSection />
      <ProjectsSection :projects="projects" :accents="projectCardAccents" />
      <div id="experience" class="anchor" aria-hidden="true"></div>
      <LabsSection :groups="stackGroups" />
      <ContactSection :connection-facts="connectionFacts" :contact-rows="contactRows" />
    </main>

    <Sysbar :items="systemFooter" />
  </div>
</template>
