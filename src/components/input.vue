<template>
  <div>
    <input
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
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
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleInput(evt) {
      this.$emit("input", evt.target.value);
    }
  }
};
</script>

<style>
</style>