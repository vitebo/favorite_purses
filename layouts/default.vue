<template>
  <div class="l-default">
    <div>
      <q-header />
      <q-menu-bar />
    </div>
    <div>
      <nuxt />
    </div>
    <q-footer />
  </div>
</template>

<script>
import QHeader from '~/components/layout/header/QHeader.vue'
import QMenuBar from '~/components/layout/menu/QMenuBar.vue'
import QFooter from '~/components/layout/footer/QFooter.vue'

export default {
  components: {
    QHeader,
    QMenuBar,
    QFooter
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
  font-size: 16px;
}

body {
  background-color: $neutral-color-gray-lightest;
  color: $neutral-color-black;
  font-size: 1rem;
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

.l-default {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
}
</style>
