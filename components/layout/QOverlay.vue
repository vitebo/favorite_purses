<template>
  <div :class="overlayClass" @click="onClick"></div>
</template>

<script>
export default {
  props: {
    showOverlay: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    overlayClass() {
      const className = 'q-overlay'

      const modifier = {}
      modifier[`${className}--show`] = this.showOverlay

      return [className, modifier]
    }
  },
  methods: {
    onClick() {
      this.$emit('clickOnOverlay')
    }
  }
}
</script>

<style lang="scss">
.q-overlay {
  background-color: transparent;
  opacity: 0;
  transition: opacity $transition;
  z-index: 1;

  @include media-breakpoint-down(sm) {
    left: 0;
    top: $header-height;
    position: absolute;
    background-color: $overlay-color;
  }
}

.q-overlay--show {
  opacity: 1;
  width: 100vw;
  height: calc(100vh - #{$header-height});
}
</style>
