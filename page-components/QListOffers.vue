<template>
  <section>
    <header>
      <strong>Resultado:</strong>
      <p>
        Ordenar por
        <a href="#">Nome da faculdade</a>
      </p>
    </header>
    <ul>
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

<style lang="scss"></style>
