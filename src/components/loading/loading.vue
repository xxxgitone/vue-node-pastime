<template>
  <div class="loading">
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
</style>
