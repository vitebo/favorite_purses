<template>
  <header class="q-header">
    <q-side-menu class="q-header__info">
      <template v-slot:target>
        <q-header-item text="Ajuda">
          <q-icon-info />
        </q-header-item>
      </template>
      <ul class="list-item">
        <li class="item">
          <q-icon-base class="item__icon">
            <q-icon-info />
          </q-icon-base>
          <span>Como funciona</span>
        </li>
        <li class="item">
          <q-icon-base class="item__icon item__icon--whatsapp">
            <q-icon-whats-app />
          </q-icon-base>
          <div class="item__info">
            <strong>0800 123 2222</strong>
            <span>Envie mensagem ou ligue</span>
          </div>
        </li>
      </ul>
    </q-side-menu>
    <q-logo class="q-header__logo" />
    <q-header-item text="Conta" class="q-header__account">
      <q-icon-user-circle />
    </q-header-item>
  </header>
</template>

<script>
import QIconBase from '~/components/QIconBase'
import QLogo from '~/components/QLogo'
import QSideMenu from '~/components/QSideMenu'
import QHeaderItem from '~/components/QHeaderItem'
import QIconUserCircle from '~/components/q-icons/QIconUserCircle'
import QIconWhatsApp from '~/components/q-icons/QIconWhatsApp'
import QIconInfo from '~/components/q-icons/QIconInfo'

export default {
  components: {
    QIconInfo,
    QIconBase,
    QIconWhatsApp,
    QLogo,
    QHeaderItem,
    QIconUserCircle,
    QSideMenu
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

.q-header__info {
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

// ---

.list-item {
  padding-left: 0;
}

.item {
  align-items: center;
  display: flex;
  padding: $space-s;
}

.item__icon {
  color: $primary-color-dark;
  margin-right: $space-s;
}

.item__icon--whatsapp {
  color: #25d366;
}

.item__info {
  display: flex;
  flex-direction: column;
}
</style>
