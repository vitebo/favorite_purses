<template>
  <footer class="q-footer">
    <ul class="q-footer__list">
      <li class="q-footer__item">
        <q-footer-item
          title="0800 123 2222"
          description="Seg - Sex 8h-22h"
          short-description="Segunda a sexta de 8h às 22h"
        >
          <q-icon-whats-app />
        </q-footer-item>
      </li>
      <li class="q-footer__item">
        <q-footer-item
          title="Chat ao vivo"
          description="Seg - Sex 8h-22h"
          short-title="Chat"
        >
          <q-icon-comments />
        </q-footer-item>
      </li>
      <li class="q-footer__item">
        <q-footer-item
          title="Mande um e-mail"
          description="Respondemos rapidinho"
          short-title="E-mail"
        >
          <q-icon-envelope />
        </q-footer-item>
      </li>
      <li class="q-footer__item">
        <q-footer-item
          title="Central de ajuda"
          description="Encontre todas as respostas"
          short-title="Ajuda"
        >
          <q-icon-info />
        </q-footer-item>
      </li>
    </ul>
  </footer>
</template>

<script>
import QFooterItem from './QFooterItem'

import QIconInfo from '~/components/q-icons/QIconInfo'
import QIconWhatsApp from '~/components/q-icons/QIconWhatsApp'
import QIconComments from '~/components/q-icons/QIconComments'
import QIconEnvelope from '~/components/q-icons/QIconEnvelope'

export default {
  components: {
    QFooterItem,
    QIconWhatsApp,
    QIconComments,
    QIconEnvelope,
    QIconInfo
  }
}
</script>

<style lang="scss">
.q-footer {
  background-color: $primary-color-dark;
}

.q-footer__list {
  @extend %container;
  display: flex;
  list-style: none;
}

.q-footer__item {
  flex: 1;
}
</style>
