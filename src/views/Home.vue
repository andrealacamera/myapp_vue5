<template>
  <h1 class="text-3xl h-32 bg-orange-800 text-orange-100 flex justify-center items-center">{{t('home_title')}}</h1>
    
    <div class="flex flex-col sm:flex-row w-full m-auto p-4 bg-gray-300">
      <div class="flex-1 p-4 sm:p-8">
        <img v-if="locale=='it'" src="@/assets/fall.jpg" alt="fall">
        <img v-if="locale=='en'" src="@/assets/dark.jpg" alt="fall">
      </div>
      <div class="flex-1 p-4 sm:p-8">
        <p>{{t('home_text1')}}</p>
      </div>
    </div>


    <div class="flex flex-col-reverse sm:flex-row w-full m-auto mt-4 p-4 bg-gray-300">
      <div class="flex-1 p-4 sm:p-8">
        <p>{{t('home_text2')}}</p>
      </div>
      <div class="flex-1 p-4 sm:p-8">
        <img v-if="locale=='en'" src="@/assets/fall.jpg" alt="fall">
        <img v-if="locale=='it'" src="@/assets/dark.jpg" alt="fall">
      </div>
          </div>
</template>

<script>
import {useI18n} from 'vue-i18n';

export default {
  name: "Home",
  setup() {
    return useI18n()
  },
}
</script>

<style>

</style>