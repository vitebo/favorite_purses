<template>
  <div>
    <h3>Adicionar bolsa</h3>
    <p>Filtre e adicione as bolsas de seu interesse.</p>

    <div>
      <label>Selecione sua cidade</label>
      <q-select name="city-options" :options="cityOptions" />
    </div>

    <div>
      <label>Selecione o curso de sua preferência</label>
      <q-select name="city-options" :options="cityOptions" />
    </div>
  </div>
</template>

<script>
import QSelect from '~/components/form/QSelect'

export default {
  components: {
    QSelect
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
