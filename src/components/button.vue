<template>
  <button class="my-button">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'MyButton'
}
</script>

<style lang="less">
.my-button {
  display: inline-block;
  line-height: 1;
  white-space: normal;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:hover{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
</style>