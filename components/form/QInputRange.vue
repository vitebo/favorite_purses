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
  appearance: none;
  background: $primary-color;
  border-radius: $space-xxs;
  display: block;
  height: $space-xs;
  margin-top: $space-st;
  outline: none;
  width: 100%;
}

.q-input-range__field::-webkit-slider-thumb {
  appearance: none;
  background: $neutral-color-white;
  border: $space-xxs solid $primary-color;
  border-radius: 50%;
  box-sizing: content-box;
  cursor: pointer;
  height: $space-st;
  width: $space-st;
}
</style>
