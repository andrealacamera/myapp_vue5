import  { createStore } from 'vuex'
import login from './modules/login'
import menu from './modules/menu'

const store = createStore({
  modules: {
    login,
    menu
  }
})

export default store;
