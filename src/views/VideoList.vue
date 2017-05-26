<template>
  <div class="videolist">
      <div class="banner">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--sad"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--kiss"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--joy"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--happy-"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--cool"></use>
        </svg>    
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--astonished-"></use>
        </svg>    
      </div>
      <div class="videos">
        <VideoItem v-for="(video, index) in videos" 
          :video="video" 
          :key="index">
        </VideoItem>
      </div>
  </div>
</template>

<script>
import VideoItem from '../components/VideoItem'
import { mapState } from 'vuex'
export default {
  name: 'videolist',
  components: {
    VideoItem
  },
  watch: {
    '$route': 'fetchVideos'
  },
  created () {
    this.fetchVideos()
  },
  computed: {
    ...mapState({
      videos: 'videos'
    })
  },
  methods: {
    fetchVideos () {
      this.$store.commit('FETCH_VIDEOS')
    }
  },
  mounted () {
    this.$store.state.isHome = false
  }
}
</script>

<style lang="scss" scoped>
.videolist {
  font-size: 1rem;
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-image: url('https://1x.com/images/user/6872df05db6242eb3f61f8f1e646deb3-hd2.jpg');
  background-repeat: no-repeat;
  background-size: 100% 28.125rem;
}

.banner {
    width: 85%;
    background: white;
    position: absolute;
    top: 25rem;left: 9%;
    display: flex;
    justify-content: space-between;
    border-radius: 1.5rem;
    padding: 1rem 4rem;
    box-shadow: 0 4px 3px rgba(0,0,0,.3);

    svg {
      width: 5rem;
      height: 5rem;
    }
  }

.videos {
  min-height: 100rem;
  padding-top: 33rem;
  padding-bottom: 3rem;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: wrap;
  // justify-content: space-between;
}
</style>
