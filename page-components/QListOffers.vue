<template>
  <section class="q-list-offers">
    <header class="q-list-offers__header">
      <strong>Resultado:</strong>
      <p class="q-list-offers__order-by">
        Ordenar por
        <button class="q-list-offers__university-name" @click="toggleOrder">
          Nome da faculdade
          <q-icon-base height="12px" width="12px">
            <q-icon-chevron :direction="arrowDirection" />
          </q-icon-base>
        </button>
      </p>
    </header>
    <ul class="q-list-offers__list">
      <transition-group
        enter-active-class="q-list-offers__item--opening"
        leave-active-class="q-list-offers__item--closing"
      >
        <li
          v-for="offer in filteredOffers"
          :key="offer.id"
          class="q-list-offers__item"
        >
          <q-offer-item :offer="offer" />
        </li>
      </transition-group>
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
  data() {
    return {
      orderBy: 'ASC'
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
      const offers = this.offers
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
        .sort((a, b) =>
          a.university.name.toLowerCase() > b.university.name.toLowerCase()
            ? 1
            : -1
        )

      return this.orderBy === 'ASC' ? offers : offers.reverse()
    },
    arrowDirection() {
      return this.orderBy === 'ASC' ? 'bottom' : 'top'
    }
  },
  beforeDestroy() {
    this.$store.dispatch('offer-filters/reset')
  },
  methods: {
    toggleOrder() {
      this.orderBy = this.orderBy === 'ASC' ? 'DESC' : 'ASC'
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
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: rem(16);
  font-weight: $font-weight-bold;
  color: $primary-color-dark;
  transition: color $transition;
  text-decoration: none;

  &:hover {
    color: $primary-color;
  }

  &:focus {
    outline: none;
  }
}

.q-list-offers__list {
  list-style: none;
  margin: 0 ($card-padding * -1);
  overflow-y: auto;
  height: 300px;
  padding-left: 0;
}

.q-list-offers__item--opening {
  animation: open-offer-item 500ms;
}

.q-list-offers__item--closing {
  animation: open-offer-item 500ms reverse;
}

@keyframes open-offer-item {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
