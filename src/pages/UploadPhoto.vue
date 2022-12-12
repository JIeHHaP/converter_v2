<template>
  <div class="page-container">
    <dad-input
      @change="$router.push('/gallery_new')"
      @drop="$router.push('/gallery_new')"
    />
    <div class="btn-wrapper">
      <main-button class="m-t1" @click="$router.back()"> ← Назад </main-button>
      <!-- <main-button class="m-t1" @click="$router.push('/gallery_new')"
        >Далее →</main-button
      > -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    console() {
      console.log("123");
    },
  },
};
</script>
<style scoped>
.btn-wrapper {
  display: flex;
  gap: 1em;
}
.page-container {
  z-index: 0;
}
.page-container::before {
  z-index: -1;
}
</style>
