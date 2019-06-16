<template>
  <transition
    enter-active-class="q-overlay--opening-animation"
    leave-active-class="q-overlay--closing-animation"
    @before-enter="removeBodyScroll"
    @after-leave="addBodyScroll"
  >
    <div v-if="showOverlay" class="q-overlay" @click="clickOnOverlay">
      <div class="q-overlay__slot">
        <slot />
      </div>
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
        class: this.hideBodyScroll ? 'q-overlay__body' : ''
      }
    }
  },
  data() {
    return {
      hideBodyScroll: this.showOverlay
    }
  },
  methods: {
    clickOnOverlay() {
      this.$emit('clickOnOverlay')
    },
    removeBodyScroll() {
      this.hideBodyScroll = true
    },
    addBodyScroll() {
      this.hideBodyScroll = false
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

  @include media-breakpoint-down(sm) {
    top: $header-height;
  }
}

.q-overlay__slot {
  display: flex;
  align-items: center;
  height: 100%;
}

.q-overlay__body {
  overflow-y: hidden;
}

.q-overlay--opening-animation {
  animation: open-overlay 800ms;

  & > .q-overlay__slot {
    animation: open-overlay-slot 800ms;
  }
}

.q-overlay--closing-animation {
  animation: open-overlay 800ms reverse;

  & > .q-overlay__slot {
    animation: open-overlay-slot 800ms reverse;
  }
}

@keyframes open-overlay {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}

@keyframes open-overlay-slot {
  0% {
    transform: translateY(100vh);
  }

  50% {
    transform: translateY(100vh);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
