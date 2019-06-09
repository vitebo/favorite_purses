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
  </div>
</template>

<script>
import QBreadcrumb from '~/components/utils/QBreadcrumb'
import QToggleButtons from '~/components/utils/QToggleButtons'

export default {
  components: {
    QBreadcrumb,
    QToggleButtons
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
  margin-bottom: 0;
  margin-top: $space-st;
  line-height: 1;
}

.page__description {
  margin-bottom: 0;
  margin-top: $space-s;
}

.page__toggle-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: $space-st;

  @include media-breakpoint-down(sm) {
    width: 100%;
  }
}
</style>
