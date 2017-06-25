<template>
  <div class="info-container">
    <div class="container-header">
        <span class="videoTab">视频</span>
    </div>
    <VideoInfoCard></VideoInfoCard>
  </div>
</template>

<script>
import VideoInfoCard from '../components/VideoInfoCard'
export default {
  name: 'infocontainer',
  data () {
    return {
      videoInfo: []
    }
  },
  components: {
    VideoInfoCard
  },
  created () {
    
  }
}
</script>

<style lang="scss" scoped>
.info-container {
   width: 60%;
   margin: 1rem auto 0 auto;
   border: 1px solid #eee;
   background: white;
}
.container-header {
  padding: 1rem;
  border-bottom: 1px solid #eee;;

  .videoTab {
    font-weight: bold;
    color: #999;
    letter-spacing: 3px;
    cursor: pointer;
  }
}
</style>
