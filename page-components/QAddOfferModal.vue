<template>
  <div class="q-add-offer-modal">
    <h3 class="q-add-offer-modal__title">Adicionar bolsa</h3>
    <p class="q-add-offer-modal__description">
      Filtre e adicione as bolsas de seu interesse.
    </p>

    <q-add-offer-form class="q-add-offer-modal__form" />
  </div>
</template>

<script>
import QAddOfferForm from '~/page-components/QAddOfferForm'

export default {
  components: {
    QAddOfferForm
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
