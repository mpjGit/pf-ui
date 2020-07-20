<template>
  <div class="dialog-wrapper">
    <div class="dialog-body">
      <div class="header">
        <slot name="title">Tips</slot>
      </div>
      <div class="content"></div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDialog",
  props: {}
};
</script>

<style lang="less">
.dialog-wrapper {
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-body {
  position: fixed;
  top: 35%;
  // 移动端使用felx布局
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 300;
  width: 40%;
  height: 30%;
}
</style>