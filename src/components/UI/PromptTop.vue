<template>
  <div class="promt" :class="{ active: active }">
    <div class="massenge-wrapper">
      <slot></slot>
      <img
        class="close-btn"
        @click="this.active = !this.active"
        src="src/assets/icons/close-white.svg"
        alt="close button"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "promt-top",
  data() {
    return {
      active: true,
    };
  },
  methods: {},
};
</script>
<style scoped>
.promt {
  background-color: rgba(15, 15, 16, 0.88);
  padding: 1.5rem;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 1rem;
  border-radius: 16px;
  z-index: 50;
}
.active {
  opacity: 1;
  visibility: visible;
}

.massenge-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.close-btn {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
