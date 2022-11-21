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
      <img
        @click.stop="closeModal"
        class="side-modal__close-btn"
        src="../../assets/icons/close.svg"
        alt="close-icon"
      />
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
    console(event) {
      console.log(event.target);
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
  box-shadow: -64px 0 64px 0 rgb(15 15 16 / 32%);
}
.side-modal__right {
  right: 0;
}

.side-modal_left {
  left: 0;
}
.side-modal__close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}
.side-modal__close-btn:hover {
}
</style>
