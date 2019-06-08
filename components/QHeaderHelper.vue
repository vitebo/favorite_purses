<template>
  <div class="q-header-helper">
    <q-header-item text="Ajuda" class="q-header-helper__target">
      <q-icon-info />
    </q-header-item>
    <ul class="q-header-helper__list">
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
  </div>
</template>

<script>
import QIconBase from '~/components/QIconBase'
import QIconInfo from '~/components/q-icons/QIconInfo'
import QIconWhatsApp from '~/components/q-icons/QIconWhatsApp'
import QHeaderItem from '~/components/QHeaderItem'

export default {
  components: {
    QIconBase,
    QIconInfo,
    QIconWhatsApp,
    QHeaderItem
  }
}
</script>

<style lang="scss">
.q-header-helper__list {
  background-color: #f5f5f5;
  box-shadow: $high-box-shadow;
  position: absolute;
  left: 0;
  top: 64px;
  height: calc(100vh - 64px);
  margin-top: 0;
  padding: $space-m $space-st $space-m 0;

  &::before {
    $triangle-size: 10px;
    border: $triangle-size solid transparent;
    border-bottom-color: #f5f5f5;
    content: '';
    height: 0;
    left: $space-st;
    position: absolute;
    top: $triangle-size * -2;
    width: 0;
  }
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
