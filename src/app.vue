<template>
  <div id="root">
    <div class="btn-content">
      <my-button v-for="t in types" class="btn" :type="t" :key="t">TEST</my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Hello Vue",
      types: ["primary", "success", "info", "warning", "danger"]
    };
  }
};
</script>
<style lang="less">
.btn-content {
  .btn {
    margin-left: 10px;
  }
}
</style>