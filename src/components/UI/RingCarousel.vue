<template>
  <div class="carousel-wrapper">
    <div class="ring-carousel">
      <div class="ring" ref="ring">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ring-carousel",
  methods: {
    calcRingCellsPositions() {
      const cells = this.$refs.ring.querySelectorAll(".ring-carousel__cell");
      const cellCount = cells.length;
      const ring_diag = this.$refs.ring.offsetWidth;
      let radius, angle, cellWidth, letter_width, ring_shift;
      angle = 360 / cellCount;
      radius = ring_diag / 2;
      cellWidth = Math.round(
        2 * radius * Math.sin((angle * (Math.PI / 180)) / 2)
      );
      letter_width = this.$refs.ring.querySelector(
        ".ring-carousel__cell"
      ).scrollWidth;
      ring_shift = radius - letter_width / 2;
      cells.forEach((cell, index) => {
        const cellAngle = angle * index;
        cell.style.cssText = `transform: rotate3d(0, 1, 0, ${cellAngle}deg) translate3d(0, 0, ${radius}px); width: ${cellWidth}px; left: ${ring_shift}px`;
      });
    },

    initRingsLogic() {
      let new_text = this.$refs.ring.textContent;
      const text_length = this.$refs.ring.textContent.length;
      if (text_length < 40) {
        new_text = "";
        const qty_repeat = Math.round(40 / text_length);
        for (let i = 0; i < qty_repeat; i++) {
          new_text += this.$refs.ring.textContent + " ";
        }
        this.$refs.ring.textContent = "";
        for (let i = 0; i < new_text.length; i++) {
          const charDiv = document.createElement("div");
          charDiv.classList.add("ring-carousel__cell");
          charDiv.textContent = new_text[i];
          this.$refs.ring.append(charDiv);
        }
      }
      // calcRingCellsPositions();
      // window.addEventListener("resize", calcRingCellsPositions);
    },
  },
  mounted() {
    this.initRingsLogic();
    this.calcRingCellsPositions();
    window.addEventListener("resize", this.calcRingCellsPositions);
  },
};
</script>
<style>
.carousel-wrapper {
  height: 44px;
  width: 350px;
  margin-bottom: 11px;
  text-align: center;
  padding-top: 1px;
  position: relative;
}

@media only screen and (min-width: 993px) {
  .carousel-wrapper {
    height: 64px;
    margin-bottom: 16px;
  }
}

.carousel-wrapper .ring-carousel {
  max-width: 88px;
  margin: -18px auto 0;
}

@media only screen and (min-width: 841px) {
  .carousel-wrapper .ring-carousel {
    margin: -24px auto 0;
  }
}

@media only screen and (min-width: 993px) {
  .carousel-wrapper .ring-carousel {
    max-width: 132px;
    margin: -12px auto 0;
  }
}

.ring-carousel {
  font-size: 11px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  /* background: rgba(245, 245, 245, 0.8); */
  text-transform: uppercase;
  -webkit-transform: rotateX(-14deg);
  transform: rotateX(-14deg);
}

@media only screen and (min-width: 769px) {
  .ring-carousel {
    font-size: 14px;
  }
  .carousel__big-text > .ring-carousel {
    font-size: 16px;
  }
}

.ring {
  padding-top: 48px;
  margin: 0;
  font-size: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-animation: negative-spin 10s linear infinite;
  -o-animation: negative-spin 10s linear infinite;
  animation: negative-spin 10s linear infinite;
}

.ring + .ring {
  margin-top: -32px;
}

.thumb .ring-carousel .first,
.thumb .ring-carousel .second {
  font-weight: 500;
}

.thumb .ring-carousel .first,
.product-labels .ring-carousel .first {
  -webkit-animation: y-spin 15s linear infinite;
  -o-animation: y-spin 15s linear infinite;
  animation: y-spin 15s linear infinite;
  -webkit-animation-play-state: paused;
  -o-animation-play-state: paused;
  animation-play-state: paused;
}

.thumb:hover .ring-carousel .first,
.scrolling-active .thumb .ring-carousel .first {
  -webkit-animation-play-state: running;
  -o-animation-play-state: running;
  animation-play-state: running;
}

.thumb .ring-carousel .second,
.product-labels .ring-carousel .second {
  -webkit-animation: y-spin 25s linear infinite;
  -o-animation: y-spin 25s linear infinite;
  animation: y-spin 25s linear infinite;
  -webkit-animation-play-state: paused;
  -o-animation-play-state: paused;
  animation-play-state: paused;
}

.product-labels .ring-carousel .first,
.product-labels .ring-carousel .second {
  -webkit-animation-play-state: running;
  -o-animation-play-state: running;
  animation-play-state: running;
}

.thumb:hover .ring-carousel .second,
.scrolling-active .thumb .ring-carousel .second {
  -webkit-animation-play-state: running;
  -o-animation-play-state: running;
  animation-play-state: running;
}

.ring-carousel__cell {
  position: absolute;
  top: 50%;
  text-align: end;
  color: rgba(0, 0, 0, 0.9);
}

.reverse-ring {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-animation: positive-spin 15s linear infinite;
  -o-animation: positive-spin 15s linear infinite;
  animation: positive-spin 15s linear infinite;
  -webkit-animation-direction: reverse;
  -o-animation-direction: reverse;
  animation-direction: reverse;
  -webkit-animation-play-state: paused;
  -o-animation-play-state: paused;
  animation-play-state: paused;
}

