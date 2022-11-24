<template>
  <div class="page-container">
    <ring-carousel class="carousel__big-text">converter v.2 ///</ring-carousel>
    <main-button class="m-t1" @:click="$router.push('/upload-photo')"
      >Фото</main-button
    >
    <main-button class="m-t1" @:click="$router.push('/upload-video')"
      >Видео</main-button
    >
  </div>
</template>
<script>
export default {};
</script>
<style>
.page-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #f7f7f7;
  z-index: 0;
  overflow: hidden;
}
.page-container::before {
  content: "";
  background-image: url("@/assets/images/poll-final.png");
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.3;
  z-index: -1;
}
</style>
