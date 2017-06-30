<template>
  <div class="imagelist">
    <div class="imageWrapper">
      <img v-for="image in images" :src="image.image_url" :key="image._id">
    </div> 
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'imagelist',
  created () {
    this.$store.commit('FETCH_IMAGES')
  },
  computed: {
    ...mapState({
      images: 'images'
    })
  },
  mounted () {
    this.$store.state.isHome = false
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';

.imagelist {
  @include stickFooter;
  background: #eee;

  .imageWrapper {
    width: 90%;
    margin: 0 auto;
  }
  img {
    height: 16.5rem;
    width: auto;
    margin: 1rem 0 0 .6rem;
  }
}
</style>
