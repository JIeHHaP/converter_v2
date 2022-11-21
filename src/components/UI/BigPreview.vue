<template>
  <div class="big-preview__container">
    <span class="big-preview__title">
      <slot></slot>
    </span>
    <div class="big-preview__img-wrapper">
      <img class="big-preview__img" :src="imgSrc" />
    </div>
  </div>
</template>
<script>
export default {
  name: "big-preview",
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
.big-preview__container {
  display: flex;
  flex-direction: column;
}

.big-preview__title {
  text-align: center;
  font-size: 1.3rem;
}

.big-preview__img-wrapper {
  width: 25rem;
  height: 25rem;
  background-color: #f5f5f5;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  transition: color 0.3s ease, background-color 0.3s ease, opacity 0.3s ease;
}

.big-preview__img-wrapper:hover {
  color: #f5f5f5;
  background-color: rgba(15, 15, 16, 0.88);
}

.big-preview__img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>
