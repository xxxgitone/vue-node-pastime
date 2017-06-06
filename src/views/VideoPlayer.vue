<template>
  <div class="video-player">
    <div class="player-bg">
      <div class="player-wrapper">
        <video 
          @timeupdate="updateBar" 
          @ended="showRepalyButton"
          @canplay="canplay"
          ref="video" 
          class="player-viewer" 
          :src="playUrl" 
          autoplay>
          </video>

        <div class="slide">
          <div class="silde-top">
            <span class="collect" @click="handleCollect" :class="{ selected: selectedCol}">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jinlingyingcaiwangtubiao24"></use>
              </svg>
            </span>
            <span class="support" @click="handleSupport" :class="{ selected: selectedSup}">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zan2"></use>
              </svg>
            </span>
          </div>
          <div class="videoSrc">
            <span v-for="src in videoInfo.videosrc" :class="{ select: selectedSrc === src.name }" @click="switchSrc(src)">
              {{ src.name }}
            </span>       
          </div>
        </div>

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

          <span class="duration">
            <span class="curTime">{{ currentTime | durationFormat }}</span>
            {{ videoInfo.duration | durationFormat }}
          </span>

          <div class="player-volume">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yinliang"></use>
            </svg>
            <div ref="volumeBar" class="volume-bar" @click="handleVolume">
              <span ref="volumeLevle" class="volume-levle"></span>
            </div>
          </div>
          
          <div class="player-rate">
              <span class="current-value">{{ currentSpeed }}</span>
              <div class="select">
                <span v-for="rate in wordSpeeds" @click="handleSpeed(rate)">
                  {{ rate }}
                  </span>
              </div>
          </div>

        <a href="#" class="player-vote"></a>
        <a href="#" class="player-vote"></a>
      </div>     
      </div>
    </div>

    <div class="loading" v-show="loading">
        <img src="../assets/img/loading.jpg"/>
    </div>

    <div class="replay" v-show="playend" @click="replay">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhongbo"></use>
      </svg>
      <span class="text">重播</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'video',
  data () {
    return {
      playIcon: 'Ⅱ',
      currentTime: 0,
      currentSpeed: '1.0x',
      wordSpeeds: ['2.0x', '1.5x', '1.0x', '0.5x'],
      selectedSrc: '标清',
      playUrl: '',
      selectedCol: false,
      selectedSup: false,
      loading: true,
      playend: false,
      volume: 0.5
    }
  },
  methods: {
    // 当视频可以播放时执行
    canplay () {
      const { video } = this.$refs
      // 隐藏加载
      this.loading = false
      // 将声音设置成默认0.5
      video.volume = this.volume
    },
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
      const { video, progress, progressBar } = this.$refs
      const time = (event.offsetX / progress.offsetWidth) * video.duration
      const precent = (1 - (event.offsetX / progress.offsetWidth)) * 100
      progressBar.style.right = `${precent}%`
      video.currentTime = time
    },
    // 更新红色进度条
    updateBar () {
      const { video, progressBar } = this.$refs
      // 改变红色进度条的右偏移量，进度条是左边开始，所以需要用1减去
      const precent = (1 - (video.currentTime / video.duration)) * 100
      progressBar.style.right = `${precent}%`

      this.playIcon = video.currentTime === video.duration || video.paused ? '►' : 'Ⅱ'

      // 更新当前时间
      this.currentTime = Math.floor(video.currentTime)
    },
    // 处理音量
    handleVolume (e) {
      const { volumeBar, volumeLevle, video } = this.$refs
      const clientReact = volumeBar.getBoundingClientRect()
      const diffY = e.clientY - clientReact.bottom
      volumeLevle.style.height = -diffY + 'px'
      this.volumeValue = volumeLevle.offsetHeight / volumeBar.offsetHeight
      video.volume = this.volumeValue
    },
    // 处理语速
    handleSpeed (rate) {
      const { video } = this.$refs
      this.currentSpeed = rate
      video.playbackRate = parseFloat(this.currentSpeed)
    },
    // 切换标清，高清
    switchSrc (src) {
      this.selectedSrc = src.name
      this.playUrl = src.url
    },
    // 收藏
    handleCollect () {
      this.selectedCol ? this.selectedCol = false : this.selectedCol = true
    },
    // 点赞
    handleSupport () {
      this.selectedSup ? this.selectedSup = false : this.selectedSup = true
    },
    // 显示重播按钮
    showRepalyButton () {
      this.playend = true
    },
    // 重播
    replay () {
      let { video } = this.$refs
      video.play()
      this.playend = false
    }
  },
  computed: {
    videoInfo () {
      const { id } = this.$route.params
      const { videos } = this.$store.state
      const video = videos.find(video => video.id === Number(id))
      this.playUrl = video.playUrl
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
  overflow: hidden;

  &:hover > .slide {
    transform: translateX(0);
  }

  &:hover > .player-controls {
    transform: translateY(0);
  }



  .player-viewer {
    display: block;
    width: 62.5rem;
    height: 100%;
    cursor: pointer;
  }

  .slide {
    // border: 1px solid red;
    background: rgba(0, 0, 0, .2);
    position: absolute;
    top: 10%;
    right: 10%;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transform: translateX(250%);
    transition: all .3s;

    &:hover {
      transform: translateY(0);
    }

    .silde-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      // height: 
      span {
        cursor: pointer;
        padding: .3rem 0;
      }
      svg {
        height: 2.5rem;
        width: 2.3rem;
        color: white;
      }

      .selected > svg {
        color: red;
      }
    }

    .videoSrc {
      display: flex;
      flex-direction: column;

      span {
        font-size: 1.2rem;
        color: white;
        padding: .5rem 1rem;
        // border: 1px solid rgba(0, 0, 0, .5);
        border-radius: 5px;
        cursor: pointer;
        margin-top: 1px;

        &:hover {
          background: red;
        }
      }

      span.select {
        background: red;
      }
    }
  }

  .player-controls {
    position: absolute;
    height: 3rem;
    width: 55.5rem;
    background: rgba(0, 0, 0, .3);
    bottom: 0;
    left: calc(50% - (55.5rem / 2));
    display: flex;
    transform: translateY(100%);
    transition: all .3s;

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
          top:0;left: 0;bottom: 0;right: 100%;
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

      .curTime {
        color: red;
        font-size: 0.625rem;
        display: block;
        padding-right: .5rem;
      }
    }

    .player-volume {
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;
      
      &:hover .volume-bar {
        display: block;
      }

      svg {
        width: 2rem;
        height: 2rem;
        color: white;
      }

      .volume-bar {
        position: absolute;
        display: none;
        width: 5px;
        height: 3.5rem;
        background: white;
        bottom: 72%;
        left: 50%;
        border-radius: 5px;
        transform: translateX(-50%);
        outline: 2px;
        transition: all .2s;
      }

      .volume-levle {
        position: absolute;
        bottom: 1%;
        left: 52%;
        width: 7px;
        height: 50%;
        background-color: red;
        border-radius: 5px;
        transform: translateX(-50%);
      }

    }

    .player-rate {
      align-self: center;
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

 .loading {
     height: 32rem;
     width: 63rem;
     background: #1A1A1A;
     display: flex;
     justify-content: center;
     align-items: center;
     position: absolute;
     top:9%;
     left: 10.8rem;

     img {
       width: 10%;
     }
   }

   .replay {
     width: 3rem;
     cursor: pointer;
     position: absolute;
     top: 45%;
     left: 50%;
     transform: translate(-50%, -50%);
     text-align: center;

     svg {
       width:3rem;
       height: 3rem;
     }

     .text {
       color: white;
       font-size: .625rem;
     }
   }

</style>
