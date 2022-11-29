<template>
  <div
    class="side-modal__bg"
    :class="{ active: this.isActive }"
    @click.stop="closeModal"
  >
    <div
      class="side-modal"
      :class="{
        'side-modal__right': isRightSide,
        'side-modal__left': isLeftSide,
      }"
      @click.stop
    >
      <div class="side-modal__close-zone">
        <img
          @click.stop="closeModal"
          class="side-modal__close-btn"
          src="../../assets/icons/close.svg"
          alt="close-icon"
        />
      </div>
      <div class="side-modal__title-zone">
        <h3 class="side-modal__title">
          <slot name="title">Какой-то заголовок</slot>
        </h3>
      </div>
      <div class="side-modal__content-zone">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "side-modal",
  data() {
    return {};
  },
  props: {
    isRightSide: {
      type: Boolean,
    },
    isLeftSide: {
      type: Boolean,
    },
    isActive: {
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("changeActive", !this.isActive);
    },
  },
};
</script>
<style>
.side-modal__bg.active {
  display: block;
}
.side-modal__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(15, 15, 16, 0.32);
  z-index: 2;
  display: none;
}
.side-modal {
  height: 100%;
  width: 17rem;
  position: absolute;
  z-index: 3;
  top: 0;
  background-color: #f5f5f5;
  transition: transform 0.3s ease;
}
.side-modal__right {
  right: 0;
  box-shadow: -64px 0 64px 0 rgb(15 15 16 / 32%);
  animation: modal-right 150ms linear;
}

.side-modal__left {
  left: 0;
  box-shadow: 64px 0 64px 0 rgb(15 15 16 / 32%);
  animation: modal-left 150ms linear;
}

.side-modal__close-zone {
  height: 6rem;
  width: 100%;
}

.side-modal__close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  transform-origin: center;
  animation: rotate-cross 200ms linear;
}
.side-modal__close-btn:hover {
  animation: rotate-cross-hover 200ms linear;
}

.side-modal__title-zone {
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.side-modal__title {
  font-size: 32px;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
}
.side-modal__content-zone {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 2rem;
}

@keyframes modal-right {
  from {
    transform: translateX(17rem);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes modal-left {
  from {
    transform: translateX(-17rem);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes rotate-cross-hover {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}
@keyframes rotate-cross {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
