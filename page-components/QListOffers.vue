<template>
  <section class="q-list-offers">
    <header>
      <strong>Resultado:</strong>
      <p>
        Ordenar por
        <a href="#">Nome da faculdade</a>
      </p>
    </header>
    <ul class="q-list-offers__list">
      <li v-for="offer in offers" :key="offer.start_date">
        <q-offer-item :offer="offer" />
      </li>
    </ul>
  </section>
</template>

<script>
import QOfferItem from '~/page-components/QOfferItem'

export default {
  components: {
    QOfferItem
  },
  props: {
    offers: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.q-list-offers__list {
  list-style: none;
  padding-left: 0;
}
</style>
