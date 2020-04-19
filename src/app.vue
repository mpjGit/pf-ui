<template>
  <div id="root">
    <div class="btn-content">
      <my-button class="btn">TEST</my-button>
      <my-button v-for="t in types" class="btn" :type="t" :key="t">TEST</my-button>
      <div class="plain">
        <my-button class="btn" plain>TEST</my-button>
        <my-button v-for="t in types" class="btn" :type="t" :key="t+1" plain>TEST</my-button>
      </div>
      <div class="plain">
        <my-button class="btn" plain>TEST</my-button>
        <my-button v-for="t in types" class="btn" :type="t" :key="t+1" round>TEST</my-button>
      </div>
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
.plain {
  margin-top: 20px;
}
</style>