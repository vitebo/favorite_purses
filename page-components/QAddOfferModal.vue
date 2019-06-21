<template>
  <div>
    <h3>Adicionar bolsa</h3>
    <p>Filtre e adicione as bolsas de seu interesse.</p>

    <q-select
      label="Selecione sua cidade"
      name="city-options"
      :options="cityOptions"
    />

    <q-select
      label="Selecione o curso de sua preferência"
      name="city-options"
      :options="cityOptions"
    />

    <h4>Como você pretender estudar?</h4>

    <q-checkbox name="kind" text="presencial" value="presential" />

    <q-checkbox name="kind" text="A distância" value="ead" />

    <h4>Até quanto pode pagar?</h4>

    <q-input-range
      name="until-when-can-you-pay"
      label="R$"
      :min="0"
      :max="10000"
      value="10000"
    />
  </div>
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

<style lang="scss"></style>
