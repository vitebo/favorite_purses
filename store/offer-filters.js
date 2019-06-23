const DEFAULT_MAX_PRICE = 10000

export const state = () => ({
  city: null,
  course: null,
  kinds: [],
  maxPrice: DEFAULT_MAX_PRICE
})

export const mutations = {
  setCity(state, city) {
    state.city = city
  },
  setCourse(state, course) {
    state.course = course
  },
  removeKind(state, kind) {
    const index = state.kinds.indexOf(kind)

    if (index !== -1) {
      state.kinds.splice(index, 1)
    }
  },
  addKind(state, kind) {
    const index = state.kinds.indexOf(kind)

    if (index === -1) {
      state.kinds.push(kind)
    }
  },
  setMaxPrice(state, price) {
    state.maxPrice = price
  },
  clearKinds(state) {
    state.kinds = []
  }
}

export const actions = {
  reset({ commit }) {
    commit('setCity', null)
    commit('setCourse', null)
    commit('setMaxPrice', DEFAULT_MAX_PRICE)
    commit('clearKinds')
  }
}
