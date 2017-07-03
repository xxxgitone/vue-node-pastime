<template>
  <div class="imagelist">
    <div class="imagesWrapper">
      <ImageItem v-for="image in images" :key="image._id" :image="image"></ImageItem>
    </div>
    <a href="#" class="loadMore" @click.prevent="fetchMore">加载更多</a>
    <router-view></router-view>
  </div>
</template>

<script>
import ImageItem from '../components/ImageItem'
import { mapState } from 'vuex'
export default {
  name: 'imagelist',
  components: {
    ImageItem
  },
  created () {
    this.$store.commit('FETCH_IMAGES', this.fetchCount)
  },
  computed: {
    ...mapState({
      images: 'images',
      fetchCount: 'fetchCount'
    })
  },
  methods: {
    fetchMore () {
      this.$store.state.fetchCount += 1
      this.$store.commit('FETCH_IMAGES', this.fetchCount)
    }
  },
  mounted () {
    this.$store.state.isHome = false
    window.addEventListener('scroll', () => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      // 页面滚动的高度 + 浏览器窗口的视口（viewport）高度 >= 整个页面可视区域高度 - 页面底部高度
      if (scrollTop + window.innerHeight >= document.body.clientHeight - 90 && this.$store.state.isFetch === false && this.fetchCount >= 2) {
        this.$store.state.isFetch = true
        this.fetchMore()
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';

.imagelist {
  @include stickFooter;
  text-align: center;
  // background: #eee;

  .imagesWrapper {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .loadMore {
    display: inline-block;
    padding: .5rem;
    margin: 1rem;
    color: white;
    background: #999;
    border-radius: 5px;
  }
}
</style>
