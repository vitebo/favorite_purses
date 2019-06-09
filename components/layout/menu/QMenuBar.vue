<template>
  <nav class="q-menu-bar">
    <strong class="q-menu-bar__title">Minha conta</strong>
    <q-base-menu theme="primary" @change="onChange" @close="onClose">
      <template v-slot:target>
        <div class="q-menu-bar__target">
          Menu
          <q-icon-base height="14px" width="14px" :class="iconClass">
            <q-icon-chevron-down />
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
  </nav>
</template>

<script>
import QBaseMenu from '~/components/utils/QBaseMenu'
import QIconBase from '~/components/q-icons/QIconBase'
import QIconChevronDown from '~/components/q-icons/QIconChevronDown'

export default {
  components: {
    QBaseMenu,
    QIconBase,
    QIconChevronDown
  },
  data() {
    return {
      isTheVisibleMenu: false
    }
  },
  computed: {
    iconClass() {
      const className = 'q-menu-bar__icon'

      const modifier = {}
      modifier[`${className}--up`] = this.isTheVisibleMenu

      return [className, modifier]
    }
  },
  methods: {
    onChange(isTheVisibleMenu) {
      this.isTheVisibleMenu = isTheVisibleMenu
    },
    onClose() {
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
  height: 40px;

  @include media-breakpoint-down(sm) {
    justify-content: space-between;
  }
}

.q-menu-bar__title {
  margin-right: $space-st;
  padding: $space-s $space-m;
}

.q-menu-bar__target {
  color: $neutral-color-white;
  font-size: $font-size-normal;
  font-weight: $font-weight-bold;
  line-height: 1.5;
  padding: $space-s $space-m;
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
  transition: background-color $transition;
}

.q-menu-bar__item--active {
  background-color: $primary-color-dark;
}

.q-menu-bar__icon {
  margin-left: $space-s;
  transition: transform $transition;
  vertical-align: middle;
}

.q-menu-bar__icon--up {
  transform: rotate(180deg);
}
</style>
