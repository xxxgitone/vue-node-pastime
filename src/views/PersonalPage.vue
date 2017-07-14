<template>
  <div>
    <div class="personalPage">
      <div class="personalInfo">
        <img src="https://1x.com/images/user/7059ae85778abd28a685d4fab79fb997-hd2.jpg">
        <div class="page-mask">
          <img :src="userInfo.avatar_url" class="avatar">
          <div class="name">{{ userInfo.name }}</div>
          <span 
            v-show="userInfo.name === user.name" 
            class="upload-button" 
            title="修改头像" 
            @click="switchShowFlag">+</span>
        </div>
      </div>
      <InfoContainer></InfoContainer>
      <InfoDialog></InfoDialog>
      <Upload v-show="showFlag" @close="closeUpload"></Upload>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import InfoContainer from '../components/InfoContainer'
import InfoDialog from '../components/InfoDialog'
import AppFooter from '../components/App-Footer'
import Upload from '../components/upload/upload'

export default {
  name: 'personalpage',
  data () {
    return {
      showFlag: false
    }
  },
  components: {
    InfoContainer,
    InfoDialog,
    AppFooter,
    Upload
  },
  created () {
    this.fetcheUser()
  },
  watch: {
    '$route': 'fetcheUser'
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo,
      user: state => state.user
    })
  },
  methods: {
    fetcheUser () {
      const id = this.$route.query.user
      this.$store.commit('FETCH_USER_INFO', id)
    },
    switchShowFlag () {
      this.showFlag = !this.showFlag
    },
    closeUpload () {
      this.showFlag = false
    }
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
    background: #eee;
    padding-bottom: 1rem;
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

    .upload-button {
      display: inline-block;
      background: blue;
      color: white;
      width: 2rem;
      height: 2rem;
      text-align: center;
      line-height: 2rem;
      font-size: 1.5rem;
      border-radius: 50%;
      cursor: pointer;
    }
  }
}
</style>
