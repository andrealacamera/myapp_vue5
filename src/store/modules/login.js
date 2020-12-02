const state = () => ({
  isLogged: false,
  userAuth: null,
  isLoginOpen: false
})

const getters = {

}

const actions = {
  setIsLogged({commit}, s) {
    commit("setIsLogged", s);
  }, 
  setUser({commit}, user) {
    commit("setUser", user);
  },
  toggleLogin({commit}) {
    commit("toggleLogin");
  }
}

const mutations = {
  setIsLogged(state, s) {
    state.isLogged = s;
  },
  setUser(state, user) {
    state.userAuth = user;
  },
  toggleLogin(state) {
    state.isLoginOpen = !state.isLoginOpen;
  }
}


export default { state, getters, actions, mutations, namespaced: true} 