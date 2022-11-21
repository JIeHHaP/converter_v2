<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "main-button",
};
</script>
<style>
.btn {
  position: relative;
  padding: 5px 10px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-height: 56px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: "AlsWagon", sans-serif;
  text-align: center;
  color: #f5f5f5;
  background-color: #0f0f10;
  border-color: #0f0f10;
  border-width: 1px;
  -webkit-border-radius: 16px;
  border-radius: 16px;
  border-style: solid;
  outline: none;
  vertical-align: middle;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  -webkit-transition: opacity 0.3s ease;
  -o-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
  /* width: 35em; */
}

.btn:hover,
.btn:active {
  opacity: 0.88;
}

.btn:active {
  -webkit-transform: scale(0.98);
  -ms-transform: scale(0.98);
  -o-transform: scale(0.98);
  transform: scale(0.98);
}

@media only screen and (min-width: 993px) {
  .btn {
    min-height: 64px;
  }
}

.btn a {
  text-decoration: none;
}

.btn-square-group {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.btn-square-group .btn {
  -webkit-border-radius: 0;
  border-radius: 0;
}

.btn-square-group .btn:first-child {
  -webkit-border-radius: 16px 0 0 16px;
  border-radius: 16px 0 0 16px;
}

.btn-square-group .btn:last-child {
  -webkit-border-radius: 0 16px 16px 0;
  border-radius: 0 16px 16px 0;
}

.btn-square-group .btn--square + .btn--square {
  border-left: none;
}

.btn--inside-out {
  color: #0f0f10;
  background-color: #f5f5f5;
  border-color: #0f0f10;
  -webkit-transition: color 0.3s ease, background-color 0.3s ease,
    border 0.3s ease;
  -o-transition: color 0.3s ease, background-color 0.3s ease, border 0.3s ease;
  transition: color 0.3s ease, background-color 0.3s ease, border 0.3s ease;
}

.btn--inside-out:hover,
.btn--inside-out:active,
.btn--inside-out.active {
  color: #f5f5f5;
  background-color: rgba(15, 15, 16, 0.88);
  border-color: rgba(15, 15, 16, 0.88);
}

.btn--border-dotted {
  background-color: #f5f5f5;
  color: #0f0f10;
  border-width: 1px;
  border-style: dotted;
  -webkit-transition: color 0.3s ease, background-color 0.3s ease,
    border 0.3s ease, opacity 0.3s ease;
  -o-transition: color 0.3s ease, background-color 0.3s ease, border 0.3s ease,
    opacity 0.3s ease;
  transition: color 0.3s ease, background-color 0.3s ease, border 0.3s ease,
    opacity 0.3s ease;
}

.btn--border-dotted:hover,
.btn--border-dotted:active {
  color: #f5f5f5;
  background-color: #0f0f10;
  border-style: solid;
  opacity: 0.88;
}

.btn--disabled,
.btn[disabled] {
  color: #f5f5f5;
  opacity: 0.32;
  cursor: not-allowed;
}

.btn--disabled:hover,
.btn[disabled]:hover {
  color: #f5f5f5;
  opacity: 0.32;
}

.btn--disabled:active,
.btn[disabled]:active {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

.btn--light {
  border-color: rgba(15, 15, 16, 0.16);
  background: rgba(15, 15, 16, 0.16);
  color: #f5f5f5;
  -webkit-transition: color 0.3s ease, background 0.3s ease;
  -o-transition: color 0.3s ease, background 0.3s ease;
  transition: color 0.3s ease, background 0.3s ease;
}

.btn--light:hover {
  border-color: rgba(15, 15, 16, 0.88);
  background: rgba(15, 15, 16, 0.88);
}

.btn--square {
  height: 56px;
  width: 56px;
  padding: 5px;
  min-height: initial;
}

@media only screen and (min-width: 993px) {
  .btn--square {
    height: 64px;
    width: 64px;
  }
}

.btn--square--disabled,
.btn--square[disabled],
.btn--square--disabled:hover,
.btn--square[disabled]:hover {
  color: #000000;
  opacity: 0.16;
  cursor: not-allowed;
  background: transparent;
}

.btn--small {
  -webkit-border-radius: 8px;
  border-radius: 8px;
  line-height: 1;
  min-height: 32px;
}

.btn--reversed {
  background: #f5f5f5;
  color: #0f0f10;
}

.btn--smallest {
  padding: 0 8px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  min-height: 20px;
  color: #0f0f10;
  background: transparent;
  opacity: 1;
  -webkit-transition: opacity 0.3s ease;
  -o-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
  display: inline-block;
  text-transform: none;
}

.btn--smallest:hover {
  opacity: 0.72;
}

.btn--smallest--disabled,
.btn--smallest[disabled] {
  opacity: 0.32;
}

.btn--full {
  width: 100%;
}

@media only screen and (max-width: 840px) {
  .btn-mob-none {
    display: none;
  }
}

.btn i + span {
  margin-left: 5px;
}

.btn span + i {
  margin-left: 5px;
}

.btn-inline {
  display: inline-block;
  padding: 0 3px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  cursor: pointer;
  text-transform: initial;
}

.btn-inline--big {
  min-height: initial;
  padding: 5px 21px;
  -webkit-border-radius: 8px;
  border-radius: 8px;
}

.btn-inline-holder {
  text-align: center;
}

.btn-small {
  -webkit-border-radius: 16px;
  border-radius: 16px;
  line-height: 1;
  height: 32px;
  line-height: 30px;
  display: inline-block;
  color: #0f0f10;
  text-decoration: none;
  border: 1px solid #0f0f10;
  background-color: transparent;
  padding: 0 12px;
}

.btn-small:hover {
  opacity: 0.72;
}

.btn-special {
  background-color: #fff;
  text-transform: none;
  border-style: dotted;
  color: #0f0f10;
  min-width: 144px;
}

.btn--no-radius {
  -webkit-border-radius: 0;
  border-radius: 0;
}

.btn--middle {
  min-height: 44px;
}
</style>
