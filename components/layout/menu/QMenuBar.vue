<template>
  <div class="q-menu-bar">
    <strong class="q-menu-bar__title">Minha conta</strong>
    <div>
      <button class="q-menu-bar__target">
        Menu
      </button>
      <ul class="q-menu-bar__list">
        <li>Pré-matriculas</li>
        <li>Bolsas favoritas</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.q-menu-bar {
  align-items: center;
  background: $primary-color;
  color: $neutral-color-white;
  display: flex;
  justify-content: space-between;
}

.q-menu-bar__title {
  padding: $space-m;
}

.q-menu-bar__target {
  background-color: transparent;
  border: none;
  color: $neutral-color-white;
  font-size: $font-size-normal;
  font-weight: $font-weight-bold;
  padding: $space-m;

  @include media-breakpoint-up(sm) {
    display: none;
  }
}

.q-menu-bar__list {
  list-style: none;
  padding-left: 0;

  @include media-breakpoint-down(sm) {
    display: none;
  }
}
</style>
