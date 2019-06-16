<template>
  <section class="q-footer-group-items">
    <div class="q-footer-group-items__container">
      <ul class="q-footer-group-items__list">
        <li v-for="item in items" :key="item.title" :class="getItemClass(item)">
          <q-footer-item
            :title="item.title"
            :description="item.description"
            :short-description="item.shortDescription"
            :short-title="item.shortTitle"
            :modifier="item.modifier"
          >
            <component :is="item.icon" />
          </q-footer-item>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import QFooterItem from './QFooterItem'

export default {
  components: {
    QFooterItem
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getItemClass(item) {
      const className = 'q-footer-group-items__item'
      const modifier = `${className}--${item.modifier}`

      return [className, modifier]
    }
  }
}
</script>

<style lang="scss">
.q-footer-group-items {
  @include media-breakpoint-up(sm) {
    background-color: $primary-color-dark;
  }
}

.q-footer-group-items__container {
  @extend %container;
}

.q-footer-group-items__list {
  @extend %row;

  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;

  @include media-breakpoint-up(sm) {
    flex-wrap: nowrap;
  }
}

.q-footer-group-items__item {
  background-color: $primary-color-dark;
  flex: 1 1 0;
}

.q-footer-group-items__item--large {
  @include media-breakpoint-down(sm) {
    display: flex;
    flex-basis: 100%;
  }
}

.q-footer-group-items__item--small {
  @include media-breakpoint-down(sm) {
    margin-right: $space-xxs;
    margin-top: $space-xxs;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
