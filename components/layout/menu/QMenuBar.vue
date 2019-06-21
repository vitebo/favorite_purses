<template>
  <nav class="q-menu-bar">
    <div class="q-menu-bar__container">
      <div class="q-menu-bar__row">
        <strong class="q-menu-bar__title">Minha conta</strong>
        <q-base-menu theme="primary" @change="onChange" @close="onClose">
          <template v-slot:target>
            <div class="q-menu-bar__target">
              Menu
              <q-icon-base height="14px" width="14px" class="q-menu-bar__icon">
                <q-icon-chevron :direction="arrowDirection" />
              </q-icon-base>
            </div>
          </template>
          <ul class="q-menu-bar__list">
            <li class="q-menu-bar__item">Pré-matriculas</li>
            <li class="q-menu-bar__item q-menu-bar__item--active">
              Bolsas favoritas
            </li>
          </ul>
        </q-base-menu>
      </div>
    </div>
  </nav>
</template>

<script>
import QBaseMenu from '~/components/utils/QBaseMenu'
import QIconBase from '~/components/q-icons/QIconBase'
import QIconChevron from '~/components/q-icons/QIconChevron'

export default {
  components: {
    QBaseMenu,
    QIconBase,
    QIconChevron
  },
  data() {
    return {
      isTheVisibleMenu: false,
      arrowDirection: 'bottom'
    }
  },
  methods: {
    onChange(isTheVisibleMenu) {
      this.isTheVisibleMenu = isTheVisibleMenu
      this.arrowDirection = isTheVisibleMenu ? 'top' : 'bottom'
    },
    onClose() {
      this.isTheVisibleMenu = false
      this.arrowDirection = 'bottom'
    }
  }
}
</script>

<style lang="scss">
.q-menu-bar {
  background: $primary-color;
  box-shadow: $low-box-shadow;
  color: $neutral-color-white;
  height: $space-xl;
}

.q-menu-bar__container {
  @extend %container;

  height: 100%;
}

.q-menu-bar__row {
  @extend %row;

  align-items: center;
  display: flex;
  height: 100%;

  @include media-breakpoint-down(sm) {
    justify-content: space-between;
  }
}

.q-menu-bar__title {
  margin-right: $space-st;
  padding: 0 $container-gap;
}

.q-menu-bar__target {
  color: $neutral-color-white;
  font-size: $font-size-normal;
  font-weight: $font-weight-bold;
  line-height: 1.5;
  padding: 0 $container-gap;
}

.q-menu-bar__list {
  background-color: $primary-color;
  display: flex;
  list-style: none;
  margin: 0;
  padding-left: 0;

  @include media-breakpoint-down(sm) {
    box-shadow: $low-box-shadow;
    display: block;
  }
}

.q-menu-bar__item {
  cursor: pointer;
  font-weight: $font-weight-bold;
  padding: $space-s $space-m;
  transition: $transition;
  transition-property: background-color, color;

  &:hover {
    color: $neutral-color-gray-lighter;
  }
}

.q-menu-bar__item--active {
  background-color: $primary-color-dark;
  color: $neutral-color-white;
}

.q-menu-bar__icon {
  margin-left: $space-s;
  vertical-align: middle;
}
</style>
