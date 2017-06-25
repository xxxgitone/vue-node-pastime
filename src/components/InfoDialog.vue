<template>
  <div class="info-dialog">
    <div class="info-header">
        <span>提示信息</span>
        <span class="close">&times;</span>
    </div>
    <div class="">
        您确定要删除吗？
    </div>
  </div>
</template>

<script>
export default {
  name: 'infodialog'
}
</script>

<style lang="scss" scoped>
.info-dialog {
  position: fixed;
  height: 13rem;
  width: 24rem;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  border: 1px solid #eee;
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .5);

  .info-header {
    padding: .8rem 1rem;
    border-bottom: 1px solid #eee;
    position: relative;

    .close {
      position: absolute;
      top: 20%;
      right: 5%;
      font-size: 1.5rem;
      cursor: pointer;

      &:hover {
        color: red;
      }
    }
  }
}
</style>
