<template>
  <q-overlay
    class="q-base-modal"
    :show-overlay="showModal"
    @clickOnOverlay="close"
  >
    <q-card class="q-base-modal__card">
      <button class="q-base-modal__close" @click="close">
        <q-icon-base height="32px" width="32px" icon-name="fechar">
          <q-icon-times />
        </q-icon-base>
      </button>
      <slot />
    </q-card>
  </q-overlay>
</template>

<script>
import QOverlay from './QOverlay'
import QCard from './QCard'

import QIconBase from '~/components/q-icons/QIconBase'
import QIconTimes from '~/components/q-icons/QIconTimes'

export default {
  components: {
    QOverlay,
    QCard,
    QIconBase,
    QIconTimes
  },
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('clickToCloseModal')
    }
  }
}
</script>

<style lang="scss">
.q-base-modal {
}

.q-base-modal__container {
}

.q-base-modal__card {
  @extend %container;
  width: 700px;
  min-height: 80%;
  position: relative;
  transition: transform $transition;
}

.q-base-modal__close {
  @include size(32px);
  background-color: transparent;
  color: $neutral-color-white;
  border: none;
  position: absolute;
  top: $space-xxl * -1;
  right: 0;
  padding: 0;
  transition: transform $transition;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
}
</style>
