import Vue from "vue";
import App from "./app.vue";
import MyButton from "./components/button.vue";
import MyDialog from "./components/dialog.vue";

// 全局组测组件
Vue.component(MyButton.name, MyButton);
Vue.component(MyDialog.name, MyDialog);

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App },
});
