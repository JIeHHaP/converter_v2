<template>
  <div class="carousel">
    <div class="thumb-wrapper" v-for="thumb in thumbs" :key="thumb.id">
      <img class="thumb-img" :src="thumb.src" alt="thumb-preview" />
    </div>
  </div>
</template>

<script>
export default {
  name: "gallery-carousel",
  data() {
    return {
      thumbs: [
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
<style>
.carousel {
  height: 10em;
  width: 50em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.2em;
}

.thumb-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 1px dotted #000;
  border-radius: 16px;
  padding: 8px;
  background-color: #f5f5f5;
  z-index: 1;
  transition: color 0.3s ease, background-color 0.3s ease, opacity 0.3s ease;
}

.thumb-wrapper:hover {
  color: #f5f5f5;
  background-color: rgba(15, 15, 16, 0.88);
}

.thumb-img {
  height: 100%;
}
</style>
