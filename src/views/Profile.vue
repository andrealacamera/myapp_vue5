<template>
  <h1 class="text-3xl h-32 bg-green-700 text-green-100 flex justify-center items-center">{{t('profile_title')}}</h1>
      
  <div class="flex flex-col sm:flex-row w-full m-auto p-4 bg-green-300">
    <div class="flex-1 p-4 sm:p-8">
      <img src="@/assets/benches.jpg" alt="fall">
    </div>
    <div class="flex-1 p-4 sm:p-8">
      <p>{{t('profile_text1')}}</p>
    </div>
  </div>

  <div class="flex flex-col sm:flex-row w-full m-auto p-4 bg-gray-300">
    <div class="p-4 sm:p-8">
      <svg width="100px" height="100px" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
        <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
        </svg> 
    </div>
    <div class="flex-1 p-4 sm:p-8">
      <p>Username: {{user.email}}</p>
      <p>Full Name: {{user.displayName===null? '---': user.displayName}}</p>
      <p>Created: {{user.metadata.creationTime}}</p>
      <p>Last sign-in: {{user.metadata.lastSignInTime}}</p>
    </div>
  </div>


</template>

<script>
import {useI18n} from 'vue-i18n';
// import firebase from '@/utilities/firebase'
import {mapState} from 'vuex'

export default {
  name: "Profile",

  setup() {
    return useI18n()
  },
  computed: {
    ...mapState({
    user: state => state.login.userAuth
    }),
  },
}
</script>

<style>

</style>