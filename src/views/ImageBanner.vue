<template>
  <div class="imageBanner">
    <div class="img-wrapper">
      <img :src="imageInfo.image_url">
    </div>
    <div class="details">
      <div class="userInfo">
        <img class="avatar" :src="imageInfo.user.avatar_url">
        <span>{{ imageInfo.user.name }}</span>
      </div>
      <div class="comment">
        <span class="placeholder" v-show="comments.length === 0">还没有评论..</span>
        <p class="comment-info" v-for="comment in comments" :key="comment._id">
          <span class="comment-auth">{{ comment.user && comment.user.name }}</span>
          <span class="comment-text">{{ comment.text }}</span>
        </p>
      </div>
      <div class="zan" :class="{selected: isSelected}">
        <svg v-if="!isSelected" class="icon" aria-hidden="true" @click="collect">
          <use xlink:href="#icon-zan1"></use>
        </svg>
        <svg v-else-if="isSelected" class="icon" aria-hidden="true" @click="collect">
          <use xlink:href="#icon-jinlingyingcaiwangtubiao24"></use>
        </svg>
        <span>{{ imageInfo.collections_count }}</span>赞
      </div>
      <textarea class="postComment" v-model="comment" placeholder="添加评论..." autofocus @keyup.enter="postComment"></textarea>
    </div>
    <span class="closeBanner" @click="closeBanner">&times;</span>
    <span v-show="this.index > 0" class="pre" @click="preImg">&lt;</span>
    <span class="next" @click="nextImg">&gt;</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { fetchImageById } from 'api/image.js'
import { postCommentApi, fetchCommentsByType } from 'api/comment.js'
export default {
  data () {
    return {
      imageInfo: {
        user: {
          avatar_url: '',
          name: ''
        }
        // 其他属性
      },
      isSelected: false,
      index: '',
      comment: '',
      comments: []
    }
  },
  created () {
    const { id } = this.$route.params
    const { images } = this.$store.state
    this.fetchImg(id)
    // 获取当前图片的index
    const img = images.find((img) => img._id === id)
    this.index = images.indexOf(img)
  },
  computed: {
    ...mapState({
      user: 'user'
    })
  },
  methods: {
    collect () {
      this.isSelected = !this.isSelected
      this.isSelected ? this.imageInfo.collections_count++ : this.imageInfo.collections_count--
    },
    closeBanner () {
      this.$router.push('/images')
    },
    fetchImg (id) {
      this.comments = []
      fetchImageById(id).then(res => {
        this.imageInfo = res.data
      }).then(() => {
        fetchCommentsByType('image', this.imageInfo._id).then(res => {
          this.comments.push(...res.data)
        })
      })
    },
    preImg () {
      this.index--
      const img = this.$store.state.images[this.index]
      this.fetchImg(img._id)
    },
    nextImg () {
      this.index++
      const img = this.$store.state.images[this.index]
      this.fetchImg(img._id)
    },
    // 发表评论
    postComment () {
      const commentInfo = {
        user: {
          name: this.user.name,
          avatar_url: this.user.avatar_url,
          _id: this.user._id
        },
        text: this.comment,
        type: 'image',
        typeId: this.imageInfo._id
      }
      this.comment = ''
      postCommentApi(commentInfo).then(res => {
        this.comments.push(res.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.imageBanner {
  font-size: 1rem;
  position: fixed;
  height: 85vh;
  width: 70vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .7);
  background: white;
  display: flex;
  .img-wrapper {
    height: 100%;
    width: 65%;
    border-right: 1px solid #eee;
  }
  img {
    height: 100%;
    max-width: 100%;
  }

  .details {
    height: 100%;
    width: 35%;

    .userInfo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 5rem;
      width: 100%;
      border-bottom: 1px solid #eee; 
      padding-left: 1rem;

      span {
        padding-left: 1rem;
      }
    }

    .avatar {
      height: 60%;
      border-radius: 50%;
    }

    .comment {
      overflow-y: scroll;
      height: 65%;
      border-bottom: 1px solid #eee;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .placeholder {
        padding: .5rem 0 0 .5rem;
      }

      .comment-info {
        text-align: left;
        margin: 0;
        padding: .5rem 0 0 1rem;
      }
      .comment-auth {
        font-weight: bold;
      }

      .comment-text {
        color: #999;
      }
    }

    .zan {
      text-align: left;
      height: 3rem;
      padding: .5rem 0 .5rem 1rem;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
      }
    }
    .postComment {
      height: 2rem;
      width: 90%;
      color: #999;
      outline: none;
      border: none;
      // 禁止拖动大小
      resize: none;
      border-bottom: 1px solid rgb(0, 50, 200);
    }
  }

  .closeBanner {
    color: white;
    font-size: 2.5rem;
    position: absolute;
    top: -2.5rem;
    right: -8rem;
    cursor: pointer;
    transform: rotate(180deg);
    transition: all .3s;
    transform-origin: center center;

    &:hover {
      color: red;
      transform: rotate(0);
    }
  }

  .pre, .next {
    color: white;
    background: rgba(0, 0, 0, .8);
    font-weight: bold;
    font-size: 1.5rem;
    padding: 1.2rem 1rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all .3s;

    &:hover {
      background: red;
    }
  }

  .pre {
    left: -3.5rem;
  }
  .next {
    right: -3.5rem
  }
}
</style>
