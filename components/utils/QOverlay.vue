<template>
  <transition
    enter-active-class="q-overlay--opening"
    leave-active-class="q-overlay--closing"
    @before-enter="removeBodyScroll"
    @after-leave="addBodyScroll"
  >
    <div v-if="showOverlay" class="q-overlay" @click="clickOnOverlay"></div>
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
$overlay-animation-time: 400ms;

.q-overlay {
  background-color: $overlay-color;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
}

.q-overlay--opening {
  animation: open-overlay $overlay-animation-time;
}

.q-overlay--closing {
  animation: open-overlay $overlay-animation-time reverse;
}

.q-overlay__body {
  overflow-y: hidden;
}

@keyframes open-overlay {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
