<template>
  <a href="#" class="q-add-offer" @click="addOffer">
    <q-card :hover-animation="true" class="q-add-offer__card">
      <div>
        <q-icon-base height="64px" width="64px" class="q-add-offer__icon">
          <q-icon-plus-circle />
        </q-icon-base>
        <h2 class="q-add-offer__title">Adicionar bolsa</h2>
        <p class="q-add-offer__text">
          Clique para adicionar bolsas de cursos do seu interesse
        </p>
      </div>
    </q-card>
  </a>
</template>

<script>
import QCard from '~/components/utils/QCard'
import QIconPlusCircle from '~/components/q-icons/QIconPlusCircle'
import QIconBase from '~/components/q-icons/QIconBase'

export default {
  components: {
    QCard,
    QIconPlusCircle,
    QIconBase
  },
  methods: {
    addOffer() {
      this.$store.commit('page/openModal')
    }
  }
}
</script>

<style lang="scss">
.q-add-offer {
  color: $neutral-color-black;
  text-decoration: none;
}

.q-add-offer__card {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 400px;
  text-align: center;
}

.q-add-offer__icon {
  color: $primary-color;
  margin-bottom: $space-st;
}

.q-add-offer__title {
  font-size: rem(20);
  margin: 0;
}

.q-add-offer__text {
  margin: 0;
}
</style>
