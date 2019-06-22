export const state = () => ({
  city: null,
  course: null,
  kinds: [],
  maxPrice: 10000
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
  }
}
