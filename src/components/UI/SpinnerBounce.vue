<template>
  <div class="spinner">
    <span class="spinner__bounce spinner__bounce--1"></span>
    <span class="spinner__bounce spinner__bounce--2"></span>
    <span class="spinner__bounce spinner__bounce--3"></span>
  </div>
</template>
<script>
export default {
  name: "spinner-bounce",
};
</script>
<style scoped>
.spinner {
  width: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.spinner__bounce {
  display: block;
  width: 15px;
  height: 15px;
  background-color: #0f0f10;
  border-radius: 100%;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner__bounce--1 {
  animation-delay: -0.32s;
}

.spinner__bounce--2 {
  animation-delay: -0.16s;
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(1);
  }
  40% {
    transform: scale(0);
  }
}
</style>
