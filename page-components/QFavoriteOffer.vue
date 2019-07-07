<template>
  <q-card class="q-favorite-offer">
    <header>
      <figure class="q-favorite-offer__figure">
        <img class="q-favorite-offer__image" :src="offer.university.logo_url" />
      </figure>
      <h5 class="q-favorite-offer__title">{{ offer.university.name }}</h5>
      <a class="q-favorite-offer__link" href="#">{{ offer.course.name }}</a>
      <q-score class="q-favorite-offer_score" />
      <hr class="q-favorite-offer__divider" />
    </header>
    <article>
      <h5 class="q-favorite-offer__title">
        {{ offer.course.kind }} - {{ offer.course.shift }}
      </h5>
      <p class="q-favorite-offer__start-date">
        Início das aulas em: {{ offer.start_date }}
      </p>
      <hr class="q-favorite-offer__divider" />

      <h6 class="q-favorite-offer__sub-title">
        Mensalidade com o Quero Bolsa:
      </h6>
      <span class="q-favorite-offer__full-price"
        >R$ {{ offer.full_price }}</span
      >
      <p class="q-favorite-offer__discount">
        <strong class="q-favorite-offer__discount-price">
          R$ {{ offer.price_with_discount }}
        </strong>
        /mês
      </p>
    </article>
    <footer class="q-favorite-offer__footer">
      <q-button
        class="q-favorite-offer__button"
        variant="secondary"
        size="small"
        @onClick="removeFavoriteOffer"
        >Excluir</q-button
      >
      <q-button class="q-favorite-offer__button" size="small"
        >Ver oferta</q-button
      >
    </footer>
  </q-card>
</template>

<script>
import QCard from '~/components/utils/QCard'
import QScore from '~/components/utils/QScore'
import QButton from '~/components/form/QButton'

export default {
  components: {
    QCard,
    QScore,
    QButton
  },
  props: {
    offer: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    removeFavoriteOffer() {
      this.$store.dispatch('favorite-offers/removeOffer', this.offer)
    }
  }
}
</script>

<style lang="scss">
.q-favorite-offer {
  height: 100%;
  text-align: center;
}

.q-favorite-offer__figure {
  margin: 0;
  text-align: center;
}

.q-favorite-offer__image {
  max-height: 40px;
}

.q-favorite-offer__title {
  text-transform: uppercase;
  font-size: $font-size-small;
  font-weight: $font-weight-bold;
  margin: 0;
  margin-top: $space-st;
}

.q-favorite-offer__sub-title {
  font-size: $font-size-small;
  font-weight: $font-weight-bold;
  margin: 0;
  margin-top: $space-st;
}

.q-favorite-offer__link {
  color: $primary-color-dark;
  display: inline-block;
  font-weight: $font-weight-bold;
  text-decoration: none;
  margin-top: $space-s;
}

.q-favorite-offer_score {
  margin-top: $space-m;
}

.q-favorite-offer__divider {
  border: 1px solid $neutral-color-gray-lighter;
  margin: $space-m 0;
}

.q-favorite-offer__start-date {
  font-size: $font-size-small;
  margin: 0;
  margin-top: $space-s;
}

.q-favorite-offer__full-price {
  display: inline-block;
  font-size: $font-size-small;
  text-decoration: line-through;
  margin-top: $space-m;
}

.q-favorite-offer__discount {
  font-size: $font-size-small;
  margin-bottom: 0;
  margin-top: 0;
}

.q-favorite-offer__discount-price {
  color: $positive-color;
  font-size: $font-size-large;
  font-weight: $font-weight-bold;
}

.q-favorite-offer__footer {
  display: flex;
  justify-content: center;
  margin-top: $space-m;
}

.q-favorite-offer__button {
  margin: 0 $space-xs;
}
</style>
