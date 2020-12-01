<template>
  <div class="z-10 fixed top-0 bg-indigo-200 bg-opacity-50 w-screen h-screen" @click="closeAll">
  </div>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto bg-white p-2 rounded shadow z-20">
        <div class="p-2 border-gray-600">
          <h1 class="text-2xl text-center">Login</h1>
          <form class="p-2 mx-2 mb-2" @submit.prevent="submit">
            <div class="my-4">
              <label class="text-base">Email</label>
              <input type="text" class="w-full rounded p-2 border shadow" v-model="email" />
            </div>
            <div class="my-4">
              <label class="text-base">Password</label>
              <input type="password" class="w-full rounded p-2 border shadow" v-model="password" />
            </div>
            <div class="flex flex-col items-center my-4 ">
              <button class="w-1/2 p-2 rounded bg-gradient-to-b from-blue-500 to-blue-900 text-gray-200 hover:text-white" type="submit" :class="[{'cursor-not-allowed' : nosubmit}, {'opacity-50': nosubmit}]" :disabled="nosubmit||loading">
              <span v-if="loading" class="animate-spin h-4 w-4">Loading...</span>
              <span v-else >Login</span>
              </button>
              <div v-if="message.length>0" class="bg-red-300 text-red-900 text-xs rounded my-4 p-2 w-2/3">
                <span>{{message}}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/utilities/firebase'
import { mapActions } from 'vuex';

export default {
  name: "Login",
  data(){
    return {
      email: "info@teiga.it",
      password: "AzAnCrMa:2020",
      loading: false,
      message: '',
    }
  },
  computed: {
    nosubmit() {
      return (this.email.length==0) || (this.password.length==0);
    }
  },
  methods: {
    ...mapActions('login', ['toggleLogin']),
    ...mapActions('menu', ['toggleMenu']),
    submit() {
      this.loading= true;
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then( () => {
        this.email='';
        this.password='';
        this.loading=false;
        this.closeAll();
      })
      .catch( (error) => {
        this.loading=false;
        this.message= error.message;
        console.log(error);
      });    
    },
    closeAll() {
      this.toggleLogin();
      this.toggleMenu();
    }
  }
}
</script>

<style>

</style>