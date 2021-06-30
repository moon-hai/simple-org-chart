<template>
  <div class="flex">
    <button @click="zoomIn">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    </button>
    <button @click="zoomOut">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
      </svg>
    </button>
  </div>

  <div class="panzoom">
    <div id="panzoom">
      <org-chart-item v-for="org in DATA_ORG_CHARTS" :key="org.id" :org-item="org" axis="horizontal" />
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
import Panzoom from '@panzoom/panzoom'
import OrgChartItem from './OrgChartItem.vue'
import dataSet from '@/data/orgChart.js'

export default defineComponent({
  name: 'OrgChartItems',

  setup() {
    const DATA_ORG_CHARTS = dataSet
    let panzoom = ref(null)

    const zoomIn = () => {
      panzoom.value.zoomIn()
    }

    const zoomOut = () => {
      panzoom.value.zoomOut()
    }

    const initPanzoom = () => {
      const el = document.getElementById('panzoom')
      panzoom.value = Panzoom(el, {
        maxScale: 3.5,
        canvas: true,
        pinchSpeed: 1,
        startScale: 1
      })

      // enable zoom with shift key
      const parentEl = el.parentElement
      parentEl.addEventListener('wheel', panzoom.value.zoomWithWheel)
      parentEl.addEventListener('wheel', function (event) {
        if (!event.shiftKey) return
        panzoom.value.zoomWithWheel(event)
      })
    }

    onMounted(() => {
      initPanzoom()
    })

    return {
      DATA_ORG_CHARTS,
      zoomIn,
      zoomOut
    }
  },

  components: {
    OrgChartItem
  }
})
</script>

<style scoped>
.panzoom {
  max-width: 80%;
  border: 1px solid #ccc;
  margin: 0 auto;
}
</style>
