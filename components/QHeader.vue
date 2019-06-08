<template>
  <header class="q-header">
    <q-header-item text="Ajuda" class="q-header__info">
      <q-icon-info />
    </q-header-item>
    <q-logo class="q-header__logo" />
    <q-header-item text="Conta" class="q-header__account">
      <q-icon-user-circle />
    </q-header-item>
  </header>
</template>

<script>
import QLogo from '~/components/QLogo'
import QHeaderItem from '~/components/QHeaderItem'
import QIconInfo from '~/components/q-icons/QIconInfo'
import QIconUserCircle from '~/components/q-icons/QIconUserCircle'

export default {
  components: {
    QLogo,
    QHeaderItem,
    QIconInfo,
    QIconUserCircle
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
  width: 92px;
}
</style>
