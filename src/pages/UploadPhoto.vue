<template>
  <div class="page-container">
    <dad-input />
    <div class="btn-wrapper">
      <main-button class="btn-width" @click="$router.back()">
        ← Назад
      </main-button>
      <main-button class="btn-width" @click="$router.push('/gallery')"
        >Далее →</main-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
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
.btn-width {
  width: 18em;
  margin-top: 1em;
}
</style>
