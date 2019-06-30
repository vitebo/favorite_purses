export const state = () => ({
  addOfferModalIsOpen: false
})

export const mutations = {
  openModal(state) {
    state.addOfferModalIsOpen = true
  },
  closeModal(state) {
    state.addOfferModalIsOpen = false
  }
}
