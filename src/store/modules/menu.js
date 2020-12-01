

const state = () => ({
  isMenuOpen: false
})

const getters = {

}

const actions = {
  toggleMenu({commit}) {
    commit("toggleMenu");
  },
  closeMenu({commit}) {
    commit("closeMenu");
  }
}

const mutations = {
  toggleMenu: (state) => state.isMenuOpen = !state.isMenuOpen,
  closeMenu: (state) => state.isMenuOpen = false
  }


export default { state, getters, actions, mutations, namespaced: true} 