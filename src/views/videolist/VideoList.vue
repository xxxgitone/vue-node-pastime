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
        <Loading v-show="!videos.length > 0"></Loading>
        <VideoItem v-for="(video, index) in videos" 
          :video="video" 
          :key="index">
        </VideoItem>
      </div>
      <Pagination v-show="videos.length"></Pagination>
      <AppFooter v-show="videos.length"></AppFooter>
  </div>
</template>

<script>
import VideoItem from 'components/video/VideoItem'
import Pagination from 'components/pagination/Pagination'
import AppFooter from 'components/footer/App-Footer'
import Loading from 'components/loading/loading.vue'
import { mapState } from 'vuex'
export default {
  components: {
    VideoItem,
    Loading,
    Pagination,
    AppFooter
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
      // 如果当前页面有查询参数，获取，传入后台，防止刷新回到第一页
      // 这里弄了好久，路由过来的参数是字符串，使用数字的话千万要记得转换！！！！
      const p = Number(this.$route.query.p) || 1
      this.$store.commit('FETCH_VIDEOS', p)
    }
  },
  mounted () {
    this.$store.state.isHome = false
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/mixins.scss";

.videolist {
  font-size: 1rem;
  @include stickFooter;
  width: 100%;
  position: relative;
  background-image: url('https://1x.com/images/user/6872df05db6242eb3f61f8f1e646deb3-hd2.jpg');
  background-repeat: no-repeat;
  background-size: 100% 28.125rem;
  @include mediaQ(480px) {
    background-size: 100% 15rem;
  }
  @include mediaQ(768px, 481px) {
    background-size: 100% 25rem;
  }
  @include mediaQ(960px, 769px) {
    background-size: 100% 25rem;
  }
}

.banner {
    width: 85%;
    background: white;
    position: absolute;
    top: 25rem;
    left: 9%;
    display: flex;
    justify-content: space-between;
    border-radius: 1.5rem;
    padding: 1rem 4rem;
    box-shadow: 0 4px 3px rgba(0,0,0,.3);

    @include mediaQ(480px) {
      top: 12rem;
      padding: 1rem 2rem;
    }
    @include mediaQ(960px, 481px) {
      top: 22rem;
      padding: 1rem 2rem;
    }

    svg {
      width: 5rem;
      height: 5rem;
      @include mediaQ(480px) {
        width: 3rem;
        height: 3rem;
      }
      @include mediaQ(768px, 481px) {
        width: 4rem;
        height: 4rem;
      }
      @include mediaQ(960px, 769px) {
        width: 4.5rem;
        height: 4.5rem;
      }
    }
  }

.videos {
  padding-top: 33rem;
  padding-bottom: 3rem;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: wrap;
  @include mediaQ(480px) {
    padding-top: 15rem;
  }
  @include mediaQ(768px, 481px) {
    padding-top: 27rem;
  }
  @include mediaQ(960px, 769px) {
    padding-top: 27rem;
  }
  @include mediaQ(1365px, 961px) {
    padding-top: 30rem;
  }
  @include mediaQ(1365px) {
    justify-content: space-around;
    width: 90%;
  }
}
</style>
