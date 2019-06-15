<template>
  <footer class="q-footer">
    <q-footer-group-items :items="items" />
    <q-copyright />
  </footer>
</template>

<script>
import QFooterGroupItems from './QFooterGroupItems'
import QCopyright from './QCopyright'

import QIconInfo from '~/components/q-icons/QIconInfo'
import QIconWhatsApp from '~/components/q-icons/QIconWhatsApp'
import QIconComments from '~/components/q-icons/QIconComments'
import QIconEnvelope from '~/components/q-icons/QIconEnvelope'

export default {
  components: {
    QFooterGroupItems,
    QCopyright
  },
  data() {
    return {
      items: [
        {
          modifier: 'large',
          title: '0800 123 2222',
          description: 'Seg - Sex 8h-22h',
          shortDescription: 'Segunda a sexta de 8h às 22h',
          icon: QIconWhatsApp
        },
        {
          modifier: 'small',
          title: 'Chat ao vivo',
          description: 'Seg - Sex 8h-22h',
          shortTitle: 'Chat',
          icon: QIconComments
        },
        {
          modifier: 'small',
          title: 'Mande um e-mail',
          description: 'Respondemos rapidinho',
          shortTitle: 'E-mail',
          icon: QIconEnvelope
        },
        {
          modifier: 'small',
          title: 'Central de ajuda',
          description: 'Encontre todas as respostas',
          shortTitle: 'Ajuda',
          icon: QIconInfo
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.q-footer {
  background-color: $primary-color;
}
</style>
