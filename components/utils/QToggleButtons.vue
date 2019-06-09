<template>
  <div class="q-toggle-buttons">
    <button
      v-for="item in items"
      :key="item.value"
      :class="getItemClass(item)"
      @click="toggle(item)"
    >
      {{ item.text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [{ text: '', value: null, default: false }]
      }
    }
  },
  data() {
    return {
      activeItem: null
    }
  },
  created() {
    this.activeItem = this.items.find(item => item.default)
  },
  methods: {
    toggle(item) {
      this.activeItem = item
      this.$emit('toggle', this.activeItem)
    },
    getItemClass(item) {
      const className = 'q-toggle-buttons__button'

      const modifier = {}
      modifier[`${className}--active`] = item === this.activeItem

      return [className, modifier]
    }
  }
}
</script>

<style lang="scss">
.q-toggle-buttons {
  display: flex;
  width: inherit;

  @include media-breakpoint-down(sm) {
    flex-direction: column;
  }
}

.q-toggle-buttons__button {
  color: $primary-color-dark;
  cursor: pointer;
  border: 1px solid $primary-color-dark;
  background-color: transparent;
  font-weight: $font-weight-bold;
  font-size: $font-size-normal;
  padding: $space-s $space-st;
  transition-property: color, background-color;
  transition: $transition;

  @include media-breakpoint-down(sm) {
    padding: $space-m $space-st;

    & + & {
      border-top: none;
    }

    &:first-child {
      border-top-left-radius: $space-xs;
      border-top-right-radius: $space-xs;
    }

    &:last-child {
      border-bottom-right-radius: $space-xs;
      border-bottom-left-radius: $space-xs;
    }
  }

  @include media-breakpoint-up(sm) {
    & + & {
      border-left: none;
    }

    &:first-child {
      border-top-left-radius: $space-xs;
      border-bottom-left-radius: $space-xs;
    }

    &:last-child {
      border-top-right-radius: $space-xs;
      border-bottom-right-radius: $space-xs;
    }
  }

  &:hover {
    background-color: $neutral-color-gray-lighter;
  }
}

.q-toggle-buttons__button--active {
  background-color: $primary-color-dark;
  color: $neutral-color-white;

  &:hover {
    background-color: $primary-color-dark;
  }
}
</style>
