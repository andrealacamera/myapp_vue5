import  { createStore } from 'vuex'

const store = createStore({
  store() {
    return  {
      a: 123
    }
  }
})

export default store;
