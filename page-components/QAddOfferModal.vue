<template>
  <div>
    <h3>Adicionar bolsa</h3>
    <p>Filtre e adicione as bolsas de seu interesse.</p>

    <label>
      Selecione sua cidade
      <q-select name="city-options" :options="cityOptions" />
    </label>

    <label>
      Selecione o curso de sua preferência
      <q-select name="city-options" :options="cityOptions" />
    </label>

    <h4>Como você pretender estudar?</h4>

    <q-checkbox name="presential" text="presencial" />
  </div>
</template>

<script>
import QSelect from '~/components/form/QSelect'
import QCheckbox from '~/components/form/QCheckbox'

export default {
  components: {
    QSelect,
    QCheckbox
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
