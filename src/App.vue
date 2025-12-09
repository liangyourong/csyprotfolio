<script setup>
const getImageUrl = (index) => {
  // 或者如果图片在 src/assets 目录下
  return new URL(`./assets/${index}.jpg`, import.meta.url).href;
};
</script>

<template>
  <!-- 外层容器：统一控制图片列表的居中与宽度 -->
  <div class="image-container">
    <div v-for="i in 33" :key="i" class="image-item">
      <img 
        :src="getImageUrl(i)" 
        :alt="`图片 ${i}`" 
        class="custom-img"
      />
    </div>
  </div>
</template>

<style scoped>
/* 外层容器：确保图片列表整体居中，宽度为屏幕80% */
.image-container {
  width: 80vw; /* 核心：宽度占屏幕80%（视口宽度单位） */
  margin: 0 auto; /* 核心：水平居中 */
  padding: 0;
}

/* 每张图片的包裹项（可选：添加图片间距） */
.image-item {
  width: 100%; /* 继承外层80%屏幕宽度 */
  margin-bottom: 16px; /* 可选：图片之间的间距，可根据需求调整 */
}

/* 核心图片样式 */
.custom-img {
  width: 100%; /* 宽度占满父容器（即屏幕80%） */
  height: auto; /* 关键：高度按原图宽高比自动适配 */
  display: block; /* 消除图片默认的行内底部空白间隙 */
  object-fit: contain; /* 可选：确保图片完整显示（不裁剪、不拉伸） */
}

/* 可选：响应式优化（小屏幕下调整宽度） */
@media (max-width: 768px) {
  .image-container {
    width: 90vw; /* 移动端占屏幕90%，体验更好 */
  }
}
</style>
