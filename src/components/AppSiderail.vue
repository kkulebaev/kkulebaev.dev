<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { ShellMeta, SideLink } from '../content/portfolio'

type Props = {
  meta: ShellMeta
  links: readonly SideLink[]
}

const props = defineProps<Props>()

const osName = computed(() => props.meta.version.split(' ')[0] ?? props.meta.version)
const osVersion = computed(() => props.meta.version.split(' ').slice(1).join(' ') || '')

const deploying = ref(false)
const phase = ref(0)
const isMac = ref(false)
const timers: number[] = []

const consoleKeys = computed<readonly string[]>(() =>
  isMac.value ? ['⌘', '⌥', 'J'] : ['Ctrl', 'Shift', 'J'],
)

function clearTimers() {
  while (timers.length) clearTimeout(timers.pop())
}

function dismiss() {
  clearTimers()
  deploying.value = false
  phase.value = 0
}

function printConsoleWelcome() {
  const banner = [
    '',
    '  ╔══════════════════════════════════╗',
    '  ║                                  ║',
    '  ║    WELCOME — kkulebaev.dev       ║',
    '  ║                                  ║',
    '  ╚══════════════════════════════════╝',
    '',
  ].join('\n')

  /* eslint-disable no-console */
  console.log('%c' + banner, 'color:#00e5ff;font-family:ui-monospace,SFMono-Regular,monospace;')
  console.log('%cThanks for opening the console.', 'color:#cbff3c;font-family:ui-monospace,monospace;font-weight:bold;')
  console.log('%cdirect lines:', 'color:#cbff3c;font-weight:bold;')
  console.log('  telegram → https://t.me/kkulebaev')
  console.log('  email    → konstantinkulebaev@gmail.com')
  console.log('  github   → https://github.com/kkulebaev')
  /* eslint-enable no-console */
}

function deploy() {
  clearTimers()
  printConsoleWelcome()

  deploying.value = true
  phase.value = 1

  timers.push(window.setTimeout(() => (phase.value = 2), 600))
  timers.push(window.setTimeout(() => (phase.value = 3), 1100))
  timers.push(window.setTimeout(() => (phase.value = 4), 1600))
  timers.push(window.setTimeout(dismiss, 8000))
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && deploying.value) {
    dismiss()
  }
}

onMounted(() => {
  isMac.value = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/i.test(navigator.userAgent)
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  clearTimers()
})
</script>

<template>
  <aside class="siderail">
    <div class="siderail__meta">
      <span class="siderail__meta-label">{{ osName }}</span>
      <span class="siderail__meta-value">{{ osVersion }}</span>
    </div>

    <div class="siderail__stack">
      <a
        v-for="item in links"
        :key="item.label"
        class="siderail__item"
        :class="{ 'siderail__item--active': item.active }"
        :href="item.href"
      >
        <span class="material-symbols-outlined siderail__glyph">{{ item.glyph }}</span>
        <span>{{ item.label }}</span>
      </a>
    </div>

    <button type="button" class="siderail__deploy" @click="deploy">DEPLOY</button>

    <Teleport to="body">
      <Transition name="deploy">
        <div
          v-if="deploying"
          class="deploy-overlay terminal-window"
          role="status"
          aria-live="polite"
        >
          <div class="deploy-overlay__bar terminal-window__bar">
            <div class="window-dots">
              <span class="window-dot--red"></span>
              <span class="window-dot--yellow"></span>
              <span class="window-dot--green"></span>
            </div>
            <span class="terminal-window__title">deploy.sh</span>
          </div>

          <div class="deploy-overlay__body">
            <p v-show="phase >= 1" class="deploy-overlay__line">
              <span class="deploy-overlay__prompt">&gt;</span> deploying connection...
            </p>
            <p v-show="phase >= 2" class="deploy-overlay__line deploy-overlay__line--ok">[OK]</p>
            <p v-show="phase >= 3" class="deploy-overlay__line deploy-overlay__hint">
              welcome message printed to the console
            </p>
            <p v-show="phase >= 4" class="deploy-overlay__keys">
              <span class="deploy-overlay__combo">
                <template v-for="(key, i) in consoleKeys" :key="key">
                  <kbd>{{ key }}</kbd>
                  <span v-if="i < consoleKeys.length - 1" class="deploy-overlay__plus">+</span>
                </template>
              </span>
              open console
              <span class="deploy-overlay__sep">·</span>
              <kbd>esc</kbd> close
            </p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </aside>
</template>
