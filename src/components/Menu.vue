<template>
  <div class="bg-gray-900 text-indigo-200">
    <transition name="menu-transition">
      <div v-if="isMenuOpen" key="menu" class="w-screen h-screen fixed top-0 right-0 pt-32 bg-opacity-80 bg-black overflow-hidden z-10">
        <div class="flex flex-col gap-4 text-2xl text-center">
          <router-link @click="$emit('close-menu')" class="hover:text-white" to="/">{{t('home_menu')}}</router-link>
          <router-link @click="$emit('close-menu')" class="hover:text-white" to="/about">{{t('about_menu')}}</router-link>
          <router-link @click="$emit('close-menu')" class="hover:text-white" to="/gallery">{{t('gallery_menu')}}</router-link>
          <router-link @click="$emit('close-menu')" class="hover:text-white" to="/calculator">{{t('calculator_menu')}}</router-link>
          <router-link v-if="isLogged" @click="$emit('close-menu')" class="hover:text-white" to="/profile">{{t('profile_menu')}}</router-link>
          <span v-if="isLogged" @click="logout" class="cursor-pointer hover:text-white">Logout</span>
          <span v-else @click="$emit('open-login')" class="cursor-pointer hover:text-white">Login</span>
          <div class="flex justify-center items-baseline">
            <span class="cursor-pointer hover:text-white pr-1" @click="lang('it')">IT</span>
            <span class="cursor-pointer border-gray-300 border rounded-lg w-8 h-4 relative" @click="locale == 'it' ? locale = 'en' : locale= 'it'">
              <span class="absolute w-4 h-4 bg-white border rounded-lg toggle-lang" :class="locale == 'it' ? 'toggle-lang-it' : 'toggle-lang-en'"></span>
            </span>
            <span class="cursor-pointer hover:text-white pl-1" @click="lang('en')">EN</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {useI18n} from 'vue-i18n';
import firebase from '@/utilities/firebase'

export default {
  name: "Menu",
  props: {
    isMenuOpen: Boolean,
    isLogged: Boolean,
  },
  emits: ['open-login', 'close-menu'],
  setup() {
    return useI18n()
  },
  methods: {
    logout() {
      firebase.auth().signOut()
      .then( () => {
        console.log("Log out");
        this.$emit('close-menu');
        this.$router.push('/'); //go to home!

      })
      .catch((error) => {
        console.log(error);
      });
    }
  },

}
</script>

<style>
.menu-transition-enter-active,
.menu-transition-leave-active {
   transition: all .5s ease-in-out;
 }

.menu-transition-enter-from, 
.menu-transition-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.menu-transition-enter-to, 
.menu-transition-leave-from {
  /* transform: translateX(100%); */
  opacity: 1;
}


</style>