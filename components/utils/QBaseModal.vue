<template>
  <q-overlay
    class="q-base-modal"
    :show-overlay="showModal"
    @clickOnOverlay="close"
  >
    <section class="q-base-modal__container">
      <q-card class="q-base-modal__card">
        <slot />
      </q-card>
    </section>
  </q-overlay>
</template>

<script>
import QOverlay from './QOverlay'
import QCard from './QCard'

export default {
  components: {
    QOverlay,
    QCard
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
  display: flex;
  align-items: center;
  height: 100%;
}

.q-base-modal__card {
  @extend %container;
  width: 700px;
  min-height: 80%;
}
</style>
