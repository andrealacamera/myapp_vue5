<template>
  <Header :is-logged="isLogged"/>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import Header from './components/Header.vue'
import firebase from './utilities/firebase'

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      isLogged:false,
      userAuth: {}
    }
  },
  updated() {
    console.log("app update --> ", this.isLogged);
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLogged = true;
        this.userAuth = user;
      } else {
        this.isLogged = false;
        this.userAuth = {};
      }
  });
  }
}
</script>

<style>
</style>
