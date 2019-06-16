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
  padding: $space-l $container-gap;
  text-align: center;
  text-decoration: none;

  @include media-breakpoint-down(sm) {
    padding-bottom: $space-m;
    padding-top: $space-m;
  }

  @include media-breakpoint-up(md) {
    align-items: center;
    flex-direction: row;
    text-align: left;
  }
}

.q-footer-item__icon {
  @include min-size(32px);

  margin-bottom: $space-s;
  margin-left: auto;
  margin-right: auto;

  @include media-breakpoint-up(md) {
    margin-bottom: 0;
    margin-left: 0;
    margin-right: $space-s;
  }
}

.q-footer-item__content--desktop {
  @include media-breakpoint-down(sm) {
    display: none;
  }
}

.q-footer-item__title {
  margin: 0;
}

.q-footer-item__description {
  font-size: $font-size-small;
  margin: 0;
}

.q-footer-item__content--mobile {
  @include media-breakpoint-up(sm) {
    display: none;
  }

  & > .q-footer-item__description {
    display: none;
  }
}

.q-footer-item--large {
  @include media-breakpoint-down(sm) {
    align-items: center;
    flex-direction: row;
    margin: 0 auto;
    text-align: left;

    .q-footer-item__content--mobile {
      & > .q-footer-item__description {
        display: block;
      }
    }

    .q-footer-item__icon {
      margin-bottom: 0;
      margin-left: 0;
      margin-right: $space-s;
    }
  }
}
</style>
