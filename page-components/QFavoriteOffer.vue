<template>
  <q-card class="q-favorite-offer">
    {{ offer.university.name }}
  </q-card>
</template>

<script>
import QCard from '~/components/utils/QCard'

export default {
  components: {
    QCard
  },
  props: {
    offer: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss">
.q-favorite-offer {
  height: 100%;
}
</style>
