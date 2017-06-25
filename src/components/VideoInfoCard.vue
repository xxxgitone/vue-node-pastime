<template>
  <div class="video-card">
    <img src="http://img.kaiyanapp.com/b9367f51f6378952a22a7f83615d5090.jpeg?imageMogr2/quality/60/format/jpg">
    <div class="video-info">
        <div>
            <span>xxxuthus</span>
            <span>三个月前</span>
        </div>
        <h3>塞尔达传说：荒野之息-攻略#15</h3>
        <div>
            <span>200喜欢</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'videocard'
}
</script>

<style lang="scss">
.video-card {
  display: flex;
  padding: 1rem;
  transition: all .3s;
  border-bottom: 1px solid #eee;
  &:hover {
    background: #eee;
  }

  img {
    max-width: 6rem;
    height: 6rem;
    margin-right: 1rem;
  }
}
</style>
