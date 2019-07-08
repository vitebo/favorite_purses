<template>
  <div :class="qOfferItemClass">
    <q-checkbox
      class="q-offer-item__checkbox"
      :disabled="isDisabled"
      @change-state="onChangeState"
    >
      <figure class="q-offer-item__figure">
        <img class="q-offer-item__image" :src="offer.university.logo_url" />
      </figure>
      <div class="q-offer-item__info">
        <div class="q-offer-item__course-info">
          <h6 class="q-offer-item__course-name">
            {{ offer.course.name }}
          </h6>
          <p class="q-offer-item__course-kind">
            {{ offer.course.level }}
          </p>
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
      </div>
    </q-checkbox>
  </div>
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
  },
  computed: {
    qOfferItemClass() {
      const className = 'q-offer-item'

      const modifier = {}
      modifier[`${className}--disabled`] = this.isDisabled

      return [className, modifier]
    },
    isDisabled() {
      return !this.offer.enabled
    }
  },
  methods: {
    onChangeState({ checked }) {
      const mutation = checked ? 'selectOffer' : 'deselectOffer'
      this.$store.commit(`offer-filters/${mutation}`, this.offer)
    }
  }
}
</script>

<style lang="scss">
.q-offer-item {
  border-bottom: 1px solid $neutral-color-gray-lighter;
  transition: background-color $transition;

  &:hover {
    background-color: $neutral-color-gray-lightest;
  }
}

.q-offer-item--disabled {
  filter: grayscale(100%);

  &:hover {
    background-color: transparent;
  }
}

.q-offer-item__checkbox {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: $space-m 0;
}

.q-offer-item__figure {
  flex: 0 0 100px;
  margin: 0;
  padding: 0 $space-m;

  @include media-breakpoint-up(sm) {
    flex-basis: 120px;
  }
}

.q-offer-item__info {
  align-items: flex-start;
  display: flex;
  flex: 1 0 0;

  @include media-breakpoint-down(xs) {
    flex-direction: column;
  }
}

.q-offer-item__image {
  max-height: 42px;
  max-width: 100%;
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
  line-height: 1.5;

  @include media-breakpoint-down(xs) {
    margin-top: $space-m;
  }

  @include media-breakpoint-up(xs) {
    text-align: right;
  }
}

.q-offer-item__discount-percentage {
  margin: 0;
}

.q-offer-item__price {
  color: $positive-color;
}
</style>
