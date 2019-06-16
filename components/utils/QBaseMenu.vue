<template>
  <div class="q-base-menu">
    <q-overlay
      v-if="overlay"
      :show-overlay="isTheVisibleMenu"
      @clickOnOverlay="closeMenu"
    />
    <button class="q-base-menu__target" @click="toggleMenu">
      <slot name="target" />
    </button>
    <div :class="menuContentClass">
      <slot />
    </div>
  </div>
</template>

<script>
import QOverlay from './QOverlay'

export default {
  components: {
    QOverlay
  },
  props: {
    theme: {
      type: String,
      default: 'primary'
    },
    overlay: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isTheVisibleMenu: false
    }
  },
  computed: {
    menuContentClass() {
      const className = `q-base-menu__content-${this.theme}`

      const modifier = {}
      modifier[`${className}--show`] = this.isTheVisibleMenu

      return [className, modifier]
    }
  },
  methods: {
    toggleMenu() {
      this.isTheVisibleMenu = !this.isTheVisibleMenu
      this.$emit('change', this.isTheVisibleMenu)
    },
    closeMenu() {
      this.isTheVisibleMenu = false
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.q-base-menu__target {
  background: transparent;
  border: none;
  padding: 0;

  @include media-breakpoint-up(sm) {
    display: none;
  }
}

.q-base-menu__content-primary,
.q-base-menu__content-secondary {
  @include media-breakpoint-down(sm) {
    left: 0;
    position: absolute;
    transition: transform $transition;
  }
}

.q-base-menu__content-primary {
  @include media-breakpoint-down(sm) {
    transform: scaleY(0);
    transform-origin: top;
    width: 100%;
  }
}

.q-base-menu__content-primary--show {
  @include media-breakpoint-down(sm) {
    transform: scaleY(1);
  }
}

.q-base-menu__content-secondary {
  z-index: 1;

  @include media-breakpoint-down(sm) {
    top: $header-height;
    height: calc(100vh - #{$header-height});
    transform: translateX(-100%);
  }
}

.q-base-menu__content-secondary--show {
  transform: translateX(0);
}
</style>
