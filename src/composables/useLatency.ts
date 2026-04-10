import { onMounted, ref } from 'vue'

export function useLatency() {
  const latency = ref('…')

  function measure() {
    const entry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
    if (entry && entry.responseEnd > 0) {
      const ms = Math.round(entry.responseEnd - entry.fetchStart)
      latency.value = `${ms}ms`
    }
  }

  onMounted(() => {
    if (document.readyState === 'complete') {
      measure()
    } else {
      window.addEventListener('load', measure, { once: true })
    }
  })

  return { latency }
}

