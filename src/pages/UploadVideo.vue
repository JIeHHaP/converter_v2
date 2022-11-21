<template>
  <div class="in-dev">
    <p>Страница находиться в разработке</p>
    <main-button
      class="btn-width"
      style="margin-top: 20px"
      @click="$router.back()"
    >
      ← Назад
    </main-button>
  </div>
</template>
<script>
export default {};
</script>
<style>
.btn-width {
  width: 20em;
  margin-top: 1em;
}
.in-dev {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: gray;
  color: #000;
  font-size: 35px;
  font-weight: 400;
  height: 100vh;
}
</style>
