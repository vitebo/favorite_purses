export const state = () => ({
  offers: []
})

export const mutations = {
  addOffer(state, offerToAdd) {
    const hasOffer = state.offers.some(offer => offer.id === offerToAdd.id)

    if (!hasOffer) {
      state.offers.push(offerToAdd)
    }
  },
  removeOffer(state, offerToRemove) {
    state.offers = state.offers.filter(offer => offer.id !== offerToRemove.id)
  }
}

export const actions = {
  initialize({ commit }) {
    const offersSaved = JSON.parse(localStorage.getItem('offers')) || []
    offersSaved.forEach(offer => commit('addOffer', offer))
  },
  addOffers({ commit, state }, offers) {
    if (offers.length === 0) {
      return
    }

    offers.forEach(offer => commit('addOffer', offer))
    localStorage.setItem('offers', JSON.stringify(state.offers))
  },
  removeOffer({ commit, state }, offer) {
    commit('removeOffer', offer)
    localStorage.setItem('offers', JSON.stringify(state.offers))
  }
}
