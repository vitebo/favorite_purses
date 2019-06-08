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
      <li class="q-helper-menu__item--last">
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
  align-items: center;
  list-style: none;
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;

  @include media-breakpoint-up(sm) {
    display: flex;
  }
}

.q-helper-menu__item--last {
  @include media-breakpoint-up(sm) {
    border-left: $space-xxs solid $neutral-color-gray-lighter;
    margin-left: $space-m;
    padding-left: $space-m;
  }
}

.q-helper-menu__whatsapp-icon {
  $whatsapp-color: #25d366;
  color: $whatsapp-color;
}
</style>
