<template>
  <transition name="q-overlay-">
    <div v-if="showOverlay" class="q-overlay" @click="clickOnOverlay">
      <slot />
    </div>
  </transition>
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
  methods: {
    clickOnOverlay() {
      this.$emit('clickOnOverlay')
    }
  }
}
</script>

<style lang="scss">
.q-overlay {
  background-color: $overlay-color;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  transition: opacity $transition;

  @include media-breakpoint-down(sm) {
    top: $header-height;
  }
}

.q-overlay--enter,
.q-overlay--leave-to {
  opacity: 0;
}

.q-overlay__body {
  overflow-y: hidden;
}
</style>
