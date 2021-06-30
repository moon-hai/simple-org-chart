<template>
  <div
    :class="`org-item-wrapper org-item-wrapper--${
      orgItem.childrens ? orgItem.childrens.length : '0'
    } org-item-wrapper--${isHorizontal ? 'horizontal' : 'vertical'}`"
  >
    <div :class="`org-item bg-${bgColor}`">
      <h3 class="text-c4-b text-20 font-semibold">{{ orgItem.name }}</h3>
      <p class="text-c4-c font-15 mt-2">
        Số lượng tài khoản: {{ orgItem.members ? orgItem.members.length : 0 }}
      </p>

      <span @click="confirm('edit')" class="org-item__action org-item__action--edit">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
      </span>
      <span
        @click="confirm('remove')"
        class="org-item__action org-item__action--remove"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </span>

      <span @click="confirm('add')" class="org-item__action org-item__action--add">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
          <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
      </span>
    </div>

    <!-- recursive to render all node inside -->
    <div v-if="orgItem.childrens && orgItem.childrens.length" class="org-item-wrapper__inner">
      <org-chart-item v-for="child in orgItem.childrens" :key="child.id" :org-item="child" :axis="axis" />
    </div>
    <!-- recursive to render all node inside -->
  </div>
</template>

<script>
import { computed, defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'OrgChartItem',

  props: {
    orgItem: {
      type: Object,
      require: true
    },

    axis: {
      type: String,
      default: 'vertical'
    }
  },

  setup(props) {
    const { axis } = toRefs(props)

    const BG_COLORS = [
      'red-50',
      'red-200',
      'green-300',
      'amber-50',
      'red-100',
      'amber-200',
      'blue-100',
      'amber-100',
      'blue-200',
      'green-200',
      'amber-300',
      'blue-50',
      'red-300',
      'green-100',
      'blue-300',
      'green-50',
    ]

    const bgColor = computed(() => {
      const pos = Math.floor(Math.random() * BG_COLORS.length - 1) + 1;
      return BG_COLORS[pos];
    })

    const isHorizontal = computed(() => axis.value === 'horizontal')

    return {
      isHorizontal,
      bgColor
    }
  }
})
</script>

<style scoped>
.org-item-wrapper {
  @apply relative;
  @apply flex items-center justify-start flex-nowrap;
}

.org-item-wrapper__inner {
  @apply relative;
}

.org-item-wrapper__inner .org-item-wrapper::before {
  content: '';
  @apply absolute;
  @apply border border-blue-300 border-solid;
}

.org-item-wrapper.org-item-wrapper--1 > .org-item-wrapper__inner > .org-item-wrapper::before {
  display: none;
}

.org-item-wrapper__inner::after,
.org-item-wrapper__inner .org-item::before {
  content: '';
  @apply absolute;
  @apply border border-blue-300 border-solid;
}

.org-item-wrapper--ceo {
  min-height: 500px;
}

.org-item {
  width: 220px;
  min-width: 220px;
  @apply p-6;
  @apply rounded-lg;
  @apply relative;
}

.org-item__action >>> svg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.org-item__action {
  width: 36px;
  height: 36px;
  border: 2px solid white;
  @apply overflow-hidden rounded-full;
  @apply cursor-pointer;
  @apply absolute z-40;
}

.org-item__action:hover {
  transform: scale(1.1);
}

.org-item__action--edit,
.org-item__action--remove {
  left: -18px;
}

.org-item__action--edit {
  top: 10px;
  @apply bg-blue-400;
}

.org-item__action--remove {
  bottom: 10px;
  @apply bg-red-400;
}

.org-item__action--add {
  right: -18px;
  top: 50%;
  transform: translateY(-50%);
  @apply bg-green-400;
  @apply absolute;
}

.org-item__action--add:hover,
.org-item--ceo .org-item__action--edit:hover {
  transform: scale(1.1) translateY(-50%);
}

.org-item--ceo .org-item__action--edit {
  top: 50%;
  transform: translateY(-50%);
}

/* vertical */

.org-item-wrapper--vertical {
  @apply px-12 py-3;
}

.org-item-wrapper--vertical .org-item-wrapper__inner {
  @apply px-10;
}

.org-item-wrapper__inner .org-item-wrapper--vertical::before {
  width: 1px;
  height: 100%;
  @apply left-0;
}

.org-item-wrapper__inner .org-item-wrapper--vertical:first-child::before,
.org-item-wrapper__inner .org-item-wrapper--vertical:last-child::before {
  height: 50%;
}

.org-item-wrapper__inner .org-item-wrapper--vertical:first-child::before {
  top: 50%;
}

.org-item-wrapper__inner .org-item-wrapper--vertical + .org-item-wrapper--vertical::before {
  top: 0;
}

.org-item-wrapper--vertical .org-item-wrapper__inner::after,
.org-item-wrapper--vertical .org-item-wrapper__inner .org-item::before {
  height: 1px;
  transform: translateY(-50%);
  @apply top-2/4;
}

.org-item-wrapper--vertical .org-item-wrapper__inner .org-item::before {
  left: -3rem;
  width: 3rem;
}

.org-item-wrapper--vertical .org-item-wrapper__inner::after {
  left: 0;
  width: 2.5rem;
}

/* horizontal */

.org-item-wrapper--horizontal {
  @apply flex-col;
  @apply p-12;
}

.org-item-wrapper--horizontal .org-item {
  height: 140px;
  min-height: 140px;
  @apply flex flex-col justify-center;
}

.org-item-wrapper--horizontal .org-item-wrapper__inner {
  @apply py-10;
  @apply flex;
}

.org-item-wrapper__inner .org-item-wrapper--horizontal::before {
  height: 1px;
  width: 100%;
  @apply top-0;
}

.org-item-wrapper__inner .org-item-wrapper--horizontal:first-child::before,
.org-item-wrapper__inner .org-item-wrapper--horizontal:last-child::before {
  width: 50%;
}

.org-item-wrapper__inner .org-item-wrapper--horizontal:first-child::before {
  left: 50%;
}

.org-item-wrapper__inner .org-item-wrapper--horizontal:last-child::before {
  left: 0;
}

.org-item-wrapper--horizontal .org-item-wrapper__inner::after,
.org-item-wrapper--horizontal .org-item-wrapper__inner .org-item::before {
  width: 1px;
  transform: translateX(-50%);
  @apply left-2/4;
}

.org-item-wrapper--horizontal .org-item-wrapper__inner .org-item::before {
  top: -3rem;
  height: 3rem;
}

.org-item-wrapper--horizontal .org-item-wrapper__inner::after {
  top: 0;
  height: 2.5rem;
}
</style>
