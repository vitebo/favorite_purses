<template>
  <nav class="q-breadcrumb">
    <ul class="q-breadcrumb__list">
      <li v-for="item in items" :key="item.url">
        <a class="q-breadcrumb__link" :href="item.url">
          {{ item.text }}
        </a>
      </li>
      <li class="q-breadcrumb__current">
        {{ current }}
      </li>
    </ul>
    <a :href="prev.url" class="q-breadcrumb__link q-breadcrumb__link--prev">
      <q-icon-base height="12px" width="12px" class="q-breadcrumb__icon">
        <q-icon-chevron direction="left" />
      </q-icon-base>
      {{ prev.text }}
    </a>
  </nav>
</template>

<script>
import QIconChevron from '~/components/q-icons/QIconChevron'
import QIconBase from '~/components/q-icons/QIconBase'

export default {
  components: {
    QIconChevron,
    QIconBase
  },
  props: {
    items: {
      type: Array,
      default() {
        return [{ text: '', url: '#' }]
      }
    },
    current: {
      type: String,
      default: ''
    }
  },
  computed: {
    prev() {
      return this.items.slice(-1)[0]
    }
  }
}
</script>

<style lang="scss">
.q-breadcrumb__list {
  display: flex;
  list-style: none;
  margin: 0;
  padding-left: 0;

  @include media-breakpoint-down(sm) {
    display: none;
  }
}

.q-breadcrumb__link,
.q-breadcrumb__current {
  display: inline-block;
  padding: $space-s 0;
}

.q-breadcrumb__link {
  color: $primary-color-dark;
  font-weight: $font-weight-bold;
  text-decoration: none;
  transition: color $transition;

  &:hover {
    color: $primary-color;
  }

  &::after {
    color: $neutral-color-black;
    content: '/';
    font-weight: $font-weight-normal;
    padding: $space-s;
  }
}

.q-breadcrumb__link--prev {
  @include media-breakpoint-up(sm) {
    display: none;
  }

  &::after {
    content: initial;
  }
}

.q-breadcrumb__icon {
  margin-right: $space-xs;
  margin-top: $space-xxs * -1;
  vertical-align: middle;
}
</style>
