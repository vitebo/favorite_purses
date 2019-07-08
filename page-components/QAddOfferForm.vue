<template>
  <form class="q-add-offer-form">
    <q-select
      label="Selecione sua cidade"
      name="city-options"
      :options="cityOptions"
      :initial-value="citySelected"
      class="q-add-offer-form__group"
      @change-value="setCity"
    />

    <q-select
      label="Selecione o curso de sua preferência"
      name="city-options"
      :options="courseOptions"
      :initial-value="courseSelected"
      class="q-add-offer-form__group"
      @change-value="setCourse"
    />

    <div class="q-add-offer-form__group">
      <h4 class="q-add-offer-form__legend">
        Como você pretender estudar?
      </h4>
      <div class="q-add-offer-form__kind-options">
        <q-checkbox
          class="q-add-offer-form__kind-check"
          name="kind"
          text="presencial"
          value="Presencial"
          :initial-state="kindIsSelected('Presencial')"
          @change-state="updateKind"
        />
        <q-checkbox
          class="q-add-offer-form__kind-check"
          name="kind"
          text="A distância"
          value="EaD"
          :initial-state="kindIsSelected('EaD')"
          @change-state="updateKind"
        />
      </div>
    </div>

    <div class="q-add-offer-form__group">
      <h4 class="q-add-offer-form__legend">
        Até quanto pode pagar?
      </h4>
      <q-input-range
        name="until-when-can-you-pay"
        label="R$"
        :min="lowestPriceWithDiscount"
        :max="biggestPriceWithDiscount"
        :value="biggestPriceWithDiscount"
        @change-value="setMaxPrice"
      />
    </div>
  </form>
</template>

<script>
import QSelect from '~/components/form/QSelect'
import QCheckbox from '~/components/form/QCheckbox'
import QInputRange from '~/components/form/QInputRange'

import { mapState } from 'vuex'

export default {
  components: {
    QSelect,
    QCheckbox,
    QInputRange
  },
  props: {
    offers: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState('offer-filters', {
      kinds: state => state.kinds,
      city: state => state.city,
      course: state => state.course
    }),
    cities() {
      return [...new Set(this.offers.map(offer => offer.campus.city))]
    },
    courses() {
      return [...new Set(this.offers.map(offer => offer.course.name))]
    },
    cityOptions() {
      return this.cities.map(city => ({ text: city, value: city })) || []
    },
    citySelected() {
      return (
        this.cityOptions
          .map(cityOption => cityOption.value)
          .find(city => city === this.city) || null
      )
    },
    courseOptions() {
      return this.courses.map(course => ({ text: course, value: course })) || []
    },
    courseSelected() {
      return (
        this.courseOptions
          .map(courseOption => courseOption.value)
          .find(course => course === this.course) || null
      )
    },
    priceWithDiscountOrdered() {
      return this.offers
        .map(offer => Math.ceil(offer.price_with_discount))
        .sort((a, b) => (a > b ? 1 : -1))
    },
    lowestPriceWithDiscount() {
      return this.priceWithDiscountOrdered.slice(0)[0]
    },
    biggestPriceWithDiscount() {
      return this.priceWithDiscountOrdered.slice(-1)[0]
    }
  },
  methods: {
    setCity(city) {
      this.$store.commit('offer-filters/setCity', city)
    },
    setCourse(course) {
      this.$store.commit('offer-filters/setCourse', course)
    },
    updateKind({ value, checked }) {
      const mutation = checked ? 'addKind' : 'removeKind'
      this.$store.commit(`offer-filters/${mutation}`, value)
    },
    setMaxPrice(price) {
      this.$store.commit('offer-filters/setMaxPrice', price)
    },
    kindIsSelected(kind) {
      const index = this.kinds.indexOf(kind)
      return index !== -1
    }
  }
}
</script>

<style lang="scss">
.q-add-offer-form {
  display: flex;
  flex-wrap: wrap;
  margin-left: $space-s * -1;
  margin-right: $space-s * -1;
  position: relative;
}

.q-add-offer-form__legend {
  color: $neutral-color-black;
  font-size: rem(13);
  font-weight: $font-weight-bold;
  line-height: rem(20);
  margin: 0;
  text-transform: uppercase;
}

.q-add-offer-form__group {
  flex: 1 0 50%;
  min-width: 300px;
  padding: $space-m $space-s;
}

.q-add-offer-form__kind-options {
  margin-top: $space-l;
}

.q-add-offer-form__kind-check {
  margin-left: $space-m;

  &:first-child {
    margin-left: 0;
  }
}
</style>
