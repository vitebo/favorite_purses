<template>
  <section class="q-list-offers">
    <header class="q-list-offers__header">
      <strong>Resultado:</strong>
      <p class="q-list-offers__order-by">
        Ordenar por
        <a class="q-list-offers__university-name" href="#">
          Nome da faculdade
          <q-icon-base height="12px" width="12px">
            <q-icon-chevron direction="bottom" />
          </q-icon-base>
        </a>
      </p>
    </header>
    <ul class="q-list-offers__list">
      <li v-for="offer in filteredOffers" :key="offer.id">
        <q-offer-item :offer="offer" />
      </li>
    </ul>
  </section>
</template>

<script>
import QOfferItem from '~/page-components/QOfferItem'

import QIconChevron from '~/components/q-icons/QIconChevron'
import QIconBase from '~/components/q-icons/QIconBase'

import { mapState } from 'vuex'

export default {
  components: {
    QOfferItem,
    QIconBase,
    QIconChevron
  },
  props: {
    offers: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState('offer-filters', {
      city: state => state.city,
      course: state => state.course,
      kinds: state => state.kinds,
      maxPrice: state => state.maxPrice
    }),
    filteredOffers() {
      return this.offers
        .filter(offer => offer.campus.city === this.city || this.city === null)
        .filter(
          offer => offer.course.name === this.course || this.course === null
        )
        .filter(
          offer =>
            this.kinds.find(kind => kind === offer.course.kind) ||
            this.kinds.length === 0
        )
        .filter(offer => offer.price_with_discount <= this.maxPrice)
    }
  }
}
</script>

<style lang="scss">
.q-list-offers {
  margin-top: $space-m;
}

.q-list-offers__header {
  align-items: center;
  border-bottom: 1px solid $neutral-color-gray-lighter;
  display: flex;
  justify-content: space-between;
  font-weight: $font-weight-bold;
  margin: 0 ($card-padding * -1);
  padding: 0 $card-padding;
}

.q-list-offers__order-by {
  margin: 0;
  padding: $space-m 0;
}

.q-list-offers__university-name {
  color: $primary-color-dark;
  transition: color $transition;
  text-decoration: none;

  &:hover {
    color: $primary-color;
  }
}

.q-list-offers__list {
  list-style: none;
  margin: 0 ($card-padding * -1);
  overflow-y: auto;
  height: 300px;
  padding-left: 0;
}
</style>
