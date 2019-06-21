<template>
  <label :class="qCheckboxClass">
    <input
      v-model="checked"
      type="checkbox"
      :name="name"
      class="q-checkbox__input"
    />

    <transition
      enter-active-class="q-checkbox__icon--opening"
      leave-active-class="q-checkbox__icon--closing"
    >
      <q-icon-base v-if="checked" class="q-checkbox__icon">
        <q-icon-check />
      </q-icon-base>
    </transition>
    {{ text }}
  </label>
</template>

<script>
import QIconBase from '~/components/q-icons/QIconBase'
import QIconCheck from '~/components/q-icons/QIconCheck'

export default {
  components: {
    QIconBase,
    QIconCheck
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      checked: false
    }
  },
  computed: {
    qCheckboxClass() {
      const className = 'q-checkbox'
      const modifier = {}
      modifier[`${className}--checked`] = this.checked

      return [className, modifier]
    }
  }
}
</script>

<style lang="scss">
$check-box-font-size: rem(16);

.q-checkbox {
  align-items: center;
  display: inline-flex;
  color: $neutral-color-black;
  cursor: pointer;
  font-size: $check-box-font-size;
  font-weight: $font-weight-normal;
  line-height: rem(22);
  position: relative;

  &::before {
    border-radius: 2px;
    border: 1px solid $neutral-color-black;
    box-sizing: border-box;
    content: '';
    display: block;
    height: $check-box-font-size;
    left: 0;
    margin-right: $space-s;
    transition: $transition;
    transition-property: background-color, border-color;
    width: $check-box-font-size;
  }
}

.q-checkbox--checked {
  &::before {
    background-color: $primary-color;
    border-color: transparent;
  }
}

.q-checkbox__input {
  display: none;
}

.q-checkbox__icon {
  border: 1px solid transparent;
  color: $neutral-color-white;
  height: $check-box-font-size;
  left: 0;
  padding: $space-xxs;
  position: absolute;
  width: $check-box-font-size;
}

.q-checkbox__icon--opening {
  animation: check-input $transition-time;
  animation-delay: $transition-time;
  transform: scale(0);
}

.q-checkbox__icon--closing {
  animation: check-input $transition-time reverse;
}

@keyframes check-input {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}
</style>
