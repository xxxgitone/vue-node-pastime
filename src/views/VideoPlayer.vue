<template>
  <div class="video-player">
    <div class="player-bg">
      <div class="player-wrapper">
        <video class="player-viewer" :src="videoInfo.playUrl" autoplay></video>

        <div class="player-controls">

          <a class="player-button">►</a>

          <div class="progress">
            <div class="progress-bar"></div>
          </div>

          <div class="player-volume">
            <div>icon</div>
            <div class="volume-bar">
              <span class="volume-levle"></span>
            </div>
          </div>
          
          <div class="player-rate">
            <select>
              <option value="2.0x">2.0x</option>
              <option value="2.0x">1.5x</option>
              <option value="2.0x">1.0x</option>
              <option value="2.0x">0.5x</option>
            </select>
          </div>

        <a href="#" class="player-vote"></a>
        <a href="#" class="player-vote"></a>
      </div>     
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'video',
  computed: {
    videoInfo () {
      const { id } = this.$route.params
      const { videos } = this.$store.state
      const video = videos.find(video => video.id === Number(id))
      return video
    }
  },
  mounted () {
    this.$store.state.isHome = false
  }
}
</script>

<style lang="scss" scoped>
.video-player {
  width: 100%;
  min-height: 100vh;
  font-size: 1rem;
}
.player-bg {
  width: 100%;
  height: 39rem;
  background: linear-gradient(to right, #696453, #101014);
  padding: 4rem 0 2rem 0;
}

.player-wrapper {
  width: 62.5rem;
  height: 31.25rem;
  margin: 0 auto;
  position: relative;

  .player-viewer {
    display: block;
    width: 62.5rem;
    height: 100%;
  }

  .player-controls {
    position: absolute;
    height: 3rem;
    width: 55.5rem;
    background: rgba(0, 0, 0, .3);
    bottom: 0;
    left: calc(50% - (55.5rem / 2))
  }

  
}

</style>
