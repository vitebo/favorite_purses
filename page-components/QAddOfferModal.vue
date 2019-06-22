<template>
  <div class="q-add-offer-modal">
    <header>
      <h3 class="q-add-offer-modal__title">Adicionar bolsa</h3>
      <p class="q-add-offer-modal__description">
        Filtre e adicione as bolsas de seu interesse.
      </p>
    </header>
    <q-add-offer-form
      class="q-add-offer-modal__form"
      :cities="cities"
      :courses="courses"
    />
    <q-list-offers :offers="offersWithId" />

    <footer class="q-add-offer-modal__footer">
      <q-button class="q-add-offer-modal__button" variant="secondary">
        Cancelar
      </q-button>
      <q-button class="q-add-offer-modal__button" disabled="true">
        Adicionar bolsa(s)
      </q-button>
    </footer>
  </div>
</template>

<script>
import QAddOfferForm from '~/page-components/QAddOfferForm'
import QListOffers from '~/page-components/QListOffers'

import QButton from '~/components/form/QButton'

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
    cities() {
      return [...new Set(this.offers.map(offer => offer.campus.city))]
    },
    courses() {
      return [...new Set(this.offers.map(offer => offer.course.name))]
    },
    offersWithId() {
      return this.offers.map((offer, id) => ({ ...offer, id }))
    }
  },
  async mounted() {
    this.offers = await this.$axios.$get(
      'https://testapi.io/api/redealumni/scholarships'
    )
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
}

.q-add-offer-modal__button {
  margin-left: $space-m;
}
</style>
