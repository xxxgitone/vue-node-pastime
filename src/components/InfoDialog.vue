<template>
  <div class="info-dialog" v-show="showInfoDialog">
    <div class="info-header">
        <span>提示信息</span>
        <span class="close" @click="closeDialog" >&times;</span>
    </div>
    <div class="info-body">
        您确定要删除吗？
    </div>
    <div class="info-button">
      <a href="#" @click.prevent="deleteVideo">确定</a>
      <a href="#" @click.prevent="closeDialog">取消</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'infodialog',
  computed: {
    ...mapState({
      showInfoDialog: 'showInfoDialog',
      deleteVideoid: 'deleteVideoid',
      user: 'user'
    })
  },
  methods: {
    closeDialog () {
      this.$store.state.showInfoDialog = false
    },
    deleteVideo () {
      this.$store.dispatch('DELETE_VIDEO_BY_ID', this.deleteVideoid).then(data => {
        if (data) {
          this.$store.state.showInfoDialog = false
          // 重新获取视频信息，
          this.$store.commit('FETCH_VIDEOS_BY_USERID', this.$route.query.user)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
.info-dialog {
  font-size: 1rem;
  position: fixed;
  height: 13rem;
  width: 24rem;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  border: 1px solid #eee;
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .5);

  .info-header {
    padding: .8rem 1rem;
    border-bottom: 1px solid #eee;
    position: relative;

    .close {
      position: absolute;
      top: 20%;
      right: 5%;
      font-size: 1.5rem;
      cursor: pointer;

      &:hover {
        color: red;
      }
    }
  }

  .info-body{
    @include flexCenter;
    height: 6rem;
    font-size: 1.2em;
    letter-spacing: 2px;
    border-bottom: 1px solid #eee;
  }

  .info-button {
    @include flexCenter;
    justify-content:space-around;
    height: 4rem;

    a {
      display: inline-block;
      padding: .5rem 1rem;
      color: white;
      border-radius: 6px;
    }

    a:nth-child(1) {
      background: red;
    }

    a:nth-child(2) {
      background: #999;
    }
  }
}
</style>
