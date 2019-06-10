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
      <q-card class="page__card">
        <div>
          <q-icon-base height="64px" width="64px" class="page__card-icon">
            <q-icon-plus-circle />
          </q-icon-base>
          <h2 class="page__card-title">Adicionar bolsa</h2>
          <p class="page__card-text">
            Clique para adicionar bolsas de cursos do seu interesse
          </p>
        </div>
      </q-card>
    </main>
  </div>
</template>

<script>
import QBreadcrumb from '~/components/utils/QBreadcrumb'
import QToggleButtons from '~/components/utils/QToggleButtons'
import QCard from '~/components/utils/QCard'
import QIconPlusCircle from '~/components/q-icons/QIconPlusCircle'
import QIconBase from '~/components/q-icons/QIconBase'

export default {
  components: {
    QBreadcrumb,
    QToggleButtons,
    QCard,
    QIconPlusCircle,
    QIconBase
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
  margin-top: $space-st;
  margin-bottom: $space-st;
}

.page__card {
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 400px;
  display: flex;
  transition: width $transition;
  width: 100%;

  @include media-breakpoint-up(sm) {
    width: 280px;
  }
}

.page__card-icon {
  color: $primary-color;
  margin-bottom: $space-st;
}

.page__card-title {
  margin: 0;
  font-size: rem(20);
}

.page__card-text {
  margin: 0;
}
</style>
