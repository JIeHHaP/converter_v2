<template>
  <div class="page-container" :class="{ 'black-bg': bgBlack }">
    <small-icon class="btn-back">←</small-icon>
    <div class="bottom-toolbar">
      <div class="save-one-wrapper">
        <img
          class="save-one-btn"
          src="../assets/icons/download-file.svg"
          alt="download file"
        />
        <div class="toolbar__tooltip">
          <p class="tooltip-text__save-one">Сохранить текущее изображение.</p>
        </div>
      </div>
      <div class="save-archive-wrapper">
        <img
          class="save-archive-btn"
          src="../assets/icons/download-archive.svg"
          alt="download archive"
        />
        <div class="toolbar__tooltip">
          <p class="tooltip-text__save-archive">
            Сохранить все изображения архивом.
          </p>
        </div>
      </div>
      <div class="swap-bg-wrapper" @click="changeBg">
        <img
          class="swap-bg-btn"
          src="../assets/icons/dark-theme.svg"
          alt="swap background"
        />
        <div class="toolbar__tooltip">
          <p class="tooltip-text__swap-bg">Сменить цвет фона.</p>
        </div>
      </div>
      <div class="overlay-wrapper" @click="toggleOverlay">
        <img
          class="overlay-btn"
          src="../assets/icons/overlay2.svg"
          alt="overlay images"
        />
        <div class="toolbar__tooltip">
          <p class="tooltip-text__overlay">Режим наложения.</p>
        </div>
      </div>
      <div class="warning-wrapper">
        <img
          class="warning-icon"
          src="../assets/icons/warning.svg"
          alt="warning-icon"
        />
        <div class="toolbar__tooltip">
          <p class="tooltip-text__warning">
            Маленькое исходное изображение, возможна потеря качества!
          </p>
        </div>
      </div>
    </div>
    <div class="preview-container">
      <div class="preview-wrapper">
        <img
          class="preview-img old-img"
          src="../assets/images/01B00022.jpg"
          alt="preview image"
        />
      </div>
      <div
        class="preview-wrapper"
        :class="{ 'preview-overlay': overlayActive }"
      >
        <img
          class="preview-img new-img"
          src="../assets/images/removed-bg.png"
          alt="preview image"
        />
      </div>
    </div>
    <vert-carousel class="vert-position"></vert-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bgBlack: false,
      overlayActive: false,
    };
  },
  methods: {
    changeBg() {
      this.bgBlack = !this.bgBlack;
    },
    toggleOverlay() {
      this.overlayActive = !this.overlayActive;
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
  top: 0.4rem;
  left: 0.4rem;
  width: 40px;
  height: 40px;
  font-size: 30px;
  line-height: 40px;
}

.bottom-toolbar {
  position: absolute;
  bottom: 0;
  left: 34%;
  width: 300px;
  height: 50px;
  border-radius: 16px 16px 0 0;
  background-color: rgba(16, 16, 15, 0.88);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
}

.preview-container {
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 87%;
  position: relative;
}

.preview-wrapper {
  display: flex;
  align-items: center;
}
.preview-img {
  height: 576px;
  width: 461px;
  object-fit: contain;
  border: 1px dotted #000;
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

.save-one-btn,
.save-archive-btn,
.swap-bg-btn,
.overlay-btn,
.warning-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.warning-wrapper:hover .tooltip-text__warning,
.warning-wrapper:hover .toolbar__tooltip,
.save-one-wrapper:hover .tooltip-text__save-one,
.save-one-wrapper:hover .toolbar__tooltip,
.save-archive-wrapper:hover .tooltip-text__save-archive,
.save-archive-wrapper:hover .toolbar__tooltip,
.swap-bg-wrapper:hover .tooltip-text__swap-bg,
.swap-bg-wrapper:hover .toolbar__tooltip,
.overlay-wrapper:hover .tooltip-text__overlay,
.overlay-wrapper:hover .toolbar__tooltip {
  opacity: 1;
  visibility: visible;
}

.toolbar__tooltip {
  position: absolute;
  width: 100%;
  bottom: 3.2rem;
  left: 0;
  background-color: rgba(15, 15, 16, 0.88);
  border-radius: 16px;
  padding: 1rem;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: opacity 400ms ease;
}

.tooltip-text__warning,
.tooltip-text__save-one,
.tooltip-text__save-archive,
.tooltip-text__swap-bg,
.tooltip-text__overlay {
  line-height: 16px;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 400ms ease;
}
</style>
