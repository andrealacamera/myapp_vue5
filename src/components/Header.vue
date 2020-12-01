<template>
  <div class="w-full m-auto bg-gray-900 text-indigo-200">
    <nav class="flex flex-wrap items-center justify-between py-4 px-6">
      <div class="flex-shrink-0 z-20" @click="closeMenu">
        <router-link class="hover:text-white" to="/">
          <img alt="Vue logo" class="w-auto h-16" src="@/assets/logo.png">
        </router-link>
      </div>
      <button class="border-gray-100 z-20" @click="toggleMenu" type="button" >
        <transition name="fade" mode="out-in">
          <svg v-if="isMenuOpen" key="open" class="h-8 w-8 fill-current" viewBox="0 0 24 24">
            <path  fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
          </svg>
          <svg v-else key="close" class="h-8 w-8 fill-current" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </transition>
      </button>
    </nav>
  </div>
  <Menu />
  <Login v-if="isLoginOpen" />
</template>

<script>
import {useI18n} from 'vue-i18n';
import Login from '@/components/Login'
import Menu from '@/components/Menu'
import { mapActions, mapState } from 'vuex';
// import firebase from '@/utilities/firebase'

export default {
  name: 'Header',
  components: {
    Login, Menu
  },
  setup() {
    return useI18n()
  },
  methods: {
    ...mapActions('menu', ['toggleMenu', 'closeMenu']),
    ...mapActions('login', ['toggleLogin']),
    lang(l) {
      this.locale = l;
    },
    toggle() {
      this.toggleMenu;
      this.toggleLogin;
    }
  },
  computed: {
    ...mapState({
      isLoginOpen: state => state.login.isLoginOpen, 
      isMenuOpen: state => state.menu.isMenuOpen,
      user: state => state.login.userAuth,
      })
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
