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

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  background-color: $neutral-color-gray-lightest;
  color: $neutral-color-black;
  font-size: 1.6rem;
  font-weight: $font-weight-normal;
  line-height: 1.5;
  margin: 0;
}

body,
button,
input,
select,
textarea {
  font-family: $font-family;
}
</style>
