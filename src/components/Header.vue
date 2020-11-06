<template>
  <div class="w-full m-auto p-4 bg-gray-900 text-indigo-200" >
    <nav class="flex flex-wrap items-center justify-between py-2 px-4">
      <div class="logo flex-shrink-0">
        <router-link class="hover:text-white" to="/">
          <img alt="Vue logo" class="w-auto h-16" src="@/assets/logo.png">
        </router-link>
      </div>
      <div class="hidden sm:block sm:flex-grow pl-4">
        <router-link class="hover:text-white" to="/">{{t('home_menu')}}</router-link> | 
        <router-link class="hover:text-white" to="/about">{{t('about_menu')}}</router-link> |
        <router-link class="hover:text-white" to="/gallery">{{t('gallery_menu')}}</router-link>
      </div>
      <div class="hidden sm:flex sm:justify-end gap-1 ">
          <span class="cursor-pointer hover:text-white" @click="lang('it')">IT</span> |        
          <span class="cursor-pointer hover:text-white" @click="lang('en')">EN</span>
      </div>
      <button class="sm:hidden border-gray-100" @click="isOpen = !isOpen" type="button">
        <svg class="h-8 w-8 fill-current" viewBox="0 0 24 24">
          <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
          <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
        </svg>
      </button>
    </nav>
  </div>
</template>

<script>
import {useI18n} from 'vue-i18n';

export default {
  name: 'Header',
  setup() {
    return useI18n()
  },
  methods: {
    lang(l) {
      this.locale = l;
      // console.log(l)
    }
  },
  data() {
    return {
      isOpen: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
