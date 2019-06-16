<template>
  <div :class="overlayClass" @click="onClick">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    showOverlay: {
      type: Boolean,
      default: false
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.showOverlay ? 'q-overlay__body' : ''
      }
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
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity $transition;

  @include media-breakpoint-down(sm) {
    top: $header-height;
  }
}

.q-overlay--show {
  background-color: $overlay-color;
  height: 100%;
  opacity: 1;
  width: 100%;
  z-index: 1;
}

.q-overlay__body {
  overflow-y: hidden;
}
</style>
