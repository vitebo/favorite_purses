<template>
  <label class="q-input-range">
    {{ labelMessage }}
    <input
      v-model="model"
      class="q-input-range__field"
      type="range"
      :name="name"
      :min="min"
      :max="max"
      @change="onChange"
    />
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 10
    },
    value: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      model: this.value || 0
    }
  },
  computed: {
    labelMessage() {
      return `${this.label}${this.model}`
    }
  },
  methods: {
    onChange() {
      this.$emit('change-value', this.model)
    }
  }
}
</script>

<style lang="scss">
.q-input-range {
  display: block;
}

.q-input-range__field {
  width: 100%;
  display: block;
  appearance: none;
  height: $space-xs;
  background: $primary-color;
  outline: none;
  border-radius: $space-xxs;
  margin-top: $space-st;
}

.q-input-range__field::-webkit-slider-thumb {
  appearance: none;
  width: $space-st;
  height: $space-st;
  background: $neutral-color-white;
  border-radius: 50%;
  cursor: pointer;
  border: $space-xxs solid $primary-color;
  box-sizing: content-box;
}
</style>
