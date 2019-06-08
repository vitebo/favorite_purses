<template>
  <a :href="url" class="q-item">
    <q-icon-base :icon-name="text" class="q-item__icon">
      <slot />
    </q-icon-base>
    <span class="q-item__text">
      {{ text }}
    </span>
  </a>
</template>

<script>
import QIconBase from '~/components/QIconBase'

export default {
  components: {
    QIconBase
  },
  props: {
    text: {
      type: String,
      default: 'item'
    },
    url: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style lang="scss">
.q-item {
  color: $primary-color-dark;
  text-decoration: none;
}

.q-item__icon {
  display: block;
  margin: 0 auto;
}

.q-item__text {
  font-size: $font-size-small;
  font-weight: $font-weight-bold;
}
</style>
