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
    <q-list-offers :offers="offers" />
  </div>
</template>

<script>
import QAddOfferForm from '~/page-components/QAddOfferForm'
import QListOffers from '~/page-components/QListOffers'

export default {
  components: {
    QAddOfferForm,
    QListOffers
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
      return [...new Set(this.offers.map(offer => offer.course))]
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
</style>