.ie-active .footer-logo:hover .reverse-ring {
  -webkit-animation-play-state: paused;
  -o-animation-play-state: paused;
  animation-play-state: paused;
}

.footer-logo:hover .reverse-ring {
  -webkit-animation-play-state: running;
  -o-animation-play-state: running;
  animation-play-state: running;
}

.dark-theme .heading,
.dark-theme .brands-holder .sub-heading,
.dark-theme .footer a,
.dark-theme .ring-carousel__cell {
  color: #f5f5f5;
}

@-o-keyframes positive-spin {
  0% {
    transform: rotateX(-20deg) rotateY(0);
  }
  100% {
    transform: rotateX(-20deg) rotateY(360deg);
  }
}

@keyframes positive-spin {
  0% {
    -webkit-transform: rotateX(-20deg) rotateY(0);
    transform: rotateX(-20deg) rotateY(0);
  }
  100% {
    -webkit-transform: rotateX(-20deg) rotateY(360deg);
    transform: rotateX(-20deg) rotateY(360deg);
  }
}

@-o-keyframes negative-spin {
  100% {
    transform: rotateY(-360deg);
  }
}

@keyframes negative-spin {
  100% {
    -webkit-transform: rotateY(-360deg);
    transform: rotateY(-360deg);
  }
}

@-webkit-keyframes positive-spin {
  0% {
    -webkit-transform: rotateX(-20deg) rotateY(0);
  }
  100% {
    -webkit-transform: rotateX(-20deg) rotateY(360deg);
  }
}

@-webkit-keyframes negative-spin {
  100% {
    -webkit-transform: rotateY(-360deg);
  }
}

@-webkit-keyframes y-spin {
  0% {
    -webkit-transform: rotateZ(0) rotateY(0);
  }
  10% {
    -webkit-transform: rotateZ(0) rotateY(-36deg);
  }
  20% {
    -webkit-transform: rotateZ(0) rotateY(-72deg);
  }
  30% {
    -webkit-transform: rotateZ(0) rotateY(-108deg);
  }
  40% {
    -webkit-transform: rotateZ(0) rotateY(-144deg);
  }
  50% {
    -webkit-transform: rotateZ(0) rotateY(-180deg);
  }
  60% {
    -webkit-transform: rotateZ(0) rotateY(-216deg);
  }
  70% {
    -webkit-transform: rotateZ(0) rotateY(-252deg);
  }
  80% {
    -webkit-transform: rotateZ(0) rotateY(-288deg);
  }
  90% {
    -webkit-transform: rotateZ(0) rotateY(-324deg);
  }
  100% {
    -webkit-transform: rotateZ(0) rotateY(-360deg);
  }
}

@-o-keyframes y-spin {
  0% {
    transform: rotateZ(0) rotateY(0);
  }
  10% {
    transform: rotateZ(0) rotateY(-36deg);
  }
  20% {
    transform: rotateZ(0) rotateY(-72deg);
  }
  30% {
    transform: rotateZ(0) rotateY(-108deg);
  }
  40% {
    transform: rotateZ(0) rotateY(-144deg);
  }
  50% {
    transform: rotateZ(0) rotateY(-180deg);
  }
  60% {
    transform: rotateZ(0) rotateY(-216deg);
  }
  70% {
    transform: rotateZ(0) rotateY(-252deg);
  }
  80% {
    transform: rotateZ(0) rotateY(-288deg);
  }
  90% {
    transform: rotateZ(0) rotateY(-324deg);
  }
  100% {
    transform: rotateZ(0) rotateY(-360deg);
  }
}

@keyframes y-spin {
  0% {
    -webkit-transform: rotateZ(0) rotateY(0);
    transform: rotateZ(0) rotateY(0);
  }
  10% {
    -webkit-transform: rotateZ(0) rotateY(-36deg);
    transform: rotateZ(0) rotateY(-36deg);
  }
  20% {
    -webkit-transform: rotateZ(0) rotateY(-72deg);
    transform: rotateZ(0) rotateY(-72deg);
  }
  30% {
    -webkit-transform: rotateZ(0) rotateY(-108deg);
    transform: rotateZ(0) rotateY(-108deg);
  }
  40% {
    -webkit-transform: rotateZ(0) rotateY(-144deg);
    transform: rotateZ(0) rotateY(-144deg);
  }
  50% {
    -webkit-transform: rotateZ(0) rotateY(-180deg);
    transform: rotateZ(0) rotateY(-180deg);
  }
  60% {
    -webkit-transform: rotateZ(0) rotateY(-216deg);
    transform: rotateZ(0) rotateY(-216deg);
  }
  70% {
    -webkit-transform: rotateZ(0) rotateY(-252deg);
    transform: rotateZ(0) rotateY(-252deg);
  }
  80% {
    -webkit-transform: rotateZ(0) rotateY(-288deg);
    transform: rotateZ(0) rotateY(-288deg);
  }
  90% {
    -webkit-transform: rotateZ(0) rotateY(-324deg);
    transform: rotateZ(0) rotateY(-324deg);
  }
  100% {
    -webkit-transform: rotateZ(0) rotateY(-360deg);
    transform: rotateZ(0) rotateY(-360deg);
  }
}
</style>
