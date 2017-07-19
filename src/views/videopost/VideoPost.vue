<template>
  <div>
    <div class="videopost">
      <div class="videopost-wrapper">
        <h2>分享视频</h2><span class="input-message">不能为空</span>
        <form class="postForm">
          <div class="form-controls">
            <label class="label" for="videoUrl">链接</label>
            <input id="videoUrl" placeholder="请输入正确的资源链接" v-model="postData.playUrl" >
          </div>
          <div class="form-controls">
            <label class="label" for="videoTitle">标题</label>
            <input id="videoTitle" placeholder="请填写视频标题"  v-model="postData.title" >
          </div>
          <div class="form-controls">
            <label class="label" for="videoCover">封面</label>
            <input id="videoCover" placeholder="请输入正确的封面链接" v-model="postData.coverSrc" >
          </div>
          <button ref="postButton" class="postButton" @click.prevent="postVideo">
            <span v-show="!isSubmited">发布视频</span>
            <span v-show="isSubmited">发布中...</span>
          </button>
        </form>
      </div>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import { postVideo } from 'api/video'
import AppFooter from 'components/footer/App-Footer'
export default {
  components: {
    AppFooter
  },
  data () {
    return {
      postData: {
        playUrl: '',
        title: '',
        coverSrc: ''
      },
      isSubmited: false
    }
  },
  methods: {
    postVideo () {
      if (this.postData.playUrl.trim() && this.postData.title.trim() && this.postData.title.trim()) {
        const { postButton } = this.$refs
        this.isSubmited = true
        postButton.disabled = 'disabled'
        postVideo(this.postData).then(res => {
          if (res.data.success) { // 成功
            this.$router.push('/post/success')
            this.isSubmited = false
            postButton.disabled = ''
          } else {
            this.isLoading = false
            postButton.disabled = ''
          }
        })
      }
    }
  },
  mounted () {
    this.$store.state.isHome = false
  }
}
</script>

<style lang="scss" scoped>
.videopost {
  font-size: 1rem;
  min-height: calc(100vh - 7rem);
  background: #eee;
  padding-top: 3.75rem;
}

.videopost-wrapper {
  width: 50%;
  margin: 0 auto;
}
.postForm {
  width: 100%;
  display: flex;
  flex-direction: column;

  .form-controls {
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    margin-bottom: .5rem;

    .label {
      padding: .5rem 0;
    }

    .label::after {
      content: '*';
      color: red;
    }

    input {
      outline: none;
      border: 1px solid #999;
      color: #666;
      padding: .5rem .5rem;
      border-radius: 5px;
    }
  }

  .postButton {
    width: 50%;
    border: none;
    outline: none;
    background: black;
    padding: .5rem 0;
    text-align: center;
    align-self: center;
    margin-top: 1rem;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    transition: all .2s;

    &:hover {
      background: red;
    }
  }
}
</style>
