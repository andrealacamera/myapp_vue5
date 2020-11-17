<template>
  <h1 class="text-3xl h-32 bg-blue-700 text-blue-200 flex justify-center items-center">{{t('gallery_title')}}</h1>
  <div class="relative flex w-full md:w-2/4 m-auto">
    <Slider :sliders="sliderArray"></Slider>
  </div>
  <div class="flex w-full bg-indigo-700 h-full">
    <h1 class="text-red-500">
      PROVA 
    </h1>
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
  },
  data() {
    return {
      sliderArray: [
        {
          src: require('@/assets/coffee.jpg'),
          title: 'Coffee Time',
          subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente possimus corrupti adipisci esse dolor magni debitis nostrum, sed inventore autem unde eum quod, omnis rerum aut expedita ex molestias',
          buttonLink: '#',
        },
        {
          src: require('@/assets/gummy.jpg'),
          title: 'Gnummy!',
          subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente possimus corrupti adipisci esse dolor magni debitis nostrum, sed inventore autem unde eum quod, omnis rerum aut expedita ex molestias',
          buttonLink: '#',
        },
        {
          src: '',
          bg: 'bg-red-800',
          title: 'No image here!',
          subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente possimus corrupti adipisci esse dolor magni debitis nostrum, sed inventore autem unde eum quod, omnis rerum aut expedita ex molestias',
          buttonLink: '#',
        },
      ]
    }
  }
}

</script>

<style>

</style>