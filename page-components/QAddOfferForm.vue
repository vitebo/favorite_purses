<template>
  <form class="q-add-offer-form">
    <q-select
      label="Selecione sua cidade"
      name="city-options"
      :options="cityOptions"
      class="q-add-offer-form__group"
      @change-value="setCity"
    />

    <q-select
      label="Selecione o curso de sua preferência"
      name="city-options"
      :options="courseOptions"
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
          @change-state="updateKind"
        />
        <q-checkbox
          class="q-add-offer-form__kind-check"
          name="kind"
          text="A distância"
          value="EaD"
          @change-state="updateKind"
        />
      </div>
    </div>

    <div class="q-add-offer-form__group">
      <h4 class="q-add-offer-form__legend">Até quanto pode pagar?</h4>
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
    cities() {
      return [...new Set(this.offers.map(offer => offer.campus.city))]
    },
    courses() {
      return [...new Set(this.offers.map(offer => offer.course.name))]
    },
    cityOptions() {
      return this.cities.map(city => ({ text: city, value: city })) || []
    },
    courseOptions() {
      return this.courses.map(course => ({ text: course, value: course })) || []
    },
    prices() {
      return this.offers.map(offer => Math.ceil(offer.price_with_discount))
    },
    lowestPriceWithDiscount() {
      return this.prices.reduce(
        (lowestPrice, price) => (price < lowestPrice ? price : lowestPrice),
        Infinity
      )
    },
    biggestPriceWithDiscount() {
      return this.prices.reduce(
        (biggestPrice, price) => (price > biggestPrice ? price : biggestPrice),
        0
      )
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
    }
  }
}
</script>

<style lang="scss">
.q-add-offer-form {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-left: $space-s * -1;
  margin-right: $space-s * -1;
}

.q-add-offer-form__legend {
  color: $neutral-color-black;
  font-size: rem(13);
  font-weight: $font-weight-bold;
  line-height: rem(20);
  text-transform: uppercase;
  margin: 0;
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
