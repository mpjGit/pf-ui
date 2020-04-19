<template>
  <div id="root">
    <div id="app">{{msg}}</div>
    <my-button>TEST</my-button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Hello Vue"
    };
  }
};
</script>