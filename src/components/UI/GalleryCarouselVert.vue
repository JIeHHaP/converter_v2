<template>
  <div class="vert-carousel">
    <div class="toolbar">
      <div class="toolbar__messange">
        <p>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века. В то время некий безымянный печатник
          создал большую коллекцию размеров и форм шрифтов, используя Lorem
          Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
          без заметных изменений пять веков, но и перешагнул в электронный
          дизайн. Его популяризации в новое время послужили публикация листов
          Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее
          время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах
          которых используется Lorem Ipsum.
        </p>
      </div>
      <div class="toolbar__list">
        <gallery-toolbar></gallery-toolbar>
      </div>
    </div>
    <div
      class="thumbnails-wrapper"
      :class="{ 'center-pos': centerPosition, scroll: galleryScroll }"
      @click="getActiveThumbSrc"
    >
      <div
        class="thumbnail"
        @click="addActiveClass($event), checkNaturalImgSize($event)"
        v-for="thumbnail in thumbnails"
        :key="thumbnail.id"
      >
        <div class="spinner__bg" v-if="thumbnail.src == ''">
          <spinner-bounce v-if="thumbnail.src == ''"></spinner-bounce>
        </div>
        <img
          v-if="thumbnail.src != ''"
          class="thumbnail-img"
          :src="thumbnail.src"
          alt="thumbnail image"
        />
        <img
          v-if="thumbnail.src != ''"
          class="close-btn"
          @click.stop="markThumbForDeletion"
          src="../../assets/icons/close-white.svg"
          alt="close btn"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "vert-carousel",
  data() {
    return {
      thumbnails: [
        { id: 12, src: "src/assets/images/01B00022.jpg" },
        { id: 2, src: "src/assets/images/01B00015.jpg" },
        { id: 3, src: "" },
        { id: 4, src: "src/assets/images/01B00038.jpg" },
        { id: 5, src: "" },
        { id: 5, src: "src/assets/images/01C00013.jpg" },
        { id: 2, src: "src/assets/images/01B00015.jpg" },
        { id: 3, src: "" },
        { id: 4, src: "src/assets/images/01B00038.jpg" },
        { id: 5, src: "" },
        { id: 5, src: "src/assets/images/01C00013.jpg" },
      ],
      centerPosition: false,
      galleryScroll: true,
    };
  },
  methods: {
    addActiveFirstElement() {
      const thumbs = document.querySelectorAll(".thumbnail");
      thumbs[0].classList.add("active-thumb");
    },
    removeActiveClass() {
      const activeThumbs = document.querySelectorAll(".active-thumb");
      if (activeThumbs.length > 0) {
        activeThumbs[0].classList.remove("active-thumb");
      }
    },
    addActiveClass(event) {
      if (
        event.target &&
        event.target.tagName == "IMG" &&
        !event.target.parentElement.classList.contains("active-thumb")
      ) {
        this.removeActiveClass();
        event.target.parentElement.classList.add("active-thumb");
      } else if (event.target && event.target.classList.contains("thumbnail")) {
        this.removeActiveClass();
        event.target.classList.add("active-thumb");
      }
    },
    initFirstElemPos() {
      if (this.thumbnails.length <= 4) {
        this.centerPosition = true;
        this.galleryScroll = false;
      }
    },
    getActiveThumbSrc() {
      const activeSrc = document.querySelector(
        ".active-thumb .thumbnail-img"
      ).src;
      this.$emit("activeThumbSrc", activeSrc);
    },
    checkNaturalImgSize(event) {
      let isWarning;
      if (event.target && event.target.tagName == "IMG") {
        if (
          event.target.naturalHeight <= 1000 ||
          event.target.naturalWidth <= 800
        ) {
          isWarning = true;
        } else {
          isWarning = false;
        }
      }
      this.$emit("checkImgSize", isWarning);
    },
    markThumbForDeletion(event) {
      if (event.target && event.target.classList.contains("close-btn")) {
        if (!event.target.parentElement.classList.contains("delete-thumb")) {
          event.target.parentElement.classList.add("delete-thumb");
          event.target.src = "src/assets/icons/restore.svg";
        } else {
          event.target.parentElement.classList.remove("delete-thumb");
          event.target.src = "src/assets/icons/close-white.svg";
        }
      }
    },
    slideBottom() {
      const gallery = document.querySelector(".thumbnails-wrapper");
      gallery.scrollTop += 140;
    },
    slideTop() {
      const gallery = document.querySelector(".thumbnails-wrapper");
      gallery.scrollTop -= 140;
    },
    slidePushKey() {
      if (this.thumbnails.length > 4) {
        document.addEventListener("keydown", (event) => {
          if (event.code === "ArrowUp") {
            this.slideTop();
          }
          if (event.code === "ArrowDown") {
            this.slideBottom();
          }
        });
      }
    },
  },
  mounted() {
    this.initFirstElemPos();
    this.addActiveFirstElement();
    this.getActiveThumbSrc();
    this.slidePushKey();
  },
};
</script>
<style scoped>
.toolbar {
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.toolbar__messange {
  width: 100%;
  height: 100%;
  padding: 0.8rem;
  overflow-y: auto;
}

.toolbar__messange::-webkit-scrollbar {
  display: none;
}

.toolbar__messange p {
  text-align: center;
  font-size: 16px;
  line-height: 19px;
}

.toolbar__list {
  width: 100%;
}

.spinner__bg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 145px;
  border-radius: 15px;
  background-color: rgba(15, 15, 16, 0.1);
}

.vert-carousel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 25%;
  border-left: 1px solid #000;
  background-color: #f5f5f5;
  /* padding: 1rem 0.5rem; */
  /* gap: 1rem; */
}

.thumbnails-wrapper {
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: start;
  gap: 0.5rem;
  overflow-y: hidden;
  padding: 5px;
}

.thumbnails-wrapper.scroll {
  overflow-y: auto;
}

.thumbnails-wrapper::-webkit-scrollbar {
  display: none;
}

.thumbnail {
  width: 46%;
  height: 27%;
  position: relative;
  border: 1px dotted #000;
  border-radius: 16px;
  transition: background-color 500ms ease;
}

.active-thumb {
  border: 2px solid #000;
}

.delete-thumb {
  background-color: rgb(216, 103, 103);
  border: 1px solid rgb(173, 83, 83);
}

.thumbnail:hover {
  background-color: rgba(16, 16, 15, 0.88);
}

.thumbnail:hover.delete-thumb {
  background-color: rgb(216, 103, 103);
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
  height: 25px;
  width: 25px;
  opacity: 0;
  visibility: 0;
  cursor: pointer;
  background-color: #000;
  border-radius: 5px;
  border: 1px solid #fff;
  padding: 3px;
}

.thumbnail:hover .close-btn {
  opacity: 1;
  visibility: visible;
}
</style>
