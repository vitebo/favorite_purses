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
import QIconBase from '~/components/q-icons/QIconBase'

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
  display: inline-block;
  text-align: center;
  text-decoration: none;
}

.q-item__icon {
  @include size(22px);
  display: block;
  margin: 0 auto;
}

.q-item__text {
  font-size: $font-size-small;
  font-weight: $font-weight-bold;
}
</style>
