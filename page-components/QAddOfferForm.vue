<template>
  <form class="q-add-offer-form">
    <q-select
      label="Selecione sua cidade"
      name="city-options"
      :options="cityOptions"
      class="q-add-offer-form__group"
    />

    <q-select
      label="Selecione o curso de sua preferência"
      name="city-options"
      :options="cityOptions"
      class="q-add-offer-form__group"
    />

    <div class="q-add-offer-form__group">
      <h4 class="q-add-offer-form__legend">
        Como você pretender estudar?
      </h4>
      <div class="q-add-offer-form__kind-options">
        <q-checkbox
          class="q-add-offer-form__kind-check"
          name="kind"
          text="presencial"
          value="presential"
        />
        <q-checkbox
          class="q-add-offer-form__kind-check"
          name="kind"
          text="A distância"
          value="ead"
        />
      </div>
    </div>

    <div class="q-add-offer-form__group">
      <h4 class="q-add-offer-form__legend">Até quanto pode pagar?</h4>
      <q-input-range
        name="until-when-can-you-pay"
        label="R$"
        :min="0"
        :max="10000"
        value="10000"
      />
    </div>
  </form>
</template>

<script>
import QSelect from '~/components/form/QSelect'
import QCheckbox from '~/components/form/QCheckbox'
import QInputRange from '~/components/form/QInputRange'

export default {
  components: {
    QSelect,
    QCheckbox,
    QInputRange
  },
  data() {
    return {
      cityOptions: [
        { text: 'São José dos Campos', value: 'sjc' },
        { text: 'São Paulo', value: 'sp' },
        { text: 'Guarulhos', value: 'guarulhos' },
        { text: 'Campinas', value: 'caminas' }
      ]
    }
  }
}
</script>

<style lang="scss">
.q-add-offer-form {
  @extend %row;
  display: flex;
  flex-wrap: wrap;
  margin-top: $space-st;
}

.q-add-offer-form__legend {
  color: $neutral-color-black;
  font-size: rem(13);
  font-weight: $font-weight-bold;
  line-height: rem(20);
  text-transform: uppercase;
  margin: 0;
}

.q-add-offer-form__group {
  flex: 1 0 50%;
  padding: $container-gap;
  padding-top: 0;
  padding-bottom: $space-st;
  min-width: 350px;
}

.q-add-offer-form__kind-options {
  margin-top: $space-l;
}

.q-add-offer-form__kind-check {
  margin-left: $space-m;

  &:first-child {
    margin-left: 0;
  }
}
</style>
