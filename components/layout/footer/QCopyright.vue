<template>
  <section class="q-copyright">
    Feito com
    <q-icon-base height="16px" width="26px">
      <q-icon-heart :animated="true" />
    </q-icon-base>
    pela Quero Educação
  </section>
</template>

<script>
import QIconBase from '~/components/q-icons/QIconBase'
import QIconHeart from '~/components/q-icons/QIconHeart'

export default {
  components: {
    QIconBase,
    QIconHeart
  }
}
</script>

<style lang="scss">
.q-copyright {
  color: $neutral-color-white;
  font-size: $font-size-small;
  padding: $space-l 0;
  text-align: center;
}
</style>
