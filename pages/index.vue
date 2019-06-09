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
    </header>
  </div>
</template>

<script>
import QBreadcrumb from '~/components/utils/QBreadcrumb'

export default {
  components: {
    QBreadcrumb
  },
  data() {
    return {
      breadcrumbItems: [
        { text: 'Home', url: '/' },
        { text: 'Minha conta', url: '/account' }
      ],
      pageName: 'Bolsas Favoritas'
    }
  }
}
</script>

<style lang="scss">
.page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 $space-m;
}

.page__breadcrumb {
  margin-top: $space-m;
}

.page__title {
  margin-top: $space-m;
  margin-bottom: 0;
}

.page__description {
  margin-top: $space-s;
  margin-bottom: 0;
}
</style>
