<template>
  <div class="video-player">
    <div class="player-bg">
      <div class="player-wrapper">
        <video 
          @timeupdate="updateBar" 
          ref="video" 
          class="player-viewer" 
          :src="videoInfo.playUrl" 
          autoplay>
          </video>

        <div class="player-controls">

          <a class="player-button" @click="togglePlay()">{{ playIcon }}</a>

          <div class="progress">
            <div ref="progress" class="progress-bar" @click="updateProgress">
              <span 
                ref="progressBar" 
                class="progress-rate">
                </span>
            </div>
          </div>

          <span class="duration">{{ videoInfo.duration | durationFormat }}</span>

          <div class="player-volume">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yinliang"></use>
            </svg>
            <div class="volume-bar">
              <span class="volume-levle"></span>
            </div>
          </div>
          
          <div class="player-rate">
              <span class="current-value">1.0x</span>
              <div class="select">
                <span>2.0x</span>
                <span>1.5x</span>
                <span>1.0x</span>
                <span>0.5x</span>
              </div>
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
  data () {
    return {
      playIcon: 'Ⅱ'
    }
  },
  methods: {
    // 控制播放和暂停
    togglePlay () {
      let video = this.$refs.video
      const method = video.paused ? 'play' : 'pause'
      const playIcon = video.paused ? 'Ⅱ' : '►'
      this.playIcon = playIcon
      video[method]()
    },
    // 调整进度
    updateProgress (event) {
      const { video, progress } = this.$refs
      const time = (event.offsetX / progress.offsetWidth) * video.duration
      video.currentTime = time
    },
    // 更新红色进度条
    updateBar () {
      const { video, progressBar } = this.$refs
      // 改变红色进度条的右偏移量，进度条是左边开始，所以需要用1减去
      const precent = (1 - (video.currentTime / video.duration)) * 100
      progressBar.style.right = `${precent}%`

      this.playIcon = video.currentTime === video.duration || video.paused ? '►' : 'Ⅱ'
    }
  },
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
    cursor: pointer;
  }

  .player-controls {
    position: absolute;
    height: 3rem;
    width: 55.5rem;
    background: rgba(0, 0, 0, .3);
    bottom: 0;
    left: calc(50% - (55.5rem / 2));
    display: flex;

    .player-button {
      display: block;
      color: white;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 1rem;
      cursor: pointer;
      font-size: 1.5rem;
    }

    .progress {
      width: 40rem;
      height: 100%;
      display: flex;
      align-items: center;

      .progress-bar {
        width: 39rem;
        height: 5px;
        background: white;
        border-radius: 5px;
        position: relative;
        cursor: pointer;

        .progress-rate {
          position: absolute;
          border-radius: 5px;
          top:0;left: 0;bottom: 0;right: 90%;
          background: red;
        }
      }
    }

    .duration {
      display: block;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 .5rem;
      color: white;
    }

    .player-volume {
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;

      svg {
        width: 2rem;
        height: 2rem;
        color: white;
      }

      .volume-bar {
        position: absolute;
        width: 4px;
        height: 3.5rem;
        background: white;
        bottom: 72%;
        left: 50%;
        border-radius: 5px;
        transform: translateX(-50%);
      }

    }

    .player-rate {
      align-self: center;
      // height: 1rem;
      // overflow: hidden;
      color: white;
      width: 4rem;
      padding: .5rem .5rem;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      height: 100%;
      transition: all .2s;

      &:hover {
        background-color: rgba(0, 0, 0, .3);
      }

      &:hover > span {
        background: rgba(0, 0, 0, .3);
      }

      .current-value {
        display: block;
        width: 80%;
        height: 100%;
        font-size: 0.625rem;
        padding: 0 .4rem;
        text-align: center;
        height: 70%;
        display: flex;
        align-items: center;
        border-radius: 5px;
        transition: all .2s;
        background: red;
      }

      &:hover > .select {
        transform: translateY(-72%);
        display: block;
      }

      .select {
        width: 100%;
        position: absolute;
        left: 0;
        transform: translateY(40%);
        display: none;
        background: rgba(0, 0, 0, .4);
        transition: all .3s;

        span {
          display: block;
          width: 100%;
          text-align: center;
          padding: .3rem 0;
          transition: all .2s;

          &:hover {
            background: rgba(0, 0, 0, .4);
          }
        }
      }
    }
  }
}

</style>
