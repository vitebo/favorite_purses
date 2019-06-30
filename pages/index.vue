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
      <ul class="page__offers-list">
        <li class="page__offer">
          <q-add-offer-card />
        </li>
        <li class="page__offer" v-for="offer in offers" :key="offer.id">
          <q-favorite-offer :offer="offer" />
        </li>
      </ul>

      <q-add-offer-modal />
    </main>
  </div>
</template>

<script>
import QBreadcrumb from '~/components/utils/QBreadcrumb'
import QToggleButtons from '~/components/utils/QToggleButtons'

import QAddOfferCard from '~/page-components/QAddOfferCard'
import QAddOfferModal from '~/page-components/QAddOfferModal'
import QFavoriteOffer from '~/page-components/QFavoriteOffer'

import { mapState } from 'vuex'

export default {
  components: {
    QBreadcrumb,
    QToggleButtons,
    QAddOfferCard,
    QAddOfferModal,
    QFavoriteOffer
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
      ]
    }
  },
  computed: {
    ...mapState('favorite-offers', {
      offers: state => state.offers
    })
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

.page__offers-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-left: $space-m * -1;
  margin-right: $space-m * -1;
  padding-left: 0;
}

.page__offer {
  flex: 1 0 calc(25% - (#{$space-m} * 2));
  margin: $space-m;
  min-width: 265px;

  @include media-breakpoint-up(sm) {
    flex-grow: 0;
  }
}
</style>
