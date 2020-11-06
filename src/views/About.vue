<template>
<h1 class="text-3xl h-32 bg-green-100 text-green-800 flex justify-center items-center">{{t('about_title')}}</h1>
    
    <div class="flex flex-col sm:flex-row w-full m-auto p-4 bg-green-300">
      <div class="flex-1 p-4 sm:p-8">
        <img src="@/assets/coffee.jpg" alt="fall">
      </div>
      <div class="flex-1 p-4 sm:p-8">
        <p>{{t('about_text1')}}</p>
      </div>
    </div>



</template>

<script>
import {useI18n} from 'vue-i18n';

export default {
  name: "About",
  setup() {
    return useI18n()
  },
}
</script>

<style>

</style>