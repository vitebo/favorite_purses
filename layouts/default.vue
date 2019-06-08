<template>
  <div>
    <q-header />
    <q-menu-bar />
    <nuxt />
  </div>
</template>

<script>
import QHeader from '~/components/layout/header/QHeader.vue'
import QMenuBar from '~/components/layout/menu/QMenuBar.vue'

export default {
  components: {
    QHeader,
    QMenuBar
  }
}
</script>
