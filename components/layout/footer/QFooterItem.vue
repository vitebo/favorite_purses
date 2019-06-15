<template>
  <a href="#" :class="qFooterItemClass">
    <q-icon-base class="q-footer-item__icon" height="32px" width="32px">
      <slot />
    </q-icon-base>
    <div class="q-footer-item__content q-footer-item__content--desktop">
      <strong class="q-footer-item__title">{{ title }}</strong>
      <p class="q-footer-item__description">{{ description }}</p>
    </div>
    <div class="q-footer-item__content q-footer-item__content--mobile">
      <strong class="q-footer-item__title">{{ getShortTitle }}</strong>
      <p class="q-footer-item__description">{{ getShortDescription }}</p>
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
    title: {
      type: String,
      default: ''
    },
    shortTitle: {
      type: [String, Boolean],
      default: false
    },
    description: {
      type: [String, Boolean],
      default: false
    },
    shortDescription: {
      type: [String, Boolean],
      default: false
    },
    modifier: {
      type: [String, Boolean],
      default: false
    }
  },
  computed: {
    getShortTitle() {
      return this.shortTitle || this.title
    },
    getShortDescription() {
      return this.shortDescription || this.description
    },
    qFooterItemClass() {
      const className = 'q-footer-item'

      const modifier = {}
      modifier[`${className}--${this.modifier}`] = this.modifier

      return [className, modifier]
    }
  }
}
</script>

<style lang="scss">
.q-footer-item {
  background-color: $primary-color-dark;
  color: $neutral-color-white;
  display: flex;
  flex-direction: column;
  padding: $space-m $space-st;
  text-decoration: none;
  text-align: center;
}

.q-footer-item--large {
  align-items: center;
  flex-direction: row;
  text-align: left;

  .q-footer-item__content--mobile {
    & > .q-footer-item__description {
      display: block;
    }
  }

  .q-footer-item__icon {
    margin-right: $space-s;
    margin-left: 0;
  }
}

.q-footer-item__icon {
  @include min-size(32px);
  margin: 0 auto;
}

.q-footer-item__content--desktop {
  @include media-breakpoint-down(sm) {
    display: none;
  }
}

.q-footer-item__content--mobile {
  @include media-breakpoint-up(sm) {
    display: none;
  }

  & > .q-footer-item__description {
    display: none;
  }
}

.q-footer-item__title {
  margin: 0;
}

.q-footer-item__description {
  margin: 0;
}
</style>
