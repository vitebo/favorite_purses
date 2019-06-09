<template>
  <header class="q-header">
    <div class="q-header__helper-menu">
      <q-helper-menu />
    </div>
    <q-logo class="q-header__logo" />
    <div class="q-header__account">
      <q-header-item
        text="Nome Sobrenome"
        short-text="Conta"
        modifier="primary"
        :reverse="true"
      >
        <q-icon-user-circle />
      </q-header-item>
    </div>
  </header>
</template>

<script>
import QHelperMenu from './QHelperMenu'
import QHeaderItem from './QHeaderItem'

import QLogo from '~/components/QLogo'
import QIconUserCircle from '~/components/q-icons/QIconUserCircle'

export default {
  components: {
    QHelperMenu,
    QHeaderItem,
    QLogo,
    QIconUserCircle
  }
}
</script>

<style lang="scss">
.q-header {
  align-items: center;
  background-color: $neutral-color-white;
  border-bottom: solid 1px $neutral-color-gray-lighter;
  box-shadow: $low-box-shadow;
  display: flex;
  height: $header-height;
  justify-content: space-between;
  padding: $space-s 0;
}

.q-header__helper-menu,
.q-header__account {
  flex: 0 1 80px;
  padding: 0 $space-m;

  @include media-breakpoint-up(sm) {
    flex-basis: 420px;
  }
}

.q-header__helper-menu {
  @include media-breakpoint-down(sm) {
    border-right: $space-xxs solid $neutral-color-gray-lighter;
  }
}

.q-header__account {
  display: flex;
  justify-content: flex-end;

  @include media-breakpoint-down(sm) {
    border-left: $space-xxs solid $neutral-color-gray-lighter;
  }
}

.q-header__logo {
  flex-shrink: 0;
  height: 42px;
}
</style>
