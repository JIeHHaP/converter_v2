<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "AlsWagon";
}

.m-r5 {
  margin-right: 5rem;
}
.m-lr1 {
  margin: 0 1rem;
}
/* *********fonts*********** */
@font-face {
  font-family: "AlsWagon";
  src: url("@/assets/fonts/als_wagon_regular.eot");
  /* IE9 Compat Modes */
  src: url("@/assets/fonts/als_wagon_regular.eot?#iefix")
      format("embedded-opentype"),
    url("@/assets/fonts/als_wagon_regular.woff2") format("woff2"),
    url("@/assets/fonts/als_wagon_regular.woff") format("woff");
  /* Pretty Modern Browsers */
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "AlsWagon";
  src: url("@/assets/fonts/als_wagon_medium_condensed.eot");
  /* IE9 Compat Modes */
  src: url("@/assets/fonts/als_wagon_medium_condensed.eot?#iefix")
      format("embedded-opentype"),
    url("@/assets/fonts/als_wagon_medium_condensed.woff2") format("woff2"),
    url("@/assets/fonts/als_wagon_medium_condensed.woff") format("woff");
  /* Pretty Modern Browsers */
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "AlsWagon";
  src: url("@/assets/fonts/als_wagon_bold.eot");
  /* IE9 Compat Modes */
  src: url("@/assets/fonts/als_wagon_bold.eot?#iefix")
      format("embedded-opentype"),
    url("@/assets/fonts/als_wagon_bold.woff2") format("woff2"),
    url("@/assets/fonts/als_wagon_bold.woff") format("woff");
  /* Pretty Modern Browsers */
  font-weight: 700;
  font-style: normal;
}
</style>
