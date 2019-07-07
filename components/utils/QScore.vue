<template>
  <div class="q-score">
    <strong class="q-score__grade">4.5</strong>
    <ul class="q-score__stars">
      <li class="q-score__star">
        <q-icon-base>
          <q-icon-star />
        </q-icon-base>
      </li>
      <li class="q-score__star">
        <q-icon-base>
          <q-icon-star />
        </q-icon-base>
      </li>
      <li class="q-score__star">
        <q-icon-base>
          <q-icon-star />
        </q-icon-base>
      </li>
      <li class="q-score__star">
        <q-icon-base>
          <q-icon-star-half />
        </q-icon-base>
      </li>
      <li class="q-score__star">
        <q-icon-base>
          <q-icon-star-empty />
        </q-icon-base>
      </li>
    </ul>
  </div>
</template>

<script>
import QIconBase from '~/components/q-icons/QIconBase'
import QIconStar from '~/components/q-icons/QIconStar'
import QIconStarEmpty from '~/components/q-icons/QIconStarEmpty'
import QIconStarHalf from '~/components/q-icons/QIconStarHalf'

export default {
  components: {
    QIconBase,
    QIconStar,
    QIconStarHalf,
    QIconStarEmpty
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
