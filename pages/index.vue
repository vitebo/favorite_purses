<template>
  <div class="page">
    <header>
      <q-breadcrumb
        :items="breadcrumbItems"
        :current="pageName"
        class="page__breadcrumb"
      />

      <h1 class="page__title">Bolsas favoritas</h1>
      <p class="page__description">
        Adicione bolsas de cursos e faculdades do seu interesse e receba
        atualizações com as melhores ofertas disponíveis.
      </p>

      <div class="page__toggle-buttons">
        <q-toggle-buttons :items="semestersFilter" />
      </div>
    </header>
    <main class="page__main">
      <q-add-offer-card @addOffer="openModal" />
      <q-base-modal :show-modal="showModal" @clickToCloseModal="close">
        <q-add-offer-modal />
      </q-base-modal>
    </main>
  </div>
</template>

<script>
import QBreadcrumb from '~/components/utils/QBreadcrumb'
import QToggleButtons from '~/components/utils/QToggleButtons'
import QBaseModal from '~/components/utils/QBaseModal'

import QAddOfferCard from '~/page-components/QAddOfferCard'
import QAddOfferModal from '~/page-components/QAddOfferModal'

export default {
  components: {
    QBreadcrumb,
    QToggleButtons,
    QAddOfferCard,
    QBaseModal,
    QAddOfferModal
  },
  data() {
    return {
      breadcrumbItems: [
        { text: 'Home', url: '/' },
        { text: 'Minha conta', url: '/account' }
      ],
      pageName: 'Bolsas Favoritas',
      semestersFilter: [
        { text: 'Todos os semestres', value: 'ALL', default: true },
        { text: '2º semestre 2019', value: 'SECOND_2019', default: false },
        { text: '1º semestre 2020', value: 'FIRST_2020', default: false }
      ],
      showModal: false
    }
  },
  methods: {
    openModal() {
      this.showModal = !this.showModal
    },
    close() {
      this.showModal = false
    }
  }
}
</script>

<style lang="scss">
.page {
  @extend %container;
}

.page__breadcrumb {
  margin-top: $space-m;
}

.page__title {
  font-size: 2.3rem;
  line-height: 1;
  margin-bottom: 0;
  margin-top: $space-st;
}

.page__description {
  margin-bottom: 0;
  margin-top: $space-s;
}

.page__toggle-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: $space-l;

  @include media-breakpoint-down(sm) {
    width: 100%;
  }
}

.page__main {
  margin-bottom: $space-st;
  margin-top: $space-st;
}
</style>
