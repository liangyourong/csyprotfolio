<script setup>
const getImageUrl = (index) => {
  // 或者如果图片在 src/assets 目录下
  return new URL(`./assets/${index}.jpg`, import.meta.url).href;
};
</script>

<template>
  <!-- 循环渲染30张图片，外层容器可选（用于统一控制） -->
  <div class="image-list">
    <div v-for="i in 30" :key="i" class="image-wrapper">
      <img 
        :src="getImageUrl(i)" 
        :alt="`图片 ${i}`" 
        class="full-width-img"
      />
    </div>
  </div>
</template>

<style scoped>
/* 重置默认样式，消除内外边距影响 */
.image-list {
  margin: 0;
  padding: 0;
}

/* 图片外层包裹器（可选，用于隔离每张图片） */
.image-wrapper {
  width: 100vw; /* 占满屏幕宽度（也可用100%） */
  margin: 0 auto; /* 居中（针对非100%宽度场景） */
  /* 可选：添加图片间距 */
  margin-bottom: 8px;
}

/* 核心图片样式 */
.full-width-img {
  width: 100%; /* 宽度强制占满父容器（屏幕宽度） */
  height: auto; /* 高度自动按原图比例适配（关键属性） */
  display: block; /* 消除图片默认的行内间隙（底部空白） */
  /* 可选：防止图片拉伸变形，保持比例 */
  object-fit: contain; 
}
</style>