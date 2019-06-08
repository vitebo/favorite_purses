<template>
  <div class="q-helper-menu-item">
    <q-icon-base class="q-helper-menu-item__icon">
      <slot />
    </q-icon-base>
    <div class="q-helper-menu-item__info">
      <strong :class="mainTextClass">{{ mainText }}</strong>
      <span v-if="secondaryText" class="q-helper-menu-item__text">
        {{ secondaryText }}
      </span>
    </div>
  </div>
</template>

<script>
import QIconBase from '~/components/QIconBase'

export default {
  components: {
    QIconBase
  },
  props: {
    mainText: {
      type: String,
      default: ''
    },
    secondaryText: {
      type: [String, Boolean],
      default: false
    }
  },
  computed: {
    mainTextClass() {
      return [
        'q-helper-menu-item__text',
        { 'q-helper-menu-item__text--highlight': this.hasSecondaryText }
      ]
    },
    hasSecondaryText() {
      return this.secondaryText
    }
  }
}
</script>

<style lang="scss">
.q-helper-menu-item {
  align-items: center;
  display: flex;
  padding: $space-s;
}

.q-helper-menu-item__icon {
  color: $primary-color-dark;
  margin-right: $space-s;
}

.q-helper-menu-item__info {
  display: flex;
  flex-direction: column;
}

.q-helper-menu-item__text {
  font-weight: $font-weight-normal;
}

.q-helper-menu-item__text--highlight {
  font-weight: $font-weight-bold;
}
</style>
