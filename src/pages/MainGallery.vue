<template>
  <div class="page-container">
    <side-modal
      :isRightSide="true"
      :isActive="showRightModal"
      @changeActive="rightActiveChange"
    />
    <side-modal
      :isLeftSide="true"
      :isActive="showLeftModal"
      @changeActive="leftActiveChange"
    />
    <div class="gallery-container">
      <div class="preview-wrapper">
        <div class="toolbar">
          <small-icon @click="leftActiveChange">?</small-icon>
        </div>

        <big-preview class="m-r5" :imgSrc="'src/assets/images/horz_test.png'"
          >Исходное изображение</big-preview
        >
        <big-preview :imgSrc="'src/assets/images/01B00022.jpg'"
          >Обработанное изображение</big-preview
        >
        <div class="toolbar">
          <small-icon @click="rightActiveChange">?</small-icon>
        </div>
      </div>
      <gallery-carousel></gallery-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showRightModal: false,
      showLeftModal: false,
    };
  },
  methods: {
    rightActiveChange(newActive) {
      this.showRightModal = newActive;
    },
    leftActiveChange(newActive) {
      this.showLeftModal = newActive;
    },
  },
};
</script>
<style>
.page-container {
  z-index: 0;
}

.page-container::before {
  z-index: -1;
}

.preview-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.toolbar {
  padding: 2rem 0;
  height: 100%;
  width: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

@media only screen and (max-width: 900px) {
  .preview-wrapper {
    flex-wrap: wrap;
  }
}
</style>
