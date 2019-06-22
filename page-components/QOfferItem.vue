<template>
  <article class="q-offer-item">
    <q-checkbox class="q-offer-item__checkbox">
      <div class="q-offer-item__info">
        <figure class="q-offer-item__figure">
          <img class="q-offer-item__image" :src="offer.university.logo_url" />
        </figure>
        <div class="q-offer-item__course-info">
          <h6 class="q-offer-item__course-name">{{ offer.course.name }}</h6>
          <p class="q-offer-item__course-kind">{{ offer.course.level }}</p>
        </div>
      </div>
      <div class="q-offer-item__price-info">
        <p class="q-offer-item__discount-percentage">
          Bolsa de
          <strong class="q-offer-item__price">
            {{ offer.discount_percentage }}%
          </strong>
        </p>
        <strong class="q-offer-item__price">
          R$ {{ offer.price_with_discount }}/mês
        </strong>
      </div>
    </q-checkbox>
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

<style lang="scss">
.q-offer-item {
  border-bottom: 1px solid $neutral-color-gray-lighter;
  padding: 0 $card-padding;
  transition: background-color $transition;

  &:hover {
    background-color: $neutral-color-gray-lightest;
  }
}

.q-offer-item__checkbox {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: $space-m 0;
}

.q-offer-item__info {
  align-items: center;
  display: flex;
  flex: 1 0 0;
}

.q-offer-item__figure {
  flex: 0 1 120px;
  margin: 0;
  padding: 0 $space-m;
}

.q-offer-item__image {
  width: 100%;
}

.q-offer-item__course-info {
  flex: 1 0 0;
}

.q-offer-item__course-name {
  color: $primary-color-dark;
  font-size: rem(16);
  margin: 0;
}

.q-offer-item__course-kind {
  margin: 0;
}

.q-offer-item__price-info {
  text-align: right;
  line-height: 1.5;
}

.q-offer-item__discount-percentage {
  margin: 0;
}

.q-offer-item__price {
  color: $positive-color;
}
</style>
