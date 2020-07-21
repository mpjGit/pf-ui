<template>
  <div>
    <input :type="type" :placeholder="placeholder" :disabled="disabled" />
  </div>
</template>

<script>
export default {
  name: "PFinput",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
</style>