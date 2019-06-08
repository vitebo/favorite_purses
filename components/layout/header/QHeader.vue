<template>
  <header class="q-header">
    <q-helper-menu class="q-header__helper-menu" />
    <q-logo class="q-header__logo" />
    <q-header-item text="Conta" class="q-header__account">
      <q-icon-user-circle />
    </q-header-item>
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

.q-header__helper-menu {
  border-right: $space-xxs solid $neutral-color-gray-lighter;
  padding: 0 $space-m;
}

.q-header__account {
  border-left: $space-xxs solid $neutral-color-gray-lighter;
  padding: 0 $space-m;
}

.q-header__logo {
  width: 100px;
}
</style>
