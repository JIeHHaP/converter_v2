<template>
  <div class="page-container">
    <side-modal
      :isRightSide="true"
      :isActive="showRightModal"
      @changeActive="rightActiveChange"
      >Инфо</side-modal
    >
    <side-modal
      :isLeftSide="true"
      :isActive="showLeftModal"
      @changeActive="leftActiveChange"
    >
      <template v-slot:title>Инфо</template>
      <template v-slot:content>
        <ul class="img-info__list">
          <ul class="img-info__item">
            <span class="img-info__item-title"> Имя файла: </span>
            <span class="img-info__item-text">
              {{ this.imgInfo[0].name }}
            </span>
          </ul>
          <ul class="img-info__item">
            <span class="img-info__item-title"> Размер изображения: </span>
            <span class="img-info__item-text">
              {{ this.imgInfo[0].imgSize }}
            </span>
          </ul>
          <ul class="img-info__item">
            <span class="img-info__item-title"> Размер файла: </span>
            <span class="img-info__item-text">
              {{ this.imgInfo[0].fileSize }}
            </span>
          </ul>
        </ul>
        <main-button @click="copyInfo">Скопировать инфо</main-button>
      </template>
    </side-modal>
    <div class="gallery-container">
      <div class="preview-wrapper">
        <div class="toolbar">
          <small-icon @click="leftActiveChange">?</small-icon>
          <div v-if="warning" class="warning-icon__container">
            <svg
              class="warning-icon"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="493.275px"
              height="493.275px"
              viewBox="0 0 493.275 493.275"
              style="enable-background: new 0 0 493.275 493.275"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M482.641,390.538l-204.6-332.7c-17.199-26.801-44-26.801-61.2,0l-206.6,332.7c-23,36.3-5.7,65,36.3,65h399.8
                  C490.342,455.638,505.641,426.938,482.641,390.538z M247.441,398.237c-11.5,0-19.1-7.6-19.1-19.1s7.7-19.1,19.1-19.1
                  c11.5,0,19.1,7.699,19.1,19.1S256.941,398.237,247.441,398.237z M266.541,302.638c0,9.6-7.6,19.1-19.1,19.1s-19.1-7.6-19.1-19.1
                  v-114.8c0-9.601,7.7-19.101,19.1-19.101c11.5,0,19.1,7.7,19.1,19.101V302.638z"
                />
              </g>
            </svg>
            <div class="warning-icon__tooltip">
              <p class="tooltip-text">
                Маленькое исходное изображение, возможна потеря качества!
              </p>
            </div>
          </div>
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
    <main-button @:click="$router.push('/')">В начало</main-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showRightModal: false,
      showLeftModal: false,
      warning: true,
      imgInfo: [
        { name: "01B00022.jpg", imgSize: "800px * 1000px", fileSize: "363kb" },
      ],
    };
  },
  methods: {
    rightActiveChange(newActive) {
      this.showRightModal = newActive;
    },
    leftActiveChange(newActive) {
      this.showLeftModal = newActive;
    },
    async copyInfo() {
      try {
        await navigator.clipboard.writeText(
          `${this.imgInfo[0].name}, ${this.imgInfo[0].imgSize}, ${this.imgInfo[0].fileSize} `
        );
        console.log("copy done!");
      } catch (err) {
        console.error("Error mf!", err);
      }
    },
  },
};
</script>
<style scoped>
.page-container {
  z-index: 0;
  padding: 1rem 0;
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
  gap: 1rem;
}

.toolbar {
  padding: 2rem 0;
  height: 100%;
  width: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
}

.warning-icon__container {
  position: relative;
  cursor: pointer;
}

.warning-icon__container:hover .warning-icon__tooltip,
.warning-icon__container:hover .tooltip-text {
  opacity: 1;
  visibility: visible;
}

.warning-icon {
  width: 25px;
  height: 25px;
  fill: rgba(216, 8, 8, 0.925);
  transition: fill 400ms ease;
}
.warning-icon:hover {
  fill: rgba(15, 15, 16, 0.88);
}

.warning-icon__tooltip {
  position: absolute;
  width: 19rem;
  top: 1.3rem;
  left: 1.3rem;
  background-color: rgba(15, 15, 16, 0.88);
  border-radius: 16px;
  padding: 1rem;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: opacity 400ms ease;
}

.tooltip-text {
  line-height: 16px;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 400ms ease;
}

.img-info__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;
}
.img-info__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.img-info__item-title {
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
}

@media only screen and (max-width: 900px) {
  .preview-wrapper {
    flex-wrap: wrap;
  }
}
</style>
