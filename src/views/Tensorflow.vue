<template>
  <h1 class="text-3xl h-32 bg-pink-800 text-pink-100 flex justify-center items-center">{{t('detect_title')}}</h1>

  <div class="flex w-full flex-wrap justify-center">
    <div class="m-auto">

      <div class="mt-10">
        <p>{{t('detect_img')}}:</p>
        <div class="flex justify-center">
          <button class="mx-2 px-2 my-1 py-1 border bg-gray-400 text-pink-800 rounded" v-for="(src,i) in imgSrc" :key="src" @click="index=i">{{i+1}}</button>
        </div>
      </div>
      <div class="mt-2 ">
        <img :src="imgSrc[index]" alt="img" width="280" ref="imgRef">
        <div class="mt-4 flex justify-center">
          <button @click="detect" class=" py-2 px-4 border rounded bg-pink-800 text-pink-100 hover:text-white">
            <span v-if="isLoading">Loading...</span>
            <span v-else>{{t('detect_button')}}</span>
            </button>
        </div>
      </div>
      <div v-if="result.length > 0" class="my-8 p-2 bg-gray-400">
        <div class="border p-2" v-for="(res,i) in result" :key="i">
          <p class="text-lg"> {{t('detect_result')}} #{{i+1}}: {{res.class}}</p>
          <p class="text-sm"> {{t('detect_score')}}: {{res.score}}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
require('@tensorflow/tfjs-backend-cpu');
// require('@tensorflow/tfjs-backend-webgl');
// const cocoSsd = require('@tensorflow-models/coco-ssd');
import * as cocoSsd from '@tensorflow-models/coco-ssd'

export default {

setup() {
  const { t } = useI18n();
  const imgRef = ref('');
  const imgSrc = ref([]);
  const result = ref([]);
  const isLoading = ref(false);
  const index = ref(0);

  imgSrc.value = [
    require('@/assets/cat.jpg'),
    require('@/assets/coffee.jpg'), 
    require('@/assets/benches.jpg'),
    require('@/assets/iphone.jpg'), 
    require('@/assets/pc.jpg')
  ]

  async function detect() {
    result.value=[];
    isLoading.value = true;
    const img = imgRef.value;
    // Load the model.
    const model = await cocoSsd.load();
    
    // Classify the image.
    const predictions = await model.detect(img);
    console.log('Predictions: ', predictions);
    isLoading.value = false;
    result.value = predictions;
  }

  // onMounted( () => { detect(); })

  return { t, imgRef, imgSrc, index, result, detect, isLoading }
}

}
</script>

<style>

</style>