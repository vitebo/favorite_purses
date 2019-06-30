<template>
  <div class="q-add-offer-modal">
    <header>
      <h3 class="q-add-offer-modal__title">Adicionar bolsa</h3>
      <p class="q-add-offer-modal__description">
        Filtre e adicione as bolsas de seu interesse.
      </p>
    </header>

    <div v-if="hasOffers">
      <q-add-offer-form class="q-add-offer-modal__form" :offers="offers" />
      <q-list-offers :offers="offers" />
    </div>

    <footer class="q-add-offer-modal__footer">
      <q-button class="q-add-offer-modal__button" variant="secondary">
        Cancelar
      </q-button>
      <q-button
        class="q-add-offer-modal__button"
        :disabled="!hasOffersSelected"
      >
        Adicionar bolsa(s)
      </q-button>
    </footer>
  </div>
</template>

<script>
import QAddOfferForm from '~/page-components/QAddOfferForm'
import QListOffers from '~/page-components/QListOffers'

import QButton from '~/components/form/QButton'

import { mapState } from 'vuex'

export default {
  components: {
    QAddOfferForm,
    QListOffers,
    QButton
  },
  data() {
    return {
      offers: []
    }
  },
  computed: {
    ...mapState('offer-filters', {
      selectedOffers: state => state.selectedOffers
    }),
    hasOffers() {
      return this.offers.length > 0
    },
    hasOffersSelected() {
      return this.selectedOffers.length > 0
    }
  },
  async mounted() {
    const offers = await this.$axios.$get(
      'https://testapi.io/api/redealumni/scholarships'
    )

    this.offers = offers.map((offer, id) => ({ ...offer, id }))
  }
}
</script>

<style lang="scss">
.q-add-offer-modal__title {
  margin: 0;
  font-size: rem(23);
}

.q-add-offer-modal__description {
  margin: 0;
}

.q-add-offer-modal__form {
  margin-top: $space-m;
}

.q-add-offer-modal__footer {
  margin-top: $space-st;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.q-add-offer-modal__button {
  flex: 1 0 100%;

  & + & {
    margin-top: $space-m;
  }

  @include media-breakpoint-up(xs) {
    flex: 0 0 auto;

    & + & {
      margin-left: $space-m;
      margin-top: 0;
    }
  }
}
</style>
