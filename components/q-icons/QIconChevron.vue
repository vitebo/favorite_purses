<template>
  <g :class="qChevronClass">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path
        d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
      />
    </svg>
  </g>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'bottom'
    }
  },
  computed: {
    qChevronClass() {
      const className = 'q-chevron'
      const modifier = `${className}--${this.direction}`

      return [className, modifier]
    }
  }
}
</script>

<style lang="scss">
.q-chevron {
  transform-origin: center;
  transition: transform $transition;
}

.q-chevron--right {
  transform: rotate(270deg);
}

.q-chevron--top {
  transform: rotate(180deg);
}

.q-chevron--left {
  transform: rotate(90deg);
}

.q-chevron--bottom {
  transform: rotate(0deg);
}
</style>
