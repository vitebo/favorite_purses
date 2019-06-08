<template>
  <div class="q-side-menu">
    <div :class="overlayClass" @click="closeMenu"></div>
    <button class="q-side-menu__target" @click="toggleMenu">
      <slot name="target">
        Target
      </slot>
    </button>
    <div :class="menuContentClass">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTheVisibleMenu: false
    }
  },
  computed: {
    overlayClass() {
      return [
        'q-side-menu__overlay',
        { 'q-side-menu__overlay--show': this.isTheVisibleMenu }
      ]
    },
    menuContentClass() {
      return [
        'q-side-menu__content',
        { 'q-side-menu__content--show': this.isTheVisibleMenu }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isTheVisibleMenu = !this.isTheVisibleMenu
    },
    closeMenu() {
      this.isTheVisibleMenu = false
    }
  }
}
</script>

<style lang="scss">
.q-side-menu__overlay,
.q-side-menu__content {
  position: absolute;
  height: calc(100vh - #{$header-height});
  left: 0;
  top: $header-height;
}

.q-side-menu__overlay {
  background-color: $overlay-color;
  opacity: 0;
  transition: opacity $transition;
  width: 100vw;
}

.q-side-menu__overlay--show {
  opacity: 1;
}

.q-side-menu__target {
  background-color: transparent;
  border: none;
}

.q-side-menu__content {
  background-color: $neutral-color-gray-lightest;
  box-shadow: $high-box-shadow;
  padding: $space-s $space-st $space-s 0;
  transform: translateX(-100%);
  transition: transform $transition;

  &::before {
    $size: 10px;

    @include triangle($size, 'bottom', $neutral-color-gray-lightest);

    left: $space-st;
    position: absolute;
    top: $size * -2;
  }
}

.q-side-menu__content--show {
  transform: translateX(0);
}
</style>
