<template>
  <div class="vert-carousel">
    <small-icon class="small-btn-white">↑</small-icon>
    <div class="thumbnail" v-for="thumbnail in thumbnails" :key="thumbnail.id">
      <img class="thumbnail-img" :src="thumbnail.src" alt="thumbnail image" />
      <img
        class="close-btn"
        src="../../assets/icons/close-white.svg"
        alt="close btn"
      />
    </div>
    <small-icon class="small-btn-white">↓</small-icon>
  </div>
</template>
<script>
export default {
  name: "vert-carousel",
  data() {
    return {
      warning: true,
      thumbnails: [
        { id: 12, src: "src/assets/images/01B00022.jpg" },
        { id: 2, src: "src/assets/images/01B00015.jpg" },
        { id: 3, src: "src/assets/images/01B00026.jpg" },
        { id: 4, src: "src/assets/images/01B00038.jpg" },
        { id: 5, src: "src/assets/images/01C00013.jpg" },
      ],
    };
  },
};
</script>
<style scoped>
.vert-carousel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 13%;
  border-left: 1px solid #000;
  background-color: #f5f5f5;
  gap: 1rem;
  padding: 1rem 0.5rem;
}

.thumbnail {
  width: 100%;
  height: 17%;
  position: relative;
  border: 1px dotted #000;
  border-radius: 16px;
}

.thumbnail:hover {
  background-color: rgba(16, 16, 15, 0.88);
}

.thumbnail-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 20px;
  width: 20px;
  opacity: 0;
  visibility: 0;
  cursor: pointer;
}

.thumbnail:hover .close-btn {
  opacity: 1;
  visibility: visible;
}

.small-btn-white {
  background: #fff;
  color: #000;
}
</style>
