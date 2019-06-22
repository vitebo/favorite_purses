<template>
  <div :class="qCardClass">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    hoverAnimation: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    qCardClass() {
      const className = 'q-card'

      const modifier = {}
      modifier[`${className}--animated`] = this.hoverAnimation

      return [className, modifier]
    }
  }
}
</script>

<style lang="scss">
.q-card {
  background-color: $neutral-color-white;
  box-shadow: $low-box-shadow;
  padding: $card-padding;
}

.q-card--animated {
  transition: box-shadow $transition;

  &:hover {
    box-shadow: $high-box-shadow;
  }
}
</style>
