<template>
  <q-base-modal
    class="q-add-offer-modal"
    :show-modal="addOfferModalIsOpen"
    @clickToCloseModal="closeModal"
  >
    <div v-if="hasNetworkingError" class="q-add-offer-modal__network-error">
      <p>Verifique a sua conexão com a internet</p>
    </div>
    <div v-if="!hasNetworkingError">
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
          @onClick="addOffers"
        >
          Adicionar bolsa(s)
        </q-button>
      </footer>
    </div>
  </q-base-modal>
</template>

<script>
import QAddOfferForm from '~/page-components/QAddOfferForm'
import QListOffers from '~/page-components/QListOffers'

import QButton from '~/components/form/QButton'
import QBaseModal from '~/components/utils/QBaseModal'

import { mapState } from 'vuex'

export default {
  components: {
    QAddOfferForm,
    QListOffers,
    QButton,
    QBaseModal
  },
  data() {
    return {
      offers: [],
      showModal: false,
      hasNetworkingError: false
    }
  },
  computed: {
    ...mapState('offer-filters', {
      selectedOffers: state => state.selectedOffers
    }),
    ...mapState('page', {
      addOfferModalIsOpen: state => state.addOfferModalIsOpen
    }),
    hasOffers() {
      return this.offers.length > 0
    },
    hasOffersSelected() {
      return this.selectedOffers.length > 0
    }
  },
  async mounted() {
    try {
      const offers = await this.$axios.$get(
        'https://testapi.io/api/redealumni/scholarships'
      )

      this.offers = offers.map((offer, id) => ({ ...offer, id }))
    } catch (error) {
      this.hasNetworkingError = true
    }
  },
  methods: {
    addOffers() {
      this.$store.dispatch('favorite-offers/addOffers', this.selectedOffers)
      this.closeModal()
    },
    closeModal() {
      this.$store.commit('page/closeModal')
    }
  }
}
</script>

<style lang="scss">
.q-add-offer-modal__network-error {
  color: $neutral-color-gray-pure;
  margin: $space-j 0;
  text-align: center;
}

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
