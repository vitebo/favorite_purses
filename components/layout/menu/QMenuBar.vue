<template>
  <div class="q-menu-bar">
    <strong class="q-menu-bar__title">Minha conta</strong>
    <div>
      <button class="q-menu-bar__target" @click="toggleMenu">
        Menu
        <q-icon-base :class="iconClass" height="14px" width="14px">
          <q-icon-chevron-down />
        </q-icon-base>
      </button>
      <ul :class="menuContentClass">
        <li class="q-menu-bar__item">Pré-matriculas</li>
        <li class="q-menu-bar__item q-menu-bar__item--active">
          Bolsas favoritas
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import QIconBase from '~/components/q-icons/QIconBase'
import QIconChevronDown from '~/components/q-icons/QIconChevronDown'

export default {
  components: {
    QIconBase,
    QIconChevronDown
  },
  data() {
    return {
      isTheVisibleMenu: false
    }
  },
  computed: {
    menuContentClass() {
      return [
        'q-menu-bar__list',
        { 'q-menu-bar__list--show': this.isTheVisibleMenu }
      ]
    },
    iconClass() {
      return [
        'q-menu-bar__icon',
        { 'q-menu-bar__icon--up': this.isTheVisibleMenu }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isTheVisibleMenu = !this.isTheVisibleMenu
    },
    closeMenu() {
      this.isTheVisibleMenu = false
    }
  }
}
</script>

<style lang="scss">
.q-menu-bar {
  align-items: center;
  background: $primary-color;
  box-shadow: $low-box-shadow;
  color: $neutral-color-white;
  display: flex;

  @include media-breakpoint-down(sm) {
    justify-content: space-between;
  }
}

.q-menu-bar__title {
  padding: $space-s $space-m;
  margin-right: $space-st;
}

.q-menu-bar__target {
  background-color: transparent;
  border: none;
  color: $neutral-color-white;
  font-size: $font-size-normal;
  font-weight: $font-weight-bold;
  line-height: 1.5;
  padding: $space-s $space-m;

  @include media-breakpoint-up(sm) {
    display: none;
  }
}

.q-menu-bar__list {
  display: flex;
  list-style: none;
  margin: 0;
  padding-left: 0;

  @include media-breakpoint-down(sm) {
    box-shadow: $low-box-shadow;
    position: absolute;
    background-color: $primary-color;
    width: 100%;
    left: 0;
    transform: translateY(-100%);
    transform-origin: top;
    transition: transform $transition;
    z-index: -1;
    display: block;
  }
}

.q-menu-bar__list--show {
  @include media-breakpoint-down(sm) {
    transform: translateY(0);
  }
}

.q-menu-bar__item {
  font-weight: $font-weight-bold;
  padding: $space-m;
  cursor: pointer;
  transition: background-color $transition;
}

.q-menu-bar__item--active {
  background-color: $primary-color-dark;
}

.q-menu-bar__icon {
  vertical-align: middle;
  margin-left: $space-s;
  transition: transform $transition;
}

.q-menu-bar__icon--up {
  transform: rotate(180deg);
}
</style>
