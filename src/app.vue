<template>
  <div id="root">
    <div class="btn-content">
      <transition name="ts">
        <div v-show="visible">动画效果</div>
      </transition>
      <button @click="toggleVisible">Toggle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Hello Vue",
      types: ["primary", "success", "info", "warning", "danger"],
      visible: true
    };
  },
  methods: {
    btnClick(args_1, args_2) {
      console.log(args_1, args_2);
    },
    toggleVisible() {
      this.visible = !this.visible;
    }
  }
};
</script>
<style lang="less">
.btn-content {
  .btn {
    margin-left: 10px;
  }
  .ts-enter {
    opacity: 0;
  }
  .ts-enter-to {
    opacity: 1;
  }
  .ts-enter-active {
    transition: all 0.5s;
  }
  .ts-leave {
    opacity: 1;
  }
  .ts-leave-to {
    opacity: 0;
  }
  .ts-leave-active {
    transition: all 0.5s;
  }
}
.plain {
  margin-top: 20px;
}
</style>