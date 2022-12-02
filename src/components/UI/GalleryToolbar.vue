<template>
  <div class="bottom-toolbar">
    <div class="save-one-wrapper">
      <img
        class="save-one-btn"
        src="src/assets/icons/download-file.svg"
        alt="download file"
      />
      <div class="toolbar__tooltip">
        <p class="tooltip-text__save-one">Сохранить текущее изображение.</p>
      </div>
    </div>
    <div class="save-archive-wrapper">
      <img
        class="save-archive-btn"
        src="src/assets/icons/download-archive.svg"
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
        src="src/assets/icons/dark-theme.svg"
        alt="swap background"
      />
      <div class="toolbar__tooltip">
        <p class="tooltip-text__swap-bg">Сменить цвет фона.</p>
      </div>
    </div>
    <div class="overlay-wrapper" @click="toggleOverlay">
      <img
        class="overlay-btn"
        src="src/assets/icons/overlay2.svg"
        alt="overlay images"
      />
      <div class="toolbar__tooltip">
        <p class="tooltip-text__overlay">Режим наложения.</p>
      </div>
    </div>
    <div class="warning-wrapper" :class="{ 'warning-active': warningActive }">
      <img
        class="warning-icon"
        src="src/assets/icons/warning.svg"
        alt="warning-icon"
      />
      <div class="toolbar__tooltip">
        <p class="tooltip-text__warning">
          Маленькое исходное изображение, возможна потеря качества!
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "gallery-toolbar",
  props: {
    bgBlack: {
      type: Boolean,
      required: true,
    },
    overlayOn: {
      type: Boolean,
      required: true,
    },
    warningActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    changeBg() {
      let swapBg = !this.bgBlack;
      this.$emit("changeBG", swapBg);
    },
    toggleOverlay() {
      let overlayActive = !this.overlayOn;
      this.$emit("toggleOverlay", overlayActive);
    },
  },
};
</script>
<style scoped>
.bottom-toolbar {
  position: absolute;
  bottom: 0;
  left: 34%;
  width: 300px;
  height: 50px;
  border-radius: 16px 16px 0 0;
  background-color: rgba(15, 15, 16, 0.88);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
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

.warning-wrapper {
  display: none;
}

.warning-wrapper.warning-active {
  display: block;
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
  width: 300px;
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
