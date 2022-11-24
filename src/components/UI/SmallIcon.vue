<template>
  <span class="small-icon">
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: "small-icon",
};
</script>
<style>
.small-icon {
  width: 20px;
  height: 20px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 50%;
  color: #f5f5f5;
  background: #0f0f10;
  transition: opacity 0.3s ease;
  text-align: center;
  cursor: pointer;
}
</style>
