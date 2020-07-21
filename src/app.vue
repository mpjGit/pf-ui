<template>
  <div id="root">
    <div class="btn-content">
      <transition name="ts">
        <div v-show="visible">动画效果</div>
      </transition>
      <button @click="toggleVisible">Toggle</button>
      <Pf-Input placeholder="请输入" type="password" v-model="username"></Pf-Input>
      <div>{{ username }}</div>
    </div>
  </div>
</template>

<script>
import PfInput from "./components/input.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "Hello Vue",
      types: ["primary", "success", "info", "warning", "danger"],
      visible: true,
      username: ""
    };
  },
  methods: {
    btnClick(args_1, args_2) {
      console.log(args_1, args_2);
    },
    toggleVisible() {
      this.visible = !this.visible;
    }
  },
  components: {
    PfInput
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