<template>
  <header class="q-header">
    <q-header-helper class="q-header__info" />
    <q-logo class="q-header__logo" />
    <q-header-item text="Conta" class="q-header__account">
      <q-icon-user-circle />
    </q-header-item>
  </header>
</template>

<script>
import QLogo from '~/components/QLogo'
import QHeaderHelper from '~/components/QHeaderHelper'
import QHeaderItem from '~/components/QHeaderItem'
import QIconUserCircle from '~/components/q-icons/QIconUserCircle'

export default {
  components: {
    QLogo,
    QHeaderItem,
    QIconUserCircle,
    QHeaderHelper
  }
}
</script>

<style lang="scss">
$header-height: 64px;
$header-border-color: #ebebeb;
$divisor-color: #eeeeee;

.q-header {
  align-items: center;
  background-color: $neutral-color-white;
  border-bottom: solid 1px $header-border-color;
  box-shadow: $low-box-shadow;
  display: flex;
  height: $header-height;
  justify-content: space-between;
  padding: $space-s 0;
}

.q-header__info {
  border-right: $space-xxs solid $divisor-color;
  padding: 0 $space-m;
}

.q-header__account {
  border-left: $space-xxs solid $divisor-color;
  padding: 0 $space-m;
}

.q-header__logo {
  width: 100px;
}
</style>
