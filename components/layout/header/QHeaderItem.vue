<template>
  <a :href="url" :class="qItemClass">
    <q-icon-base :icon-name="text" class="q-item__icon">
      <slot />
    </q-icon-base>
    <div class="q-item__content q-item__content--desktop">
      <strong class="q-item__text  q-item__text--main">
        {{ text }}
      </strong>
      <span v-if="secondaryText" class="q-item__text">
        {{ secondaryText }}
      </span>
    </div>
    <div class="q-item__content q-item__content--mobile">
      <strong class="q-item__text">
        {{ getShortText }}
      </strong>
      <span v-if="secondaryText" class="q-item__text">
        {{ secondaryText }}
      </span>
    </div>
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
    secondaryText: {
      type: [String, Boolean],
      default: false
    },
    shortText: {
      type: [String, Boolean],
      default: false
    },
    url: {
      type: String,
      default: '#'
    },
    modifier: {
      type: [String, Boolean],
      default: false
    },
    reverse: {
      type: [Boolean],
      default: false
    }
  },
  computed: {
    getShortText() {
      return this.shortText || this.text
    },
    qItemClass() {
      const className = 'q-item'

      const modifier = {}
      modifier[`${className}--${this.modifier}`] = this.modifier
      modifier[`${className}--reverse`] = this.reverse

      return [className, modifier]
    }
  }
}
</script>

<style lang="scss">
.q-item {
  align-items: center;
  color: $primary-color-dark;
  display: flex;
  text-decoration: none;
}

.q-item--reverse {
  flex-direction: row-reverse;
}

.q-item--primary {
  @include media-breakpoint-down(sm) {
    flex-direction: column;
    text-align: center;
  }
}

.q-item__icon {
  @include min-size(22px);

  display: block;
}

.q-item__content {
  display: flex;
  flex-direction: column;
}

.q-item__content--desktop {
  @include media-breakpoint-down(sm) {
    display: none;
  }
}

.q-item__content--mobile {
  @include media-breakpoint-up(sm) {
    display: none;
  }
}

.q-item__text {
  font-size: $font-size-small;
  font-weight: $font-weight-bold;
  margin: 0 $space-s;
  transition: font-size $transition;

  @include media-breakpoint-down(sm) {
    font-size: $font-size-normal;
  }
}

.q-item__text--main {
  font-size: $font-size-normal;

  @include media-breakpoint-between(sm, md) {
    font-size: $font-size-small;
  }
}
</style>
