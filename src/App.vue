<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import Header from './components/Header.vue'
import firebase from './utilities/firebase'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Header
  },
  methods: {
    ...mapActions('login', ['setIsLogged', 'setUser'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setIsLogged(true);
        this.setUser(user);
      } else {
        this.setIsLogged(false);
        this.setUser(null);
      }
    });    
  }
}
</script>

<style>
</style>
