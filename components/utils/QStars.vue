<template>
  <ul>
    <li>
      <q-icon-base>
        <q-icon-star />
      </q-icon-base>
    </li>
    <li>
      <q-icon-base>
        <q-icon-star />
      </q-icon-base>
    </li>
    <li>
      <q-icon-base>
        <q-icon-star />
      </q-icon-base>
    </li>
    <li>
      <q-icon-base>
        <q-icon-star-half />
      </q-icon-base>
    </li>
    <li>
      <q-icon-base>
        <q-icon-star-empty />
      </q-icon-base>
    </li>
  </ul>
</template>

<script>
import QIconBase from '~/components/q-icons/QIconBase'
import QIconStar from '~/components/q-icons/QIconStar'
import QIconStarEmpty from '~/components/q-icons/QIconStarEmpty'
import QIconStarHalf from '~/components/q-icons/QIconStarHalf'

export default {
  components: {
    QIconBase,
    QIconStar,
    QIconStarHalf,
    QIconStarEmpty
  }
}
</script>

<style lang="scss">
.q-stars
</style>
