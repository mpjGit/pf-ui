<template>
  <div id="root">
    <div class="btn-content">
      <my-button class="btn" @myClick="btnClick">TEST</my-button>
      <my-button v-for="t in types" class="btn" :type="t" :key="t">TEST</my-button>
      <div class="plain">
        <my-button class="btn" plain>TEST</my-button>
        <my-button v-for="t in types" class="btn" :type="t" :key="t+1" plain>TEST</my-button>
      </div>
      <div class="plain">
        <my-button class="btn" plain>TEST</my-button>
        <my-button v-for="t in types" class="btn" :type="t" :key="t+1" round>TEST</my-button>
      </div>
      <div class="plain">
        <my-button class="btn" plain>TEST</my-button>
        <my-button v-for="t in types" class="btn" :type="t" :key="t+1" circle>TEST</my-button>
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
  },
  methods: {
    btnClick(args_1, args_2) {
      console.log(args_1, args_2);
    }
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