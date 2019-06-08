<template>
  <q-side-menu class="q-helper-menu">
    <template v-slot:target>
      <q-header-item text="Ajuda">
        <q-icon-info />
      </q-header-item>
    </template>
    <ul class="q-helper-menu__list">
      <li class="q-helper-menu__item">
        <q-helper-menu-item main-text="Como funciona">
          <q-icon-info />
        </q-helper-menu-item>
      </li>
      <li class="q-helper-menu__item">
        <q-helper-menu-item
          main-text="0800 123 2222"
          secondary-text="Envie mensagem ou ligue"
        >
          <q-icon-whats-app class="q-helper-menu__whatsapp-icon" />
        </q-helper-menu-item>
      </li>
    </ul>
  </q-side-menu>
</template>

<script>
import QHelperMenuItem from './QHelperMenuItem'
import QHeaderItem from './QHeaderItem'

import QSideMenu from '~/components/layout/QSideMenu'
import QIconInfo from '~/components/q-icons/QIconInfo'
import QIconWhatsApp from '~/components/q-icons/QIconWhatsApp'

export default {
  components: {
    QHelperMenuItem,
    QHeaderItem,
    QSideMenu,
    QIconInfo,
    QIconWhatsApp
  }
}
</script>

<style lang="scss">
.q-helper-menu__list {
  padding-left: 0;
}

.q-helper-menu__item {
  align-items: center;
  display: flex;
  padding: $space-s;
}

.q-helper-menu__whatsapp-icon {
  color: #25d366;
}
</style>
