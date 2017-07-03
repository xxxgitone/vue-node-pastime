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
        <span class="placeholder">还没有评论..</span>
        <p class="comment-info">
          <span class="comment-auth"></span>
          <span></span>
        </p>
      </div>
      <div class="zan" :class="{selected: isSelected}">
        <svg v-if="!isSelected" class="icon" aria-hidden="true" @click="collect">
          <use xlink:href="#icon-zan1"></use>
        </svg>
        <svg v-else="isSelected" class="icon" aria-hidden="true" @click="collect">
          <use xlink:href="#icon-jinlingyingcaiwangtubiao24"></use>
        </svg>
        <span>{{ imageInfo.collections_count }}</span>赞
      </div>
      <textarea class="postComment" placeholder="添加评论..." autofocus></textarea>
    </div>
    <span class="closeBanner" @click="closeBanner">&times;</span>
    <span v-show="this.index > 0" class="pre" @click="preImg">&lt;</span>
    <span class="next" @click="nextImg">&gt;</span>
  </div>
</template>

<script>
import { fetchImageById } from '../api/image.js'
export default {
  name: 'imagebanner',
  data () {
    return {
      imageInfo: {
        user: {
          avatar_url: '',
          name: ''
        }
      },
      isSelected: false,
      index: ''
    }
  },
  created () {
    const { id } = this.$route.params
    const { images } = this.$store.state
    fetchImageById(id).then(res => {
      this.imageInfo = res.data
    })
    // 获取当前图片的index
    const img = images.find((img) => img._id === id)
    this.index = images.indexOf(img)
  },
  methods: {
    collect () {
      this.isSelected = !this.isSelected
      this.isSelected ? this.imageInfo.collections_count++ : this.imageInfo.collections_count--
    },
    closeBanner () {
      this.$router.push('/images')
    },
    fetchImg () {
      const img = this.$store.state.images[this.index]
      fetchImageById(img._id).then(res => {
        this.imageInfo = res.data
      })
    },
    preImg () {
      this.index--
      this.fetchImg()
    },
    nextImg () {
      this.index++
      this.fetchImg()
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
