<script setup>
const getImageUrl = (index) => {
  // 或者如果图片在 src/assets 目录下
  return new URL(`./assets/${index}.jpg`, import.meta.url).href;
};
</script>

<template>
  <div>
      <div v-for="i in 30" :key="i">
        <img :src="getImageUrl(i)" :alt="`图片 ${i}`" />
      </div>
  </div>
</template>

<style scoped>

</style>
