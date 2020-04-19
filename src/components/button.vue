<template>
  <button class="my-button" :class="[`my-button--${type}`]">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "MyButton",
  props: {
    type: {
      // 数据类型：字符串
      type: String,
      default: 'primary'
    }
  }
};
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
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.my-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #66b1ff;
    border-color: #66b1ff;
  }
}
.my-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #85ce61;
    border-color: #85ce61;
  }
}
.my-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #a6a9ad;
    border-color: #a6a9ad;
  }
}
.my-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #ebb563;
    border-color: #ebb563;
  }
}
.my-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #f78989;
    border-color: #f78989;
  }
}
</style>