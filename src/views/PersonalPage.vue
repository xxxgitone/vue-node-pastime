<template>
  <div class="personalPage">
    <div class="personalInfo">
      <img src="https://1x.com/images/user/7059ae85778abd28a685d4fab79fb997-hd2.jpg"/>
      <div class="page-mask">
        <img :src="userInfo.avatar_url" class="avatar">
        <div class="name">{{ userInfo.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'personalpage',
  created () {
    const id = this.$route.params.id
    this.$store.commit('FETCH_USER_INFO', id)
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  mounted () {
    this.$store.state.isHome = false
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';

.personalPage {
    @include stickFooter;
}

.personalInfo {
  width: 100%;
  height: 25rem;
  position: relative;

  img {
    max-height: 100%;
    width: 100%;
  }

  .page-mask {
    position: absolute;
    top: 0;left: 0;bottom: 0;right: 0;
    background: rgba(0, 0, 0, .5);
    @include flexCenter;
    flex-direction: column;

    .avatar {
      width: 10rem;
      height: 10rem;
      background: rgba(255, 255, 255, .5);
      border-radius: 10px;
      box-shadow: inset 5px 5px 5px rgba(0, 0, 0, .1);
      padding: .3rem;
    }

    .name {
      color: white;
      padding: 1.5rem 0;
      font-size: 1.5rem;
    }
  }
}
</style>
