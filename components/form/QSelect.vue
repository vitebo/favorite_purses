<template>
  <label class="q-select">
    {{ label }}
    <select
      v-model="selectedValue"
      :name="name"
      class="q-select__field"
      @change="onChange"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => [{ value: '', text: '' }]
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectedValue: null
    }
  },
  methods: {
    onChange() {
      this.$emit('change-value', this.selectedValue)
    }
  }
}
</script>

<style lang="scss">
.q-select {
  color: $neutral-color-black;
  font-size: rem(13);
  font-weight: $font-weight-bold;
  line-height: rem(20);
  text-transform: uppercase;
}

.q-select__field {
  background-color: $neutral-color-white;
  border: 1px solid $neutral-color-gray-light;
  border-radius: 4px;
  color: $neutral-color-black;
  font-size: rem(16);
  height: 48px;
  line-height: rem(24);
  padding: 0 $space-m;
  width: 100%;
}
</style>
