<template>
  <div class="carousel">
    <div
      @click="active"
      class="thumb-wrapper"
      v-for="thumb in thumbs"
      :key="thumb.id"
    >
      <img class="thumb-img" :src="thumb.src" alt="thumb-preview" />
      <div class="toolbar">
        <div class="save-file-icone-wrapper">
          <svg
            class="save-file-icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            xml:space="preserve"
          >
            <g
              style="
                stroke: none;
                stroke-width: 0;
                stroke-dasharray: none;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 10;
                fill: none;
                fill-rule: nonzero;
                opacity: 1;
              "
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                class="save-file-icon-color"
                d="M 81.675 67.746 c -0.537 -0.629 -1.483 -0.704 -2.115 -0.164 l -3.479 2.977 v -8.674 c 0 -0.828 -0.672 -1.5 -1.5 -1.5 s -1.5 0.672 -1.5 1.5 v 8.674 l -3.479 -2.976 c -0.632 -0.541 -1.577 -0.466 -2.115 0.164 c -0.539 0.63 -0.465 1.577 0.164 2.115 l 5.954 5.095 c 0.009 0.008 0.021 0.01 0.03 0.018 c 0.027 0.022 0.053 0.045 0.081 0.065 c 0.052 0.037 0.108 0.067 0.165 0.097 c 0.034 0.018 0.066 0.039 0.101 0.055 c 0.021 0.009 0.044 0.016 0.066 0.024 c 0.022 0.009 0.045 0.013 0.067 0.021 c 0.029 0.01 0.058 0.02 0.088 0.027 c 0.023 0.006 0.046 0.017 0.069 0.021 c 0.099 0.021 0.202 0.032 0.307 0.032 c 0 0 0.001 0 0.001 0 c 0 0 0 0 0 0 s 0 0 0 0 s 0 0 0 0 s 0 0 0 0 c 0 0 0.001 0 0.001 0 c 0.105 0 0.208 -0.012 0.307 -0.032 c 0.024 -0.005 0.046 -0.015 0.069 -0.021 c 0.03 -0.008 0.059 -0.018 0.088 -0.027 c 0.023 -0.007 0.045 -0.012 0.067 -0.021 c 0.022 -0.008 0.045 -0.015 0.066 -0.024 c 0.035 -0.015 0.067 -0.037 0.1 -0.055 c 0.057 -0.03 0.113 -0.06 0.165 -0.097 c 0.028 -0.02 0.054 -0.043 0.081 -0.065 c 0.009 -0.008 0.021 -0.01 0.03 -0.017 l 5.955 -5.095 C 82.14 69.323 82.214 68.376 81.675 67.746 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                class="save-file-icon-color"
                d="M 75.569 83.678 v 2.031 c 0 0.729 -0.594 1.323 -1.324 1.323 h -58.49 c -0.73 0 -1.324 -0.594 -1.324 -1.323 V 4.291 c 0 -0.73 0.594 -1.324 1.324 -1.324 h 45.851 v 9.153 c 0 2.366 1.925 4.291 4.29 4.291 h 9.673 V 52.02 c 1.021 0.094 2.011 0.289 2.967 0.566 V 14.94 c 0.001 -0.084 -0.006 -0.166 -0.018 -0.248 c 0 0 -0.001 0 -0.001 -0.001 c 0 -0.001 0 -0.001 0 -0.003 v 0 c 0 -0.001 -0.001 -0.002 -0.001 -0.003 c -0.007 -0.042 -0.015 -0.082 -0.026 -0.123 v 0 c -0.001 -0.001 0.002 -0.003 -0.001 -0.003 c 0 -0.002 0 -0.003 -0.001 -0.004 v 0 c -0.066 -0.253 -0.199 -0.489 -0.392 -0.68 l -0.001 0 c 0 0 -0.001 -0.001 -0.001 -0.001 c -0.007 -0.001 -0.002 -0.001 -0.003 -0.002 c 0.003 -0.005 -0.002 -0.002 -0.002 -0.002 c -0.002 -0.001 0.001 -0.001 -0.003 -0.002 c 0.001 -0.001 -0.002 -0.001 -0.002 -0.002 c -0.001 -0.001 -0.002 -0.001 -0.003 -0.002 L 64.118 0.415 c -0.001 -0.001 -0.002 -0.002 -0.003 -0.003 c -0.001 -0.001 -0.002 -0.002 -0.003 -0.003 c -0.201 -0.19 -0.444 -0.317 -0.703 -0.374 c -0.038 -0.008 -0.075 -0.015 -0.113 -0.02 c -0.001 0 -0.001 0 -0.001 0 c -0.002 -0.001 -0.003 0 -0.005 -0.001 c -0.002 0 -0.004 -0.001 -0.004 0 c -0.001 0 -0.003 0 -0.005 0 c -0.002 0 -0.003 -0.001 -0.005 0 c 0 0 -0.001 0 -0.005 -0.001 C 63.207 0.003 63.131 0.003 63.079 0 H 15.755 c -2.366 0 -4.291 1.925 -4.291 4.291 V 85.71 c 0 2.365 1.925 4.29 4.291 4.29 h 58.49 c 2.366 0 4.291 -1.925 4.291 -4.29 v -2.598 C 77.58 83.39 76.59 83.584 75.569 83.678 z M 64.573 4.971 l 8.8 8.473 h -7.477 c -0.729 0 -1.323 -0.594 -1.323 -1.324 V 4.971 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                class="save-file-icon-color"
                d="M 74.096 54.945 C 81.211 54.945 87 60.734 87 67.849 c 0 7.115 -5.789 12.904 -12.904 12.904 c -7.115 0 -12.904 -5.789 -12.904 -12.904 C 61.193 60.734 66.981 54.945 74.096 54.945 M 74.096 51.945 c -8.783 0 -15.904 7.12 -15.904 15.904 s 7.12 15.904 15.904 15.904 C 82.88 83.753 90 76.632 90 67.849 S 82.88 51.945 74.096 51.945 L 74.096 51.945 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                class="save-file-icon-color"
                d="M 21.924 56.401 c -0.82 0 -1.484 0.664 -1.484 1.484 s 0.664 1.484 1.484 1.484 h 22.668 c 0.819 0 1.484 -0.664 1.484 -1.484 s -0.664 -1.484 -1.484 -1.484 H 21.924 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                class="save-file-icon-color"
                d="M 21.924 29.698 h 47.294 c 0.819 0 1.484 -0.664 1.484 -1.484 s -0.664 -1.484 -1.484 -1.484 H 21.924 c -0.82 0 -1.484 0.664 -1.484 1.484 S 21.105 29.698 21.924 29.698 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                class="save-file-icon-color"
                d="M 70.702 47.995 c 0 -0.819 -0.664 -1.484 -1.484 -1.484 H 21.924 c -0.82 0 -1.484 0.664 -1.484 1.484 s 0.664 1.484 1.484 1.484 h 47.294 C 70.038 49.478 70.702 48.814 70.702 47.995 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                class="save-file-icon-color"
                d="M 21.924 19.808 h 22.668 c 0.819 0 1.484 -0.664 1.484 -1.484 c 0 -0.82 -0.664 -1.484 -1.484 -1.484 H 21.924 c -0.82 0 -1.484 0.664 -1.484 1.484 C 20.441 19.144 21.105 19.808 21.924 19.808 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                class="save-file-icon-color"
                d="M 21.924 39.588 h 47.294 c 0.819 0 1.484 -0.664 1.484 -1.484 c 0 -0.819 -0.664 -1.484 -1.484 -1.484 H 21.924 c -0.82 0 -1.484 0.664 -1.484 1.484 C 20.441 38.924 21.105 39.588 21.924 39.588 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
            </g>
          </svg>
        </div>
        <div v-if="warning" class="warning-icon-wrapper">
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
        </div>
        <div class="trash-icon-wrapper">
          <svg
            class="trash-icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            xml:space="preserve"
          >
            <g
              style="
                stroke: none;
                stroke-width: 0;
                stroke-dasharray: none;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-miterlimit: 10;
                fill: none;
                fill-rule: nonzero;
                opacity: 1;
              "
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                class="trash-icon-color"
                d="M 68.162 10.398 H 21.838 c -5.38 0 -9.742 4.362 -9.742 9.742 v 3.065 h 65.808 V 20.14 C 77.904 14.76 73.542 10.398 68.162 10.398 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                class="trash-icon-color"
                d="M 57.628 14.469 H 32.373 c -1.104 0 -2 -0.896 -2 -2 C 30.373 5.593 35.966 0 42.841 0 h 4.318 c 6.875 0 12.469 5.593 12.469 12.469 C 59.628 13.573 58.732 14.469 57.628 14.469 z M 34.611 10.469 H 55.39 C 54.488 6.761 51.141 4 47.159 4 h -4.318 C 38.86 4 35.512 6.761 34.611 10.469 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
              <path
                class="trash-icon-color"
                d="M 16.154 27.346 l 3.555 60.704 C 19.773 89.145 20.679 90 21.776 90 h 46.449 c 1.097 0 2.003 -0.855 2.068 -1.949 l 3.554 -60.704 H 16.154 z"
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" matrix(1 0 0 1 0 0) "
                stroke-linecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gallery-carousel",
  data() {
    return {
      warning: true,
      thumbs: [
        { id: 12, src: "src/assets/images/01B00022.jpg" },
        { id: 2, src: "src/assets/images/01B00015.jpg" },
        { id: 3, src: "src/assets/images/01B00026.jpg" },
        { id: 4, src: "src/assets/images/01B00038.jpg" },
        { id: 5, src: "src/assets/images/01C00013.jpg" },
      ],
    };
  },
  methods: {
    addActiveFirstElement() {
      const thumbs = document.querySelectorAll(".thumb-wrapper");
      thumbs[0].classList.add("active-thumb");
    },
    removeActiveClass() {
      const activeThumbs = document.querySelectorAll(".active-thumb");
      if (activeThumbs.length > 0) {
        activeThumbs[0].classList.remove("active-thumb");
      }
    },
    active(event) {
      if (
        event.target &&
        event.target.tagName == "IMG" &&
        !event.target.parentElement.classList.contains("active-thumb")
      ) {
        this.removeActiveClass();
        event.target.parentElement.classList.add("active-thumb");
      } else if (
        event.target &&
        event.target.classList.contains("thumb-wrapper")
      ) {
        this.removeActiveClass();
        event.target.classList.add("active-thumb");
      }
    },
  },
  mounted() {
    this.addActiveFirstElement();
  },
};
</script>
<style scoped>
.carousel {
  height: 13rem;
  width: 50rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.2em;
  margin-bottom: 1rem;
}

.thumb-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border: 1px dotted #000;
  border-radius: 16px;
  padding: 8px;
  background-color: rgba(245, 245, 245, 0.78);
  z-index: 1;
  transition: color 0.3s ease, background-color 0.3s ease, opacity 0.3s ease;
}

.active-thumb {
  border: 2px solid #000;
}

/* .active-thumb:hover {
  border: 2px solid #000; // добавить другой цвет обводки
} */

.thumb-wrapper:hover {
  color: #f5f5f5;
  background-color: rgba(15, 15, 16, 0.88);
}
.trash-icon-color,
.warning-icon,
.save-file-icon-color {
  fill: #000;
  transition: fill 600ms ease;
}

.thumb-wrapper:hover .trash-icon-color {
  fill: #fff;
}

.thumb-wrapper:hover .save-file-icon-color {
  fill: #fff;
}

.thumb-wrapper:hover .warning-icon {
  fill: #fff;
}
.thumb-img {
  height: 80%;
}

.toolbar {
  margin-top: 0.2rem;
  border-top: 1px dotted #000;
  padding-top: 0.3rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.save-file-icon,
.warning-icon,
.trash-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
