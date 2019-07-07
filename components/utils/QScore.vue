<template>
  <div class="q-score">
    <strong class="q-score__grade">{{ formatedGrade }}</strong>
    <ul class="q-score__stars">
      <li class="q-score__star" v-for="index in 5" :key="index">
        <q-icon-base>
          <component :is="getStar(index)" />
        </q-icon-base>
      </li>
    </ul>
  </div>
</template>

<script>
import QIconBase from '~/components/q-icons/QIconBase'
import QIconStar from '~/components/q-icons/QIconStar'
import QIconStarHalf from '~/components/q-icons/QIconStarHalf'
import QIconStarEmpty from '~/components/q-icons/QIconStarEmpty'

export default {
  components: {
    QIconBase
  },
  props: {
    grade: {
      type: Number,
      default: 0
    }
  },
  computed: {
    formatedGrade() {
      if (String(this.grade).length === 1) {
        return `${this.grade}.0`
      }

      return this.grade
    }
  },
  methods: {
    getStar(index) {
      if (index <= this.grade) {
        return QIconStar
      }

      if (index >= this.grade + 1) {
        return QIconStarEmpty
      }

      return QIconStarHalf
    }
  }
}
</script>

<style lang="scss">
.q-score {
  align-items: center;
  display: flex;
  justify-content: center;
}

.q-score__grade {
  margin-right: $space-s;
  margin-top: $space-xs;
}

.q-score__stars {
  color: $secondary-color;
  display: flex;
  list-style: none;
  justify-content: center;
  padding-left: 0;
}

.q-score__star {
  @include size(22px);
  margin: $space-xxs;
}
</style>
