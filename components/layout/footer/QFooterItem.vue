<template>
  <a href="#" class="q-footer-item">
    <q-icon-base>
      <slot />
    </q-icon-base>
    <div>
      <strong>{{ title }}</strong>
      <p>{{ descrition }}</p>
    </div>
    <div>
      <strong>{{ getShortTitle }}</strong>
      <p>{{ getShortDescription }}</p>
    </div>
  </a>
</template>

<script>
import QIconBase from '~/components/q-icons/QIconBase'

export default {
  components: {
    QIconBase
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    shortTitle: {
      type: [String, Boolean],
      default: false
    },
    description: {
      type: [String, Boolean],
      default: false
    },
    shortDescription: {
      type: [String, Boolean],
      default: false
    }
  },
  computed: {
    getShortTitle() {
      return this.shortTitle || this.title
    },
    getShortDescription() {
      return this.shortDescription || this.description
    }
  }
}
</script>

<style lang="scss">
.q-footer-item {
  color: $neutral-color-white;
  text-decoration: none;
}
</style>
