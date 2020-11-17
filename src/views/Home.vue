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
    <div class="flex w-full mt-4">
      <Slider :sliders="sliderArray"></Slider>
    </div>

    <div class="flex flex-col sm:flex-row w-full m-auto p-4 bg-gray-300">
      <div class="flex-1 p-4 sm:p-8">
        <img v-if="locale=='it'" src="@/assets/fall.jpg" alt="fall">
        <img v-if="locale=='en'" src="@/assets/dark.jpg" alt="fall">
      </div>
      <div class="flex-1 p-4 sm:p-8">
        <p>{{t('home_text1')}}</p>
      </div>
    </div>
</template>

<script>
import {useI18n} from 'vue-i18n';
import Slider from '@/components/Slider'
export default {
  name: "Home",
  setup() {
    return useI18n()
  },
  components: {
    Slider,
  },
  data() {
    return {
      sliderArray: [
        {
          src: '',
          bg:'bg-blue-800',
          title: 'Esempio1',
          subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente possimus corrupti adipisci esse dolor magni debitis nostrum, sed inventore autem unde eum quod, omnis rerum aut expedita ex molestias',
          buttonLink: '#',
        },
        {
          src: '',
          bg:'bg-green-700',
          title: 'Esempio2',
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
        {
          src: '',
          bg: 'bg-indigo-400',
          title: 'No image here!',
          subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente possimus corrupti adipisci esse dolor magni debitis nostrum, sed inventore autem unde eum quod, omnis rerum aut expedita ex molestias',
          buttonLink: '#',
        },
        {
          src: '',
          bg: 'bg-pink-600',
          title: 'No image here!',
          subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente possimus corrupti adipisci esse dolor magni debitis nostrum, sed inventore autem unde eum quod, omnis rerum aut expedita ex molestias',
          buttonLink: '#',
        },
        {
          src: '',
          bg: 'bg-gray-800',
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