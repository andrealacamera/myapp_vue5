<template>
    <div class="flex flex-wrap w-full relative" :style="{height: sliderHeight+'px'}" @touchstart="touchstart($event)" @touchmove="touchmove($event)">
      <div v-for="(slider, index) in sliders" :key="index" class=" absolute w-full overflow-hidden">
        <transition :name="sliderName">
          <figure v-if="currentSlide===index" :style="{height: sliderHeight+'px'}">
            <img class="opacity-75" v-if="slider.src" :src="slider.src" :alt="slider.title">
            <div v-else :class="slider.bg" :style="{height: sliderHeight+'px'}"></div>
            <figcaption>
              <section class="absolute top-0 left-0 p-8 flex flex-col justify-center items-center">
                <h1 class="text-xl sm:text-2xl md:text-3xl text-white">{{slider.title}}</h1>
                <span class="text-base text-white">{{slider.subtitle}}</span>
                <a class="mt-2 bg-blue-500 text-gray-200 hover:text-white rounded-md px-2 py-1 cursor-pointer" :href="slider.buttonLink">{{t('read_more')}}</a>
              </section>
            </figcaption>
          </figure>
        </transition>
      </div>
      <div class="absolute  bottom-0 py-2 w-full"> 
        <div class="w-full flex justify-center"> 
          <div v-for="(slider, index) in sliders" :key="index" class="cursor-pointer w-3 h-3 rounded-full mx-1 sm:mx-2" :class="currentSlide===index ? 'bg-gray-700' : 'bg-gray-300'" @click="changeSlide(index)"></div>
        </div>
      </div>
    </div>
</template>

<script>
import {useI18n} from 'vue-i18n'

export default {
  name: "Slider",
  setup() {
    return useI18n()
  },
  props: {
    sliders: {
      type: Array,
    }
  },
  data() {
    return {
      currentSlide: 0,
      interval: null,
      duration: 3500,
      reverse: false,
      // colors: ['bg-blue-600','bg-green-800', 'bg-gray-800','bg-yellow-400', 'bg-teal-400', 'bg-red-600'],
      sliderHeight: 350,
      swipeX:null,
    }
  },
  computed: {
    sliderName() {
      return this.reverse ? 'slider-rev' : 'slider';
    }
  },
  methods: {
    // enterSlider(s) {
      //   // console.log(s);
    // },
    touchstart(event) {
      this.swipeX = event.touches[0].clientX;
      this.stopSlider();

    },
    touchmove(event) {
      var deltaX= event.touches[0].clientX - this.swipeX;
      if (deltaX > 100 && this.swipeX) {
        this.stopSlider();
        //swipe from left to right --> previous slide
        this.currentSlide = this.currentSlide===0 ? this.sliders.length-1 : this.currentSlide-1;
        this.swipeX = null;
        this.reverse=true;
        this.playSlider();
        console.log(deltaX, '-->', this.currentSlide);

      } 
      if (deltaX < -100 && this.swipeX) {
        this.stopSlider();
        //swipe from right to left --> next slide
        this.currentSlide = this.currentSlide===this.sliders.length-1 ? 0 : this.currentSlide+1;
        this.swipeX = null;
        this.reverse = false;
        this.playSlider();
        console.log(deltaX, '-->', this.currentSlide);
      }

    },
    changeSlide(i) {
      this.stopSlider();
      this.reverse = (i < this.currentSlide);
      this.currentSlide = i;
      this.playSlider();
    },
    playSlider() {
      this.interval = setInterval(() => {
        this.reverse = false;
        this.currentSlide = this.currentSlide===this.sliders.length-1 ? 0 : this.currentSlide+1;
        }, this.duration);
      // console.log("start [" + this.interval + "]");

    },
    stopSlider() {
      // console.log("stop [" + this.interval + "]");
      clearInterval(this.interval);
    }
  },
  mounted() {
    this.playSlider();
  },
  beforeUnmount() {
    this.stopSlider();
  },
}
</script>

<style>
.slider-enter-active,
.slider-leave-active,
.slider-rev-enter-active,
.slider-rev-leave-active {
  transition: all .75s cubic-bezier(0.55, 0.085, 0.68, 0.53)
}

.slider-enter-from, 
.slider-rev-leave-to{
  /* opacity: 0; */
  transform: translateX(100%);
  -webkit-transform: translateX(100%);
}
.slider-leave-to,
.slider-rev-enter-from {
  /* opacity: 0; */
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
}
</style>