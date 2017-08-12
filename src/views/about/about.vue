<template>
  <div class="about">
    <div class="mask">
      <div class="content">
        <h2>关于</h2>
        <p>本网站纯属个人学习成果，没有任何商业企图</p>
        <p>网站中的所有视频、图片抓自网络，如有侵权，请联系删除</p>
        <p>个人联系方式见网站首页底部</p>
        <p>感谢您的访问，有问题可以在github联系我，共同交流</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.state.isHome = false
  }
}
</script>

<style lang="scss" scoped>
  .about {
    height: 100vh;
    min-width: 100%;
    background-image: url('https://drscdn.500px.org/photo/223385001/q%3D80_m%3D1500/v2?webp=true&sig=415e1cc37bd8e71a6841862d37be40191792837e8bedcb1628e7f8ce2a2bc3cd');
    background-size: cover;
    .mask {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0,0,0,.3);
      display: flex;
      justify-content: center;
      align-items: center;
      .content {
        color: #fff;
      }
    }
  }
</style>
