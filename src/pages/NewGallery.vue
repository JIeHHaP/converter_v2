<template>
  <div class="page-container" :class="{ 'black-bg': bgBlack }">
    <small-icon class="btn-back" @:click="$router.push('/')">←</small-icon>
    <gallery-toolbar
      :bgBlack="bgBlack"
      :overlayOn="overlayActive"
      :warningActive="warningActive"
      @changeBG="changeBg"
      @toggleOverlay="toggleOverlay"
    ></gallery-toolbar>
    <div class="preview-container">
      <div class="preview-wrapper">
        <small-icon class="preview-info-btn">i</small-icon>
        <!-- <div class="preview-info-tooltip">
          <span class="preview-info-title">Имя файла:</span>
          <span class="file-name-text"></span>
          <span class="preview-info-title">Размер изображения:</span>
          <span class="img-size-text"></span>
          <span class="preview-info-title">Размер файла</span>
          <span class="file-size-text"></span>
        </div> -->
        <img
          class="preview-img old-img"
          :src="previewSrc"
          alt="preview image"
        />
      </div>
      <div
        class="preview-wrapper"
        :class="{ 'preview-overlay': overlayActive }"
      >
        <small-icon class="preview-info-btn">i</small-icon>
        <div class="preview-info-tooltip">
          <span class="preview-info-title"></span>
          <span class="file-name-text"></span>
          <span class="preview-info-title"></span>
          <span class="img-size-text"></span>
          <span class="preview-info-title"></span>
          <span class="file-size-text"></span>
        </div>
        <img
          class="preview-img new-img"
          src="../assets/images/removed-bg.png"
          alt="preview image"
        />
      </div>
    </div>
    <vert-carousel
      class="vert-position"
      @activeThumbSrc="getPreviewSrc"
      @checkImgSize="toggleWarning"
    ></vert-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bgBlack: false,
      overlayActive: false,
      warningActive: false,
      previewSrc: "",
      changedPreviewSrc: "",
    };
  },
  methods: {
    changeBg(swapBg) {
      this.bgBlack = swapBg;
    },
    toggleOverlay(overlayActive) {
      this.overlayActive = overlayActive;
    },
    toggleWarning(isWarning) {
      this.warningActive = isWarning;
    },
    getPreviewSrc(newSrc) {
      this.previewSrc = newSrc;
    },
  },
};
</script>
<style scoped>
.page-container {
  display: flex;
  flex-direction: row;
}

.black-bg {
  background-color: rgba(15, 15, 16, 0.88);
}
.vert-position {
  align-self: flex-end;
  justify-self: end;
}
.page-container .btn-back {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 40px;
  height: 40px;
  font-size: 30px;
  line-height: 40px;
  cursor: pointer;
  z-index: 9;
}

.preview-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 87%;
  position: relative;
}

.preview-wrapper {
  display: flex;
  height: max-content;
  align-items: center;
  position: relative;
}

.preview-info-btn {
  position: absolute;
  z-index: 55;
  top: 10px;
  left: 10px;
}
.preview-img {
  height: 576px;
  width: 461px;
  object-fit: contain;
  border: 1px dotted #000;
  border-radius: 16px;
}

.preview-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  opacity: 0.5;
  z-index: 3;
}

.new-img {
  z-index: 3;
}
.old-img {
  z-index: 2;
}
</style>
