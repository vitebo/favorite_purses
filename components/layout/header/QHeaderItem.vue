<template>
  <a :href="url" class="q-item">
    <q-icon-base :icon-name="text" class="q-item__icon">
      <slot />
    </q-icon-base>
    <span class="q-item__text">
      {{ text }}
    </span>
    <span class="q-item__text q-item__text--short">
      {{ getShortText }}
    </span>
  </a>
</template>

<script>
import QIconBase from '~/components/q-icons/QIconBase'

export default {
  components: {
    QIconBase
  },
  props: {
    text: {
      type: String,
      default: 'item'
    },
    shortText: {
      type: [String, Boolean],
      default: false
    },
    url: {
      type: String,
      default: '#'
    }
  },
  computed: {
    getShortText() {
      return this.shortText || this.text
    }
  }
}
</script>

<style lang="scss">
.q-item {
  color: $primary-color-dark;
  display: inline-block;
  text-align: center;
  text-decoration: none;

  @include media-breakpoint-up(sm) {
    display: flex;
    flex-direction: row-reverse;
  }
}

.q-item__icon {
  @include size(22px);
  display: block;
  margin: 0 auto;
}

.q-item__text {
  font-weight: $font-weight-bold;

  @include media-breakpoint-down(sm) {
    display: none;
  }

  @include media-breakpoint-between(sm, md) {
    font-size: $font-size-small;
  }

  @include media-breakpoint-up(sm) {
    margin: 0 $space-s;
  }
}

.q-item__text--short {
  font-size: $font-size-small;

  @include media-breakpoint-down(sm) {
    display: block;
  }

  @include media-breakpoint-up(sm) {
    display: none;
  }
}
</style>
