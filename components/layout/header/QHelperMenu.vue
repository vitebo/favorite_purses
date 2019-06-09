<template>
  <q-base-menu theme="secondary" :overlay="true" class="q-helper-menu">
    <template v-slot:target>
      <q-header-item text="Ajuda" modifier="primary">
        <q-icon-info />
      </q-header-item>
    </template>
    <ul class="q-helper-menu__list">
      <li class="q-helper-menu__item">
        <q-header-item text="Como funciona">
          <q-icon-info />
        </q-header-item>
      </li>
      <li class="q-helper-menu__item q-helper-menu__item--last">
        <q-header-item
          text="0800 123 2222"
          secondary-text="Envie mensagem ou ligue"
        >
          <q-icon-whats-app class="q-helper-menu__whatsapp-icon" />
        </q-header-item>
      </li>
    </ul>
  </q-base-menu>
</template>

<script>
import QHeaderItem from './QHeaderItem'

import QIconInfo from '~/components/q-icons/QIconInfo'
import QIconWhatsApp from '~/components/q-icons/QIconWhatsApp'
import QBaseMenu from '~/components/utils/QBaseMenu'

export default {
  components: {
    QHeaderItem,
    QIconInfo,
    QIconWhatsApp,
    QBaseMenu
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

  @include media-breakpoint-down(sm) {
    background-color: $neutral-color-gray-lightest;
    box-shadow: $high-box-shadow;
    height: calc(100vh - #{$header-height});
    padding: $space-m 0;

    &::before {
      $size: 10px;

      @include triangle($size, 'bottom', $neutral-color-gray-lightest);

      left: $space-st;
      position: absolute;
      top: $size * -2;
    }
  }
}

.q-helper-menu__item {
  @include media-breakpoint-down(sm) {
    padding: $space-s $space-st $space-s $container-gap;
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
