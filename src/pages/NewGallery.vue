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
/* 
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
} */

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
/* 
.save-one-btn,
.save-archive-btn,
.swap-bg-btn,
.overlay-btn,
.warning-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.warning-wrapper {
  display: none;
}
.warning-wrapper.warning-active {
  display: flex;
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

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
} */
</style>
