<template>
  <div class="w-full m-auto bg-gray-900 text-indigo-200">
    <nav class="flex flex-wrap items-center justify-between py-4 px-6">
      <div class="flex-shrink-0 z-20" @click="isOpen=false">
        <router-link class="hover:text-white" to="/">
          <img alt="Vue logo" class="w-auto h-16" src="@/assets/logo.png">
        </router-link>
      </div>
      <button class="border-gray-100 z-20" @click="isOpen = !isOpen" type="button" >
        <transition name="fade" mode="out-in">
          <svg v-if="isOpen" key="open" class="h-8 w-8 fill-current" viewBox="0 0 24 24">
            <path  fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
          </svg>
          <svg v-else key="close" class="h-8 w-8 fill-current" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </transition>
      </button>
    </nav>
  </div>
  <div class="bg-gray-900 text-indigo-200">
    <transition name="header">
      <div v-if="isOpen" key="menu" class="w-screen h-screen fixed top-0 right-0 pt-32 bg-opacity-80 bg-black overflow-hidden z-10">
        <div class="flex flex-col gap-4 text-2xl text-center">
          <router-link @click="isOpen=false" class="hover:text-white" to="/">{{t('home_menu')}}</router-link>
          <router-link @click="isOpen=false" class="hover:text-white" to="/about">{{t('about_menu')}}</router-link>
          <router-link @click="isOpen=false" class="hover:text-white" to="/gallery">{{t('gallery_menu')}}</router-link>
          <span v-if="isLogged" @click="logout" class="cursor-pointer hover:text-white">Logout</span>
          <span v-else @click="openLogin" class="cursor-pointer hover:text-white">Login</span>
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
  <Login v-if="isLoginOpen" @close-login="isLoginOpen=false" />
</template>

<script>
import {useI18n} from 'vue-i18n';
import Login from '@/components/Login'
import firebase from '@/utilities/firebase'

export default {
  name: 'Header',
  components: {
    Login
  },
  props: {
    isLogged: Boolean
  },
  setup() {
    return useI18n()
  },
  methods: {
    lang(l) {
      this.locale = l;
      // console.log(l)
    },
    openLogin() {
      this.isOpen = false;
      this.isLoginOpen = true;
      console.log("openLogin")
    },
    logout() {
      firebase.auth().signOut()
      .then( () => {
        console.log("Log out");
        this.isOpen = false;
      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
  data() {
    return {
      isOpen: false,
      isLoginOpen: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.fade-enter-active,
.fade-leave-active {
   transition: all .1s ease-in-out;
 }

.fade-enter-from, 
.fade-leave-to {
  transform: rotateY(90deg);
  opacity: 0;
}
.fade-enter-to, 
.fade-leave-from {
  transform: rotateY(90deg);
  opacity: 1;
}

.header-enter-active,
.header-leave-active {
   transition: all .5s ease-in-out;
 }

.header-enter-from, 
.header-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.header-enter-to, 
.header-leave-from {
  /* transform: translateX(100%); */
  opacity: 1;
}

.toggle-lang {
  top: -1px;
}

.toggle-lang-it {
  left: -1px;
}
.toggle-lang-en {
  left: 1rem;
}
</style>
