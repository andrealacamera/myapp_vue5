<template>
    <div v-for="(img,index) in images" :key="index"> 
      <div class="image">
        <img :src="img.url" :alt="img.alt">
      </div>
    </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    images: Array
  },
  mounted() {
    console.log(this.images);
  }
}
</script>

<style>
.image {
  border: 1px solid #222;
  width: 100%;
  height: auto;
}

.slider-enter-active{
  opacity: 0;
}
.slider-leave-active {
  opacity: 1;
}
</style>