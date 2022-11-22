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
<style>
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
