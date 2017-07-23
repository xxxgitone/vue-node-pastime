<template>
  <div class="loading" :class="{isCenter: center}">
    <img width="32" height="32" src="./32X32.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '数据加载中...'
    },
    center: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .loading {
    width: 100%;
    text-align: center;

    .desc {
      font-size: 1rem;
    }
  }

  .isCenter {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
