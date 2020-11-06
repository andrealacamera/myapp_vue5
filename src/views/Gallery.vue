<template>
<h1 class="text-3xl h-32 bg-blue-700 text-blue-200 flex justify-center items-center">{{t('gallery_title')}}</h1>
  <div class="photo flex w-full m-auto">
    <Slider > </Slider>
  </div>
</template>

<script>
import {useI18n} from 'vue-i18n'
import Slider from '@/components/Slider'

export default {
  name: "Gallery",
  setup() {
    return useI18n()
  },
  components: {
    Slider
  }
}
</script>

<style>

</style>