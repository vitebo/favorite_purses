<template>
  <footer class="q-footer">
    <div class="q-footer__container">
      <ul class="q-footer__list">
        <li class="q-footer__item q-footer__item--large">
          <q-footer-item
            title="0800 123 2222"
            description="Seg - Sex 8h-22h"
            short-description="Segunda a sexta de 8h às 22h"
            modifier="large"
          >
            <q-icon-whats-app />
          </q-footer-item>
        </li>
        <li class="q-footer__item q-footer__item--small">
          <q-footer-item
            title="Chat ao vivo"
            description="Seg - Sex 8h-22h"
            short-title="Chat"
          >
            <q-icon-comments />
          </q-footer-item>
        </li>
        <li class="q-footer__item q-footer__item--small">
          <q-footer-item
            title="Mande um e-mail"
            description="Respondemos rapidinho"
            short-title="E-mail"
          >
            <q-icon-envelope />
          </q-footer-item>
        </li>
        <li class="q-footer__item q-footer__item--small">
          <q-footer-item
            title="Central de ajuda"
            description="Encontre todas as respostas"
            short-title="Ajuda"
          >
            <q-icon-info />
          </q-footer-item>
        </li>
      </ul>
      <section class="q-footer__copyright">
        Feito com
        <q-icon-base height="16px" width="26px">
          <q-icon-heart :animated="true" />
        </q-icon-base>
        pela Quero Educação
      </section>
    </div>
  </footer>
</template>

<script>
import QFooterItem from './QFooterItem'

import QIconInfo from '~/components/q-icons/QIconInfo'
import QIconWhatsApp from '~/components/q-icons/QIconWhatsApp'
import QIconComments from '~/components/q-icons/QIconComments'
import QIconEnvelope from '~/components/q-icons/QIconEnvelope'
import QIconHeart from '~/components/q-icons/QIconHeart'
import QIconBase from '~/components/q-icons/QIconBase'

export default {
  components: {
    QFooterItem,
    QIconWhatsApp,
    QIconComments,
    QIconEnvelope,
    QIconInfo,
    QIconBase,
    QIconHeart
  }
}
</script>

<style lang="scss">
.q-footer {
  background-color: $primary-color;
}

.q-footer__container {
  @extend %container;
}

.q-footer__list {
  @extend %row;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.q-footer__item {
  flex: 1 1 auto;
}

.q-footer__item--large {
  flex-basis: 100%;
}

.q-footer__item--small {
  flex-basis: 0;
  margin-right: $space-xxs;
  margin-top: $space-xxs;

  &:last-child {
    margin-right: 0;
  }
}

.q-footer__copyright {
  padding: $space-st 0;
  text-align: center;
  color: $neutral-color-white;
  font-size: $font-size-small;
}
</style>
