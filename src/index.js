import Vue from "vue";
import App from './app.vue';
import MyButton from './components/button.vue';

Vue.component(MyButton.name, MyButton);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})