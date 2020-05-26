<template>
  <div id="root">
    <div class="btn-content">
      <!-- <my-button class="btn" @click="btnClick" disabled>TEST</my-button> -->
      <my-dialog>
        <template v-slot:title>
          <h3>提示</h3>
        </template>
      </my-dialog>
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