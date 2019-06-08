<template>
  <header class="q-header">
    <div class="q-header__item q-header__item--first">
      Ajuda
    </div>
    <div class="q-header__item">
      <q-logo class="q-header__logo" />
    </div>
    <div class="q-header__item q-header__item--last">
      Login
    </div>
  </header>
</template>

<script>
import QLogo from '~/components/QLogo'

export default {
  components: {
    QLogo
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
}

.q-header__item {
  padding: $space-s;
}

.q-header__item--first {
  border-right: $space-xxs solid $divisor-color;
}

.q-header__item--last {
  border-left: $space-xxs solid $divisor-color;
}

.q-header__logo {
  height: 100%;
}
</style>
