<template>
  <div class="vert-carousel">
    <small-icon class="arrow top-arrow" v-if="galleryScroll">↑</small-icon>
    <div
      class="thumbnails-wrapper"
      :class="{ 'center-pos': centerPosition, scroll: galleryScroll }"
      @click="getActiveThumbSrc"
    >
      <div
        class="thumbnail"
        @click="addActiveClass"
        v-for="thumbnail in thumbnails"
        :key="thumbnail.id"
      >
        <img class="thumbnail-img" :src="thumbnail.src" alt="thumbnail image" />
        <img
          class="close-btn"
          src="../../assets/icons/close-white.svg"
          alt="close btn"
        />
      </div>
    </div>
    <small-icon class="arrow bottom-arrow" v-if="galleryScroll">↓</small-icon>
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
        { id: 3, src: "src/assets/images/01B00026.jpg" },
        { id: 4, src: "src/assets/images/01B00038.jpg" },
        { id: 5, src: "src/assets/images/01C00013.jpg" },
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
  },
  mounted() {
    this.initFirstElemPos();
    this.addActiveFirstElement();
    this.getActiveThumbSrc();
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
  padding: 1rem 0.5rem;
  gap: 1rem;
}

.thumbnails-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  overflow-y: hidden;
  position: relative;
}

.thumbnails-wrapper.center-pos {
  justify-content: center;
}

.thumbnails-wrapper.scroll {
  overflow-y: auto;
}

.thumbnails-wrapper::-webkit-scrollbar {
  display: none;
}

.thumbnail {
  width: 100%;
  height: 135px;
  position: relative;
  border: 1px dotted #000;
  border-radius: 16px;
  transition: background-color 500ms ease;
}

.active-thumb {
  border: 2px solid #000;
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
</style>
