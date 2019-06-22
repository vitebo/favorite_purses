<template>
  <article>
    <div>
      <q-checkbox />
      <img :src="offer.university.logo_url" />
      <h6>{{ offer.course.name }}</h6>
      <p>{{ offer.course.level }}</p>
    </div>
    <div>
      <p>
        Bolsa de <strong>{{ offer.discount_percentage }}%</strong>
        <strong>R$ {{ offer.price_with_discount }}/mês</strong>
      </p>
    </div>
  </article>
</template>

<script>
import QCheckbox from '~/components/form/QCheckbox'

export default {
  components: {
    QCheckbox
  },
  props: {
    offer: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss"></style>
