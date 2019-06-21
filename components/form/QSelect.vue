<template>
  <select :name="name" class="q-select">
    <option
      v-for="option in options"
      :key="option.value"
      :value="options.value"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    options: {
      type: () => Array,
      default: []
    }
  }
}
</script>

<style lang="scss">
.q-select {
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
