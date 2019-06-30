<template>
  <div class="q-base-modal">
    <q-overlay :show-overlay="showOverlay" @clickOnOverlay="close" />

    <transition
      enter-active-class="q-base-modal__card--opening"
      leave-active-class="q-base-modal__card--closing"
      @before-enter="callOverlary"
      @after-leave="closeOverlay"
    >
      <q-card v-if="showModal" class="q-base-modal__card">
        <button class="q-base-modal__close" @click="close">
          <q-icon-base height="32px" width="32px" icon-name="fechar">
            <q-icon-times />
          </q-icon-base>
        </button>
        <div class="q-base-modal__card-content">
          <slot />
        </div>
      </q-card>
    </transition>
  </div>
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
  data() {
    return {
      showOverlay: this.showModal
    }
  },
  methods: {
    close() {
      this.$emit('clickToCloseModal')
    },
    callOverlary() {
      this.showOverlay = true
    },
    closeOverlay() {
      this.showOverlay = false
    }
  }
}
</script>

<style lang="scss">
.q-base-modal__card {
  $card-width: 700px;

  left: 0;
  margin-right: 0 auto;
  position: absolute;
  transition: transform $transition;
  top: $space-j;
  width: 100%;
  z-index: 2;

  @include media-breakpoint-down(sm) {
    height: calc(100vh - #{$space-j});
  }

  @include media-breakpoint-up(sm) {
    left: calc(50% - #{$card-width / 2});
    width: $card-width;
  }
}

.q-base-modal__card--opening {
  animation: open-modal $modal-animation-time;
  animation-delay: $modal-animation-time;
  animation-fill-mode: forwards;
  transform: translateY(100vh);
}

.q-base-modal__card--closing {
  animation: open-modal $modal-animation-time reverse;
  animation-delay: $overlay-animation-time;
}

.q-base-modal__card-content {
  height: 100%;
  margin-left: $card-padding * -1;
  margin-right: $card-padding * -1;
  padding: 0 $card-padding;

  @include media-breakpoint-down(sm) {
    overflow-y: auto;
  }
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

@keyframes open-modal {
  from {
    transform: translateY(100vh);
  }

  to {
    transform: translateY(0);
  }
}
</style>
