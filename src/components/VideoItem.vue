<template>
    <div class="video">
        <div class="video-top">
        <div class="video-img">
            <img :src="video.coverSrc">
        </div>
        <div class="video-mask">
            <router-link :to="`/video/${video._id}`">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-video1"></use>
            </svg>
            </router-link>
        </div> 
        </div>
        <div class="video-info">
        <router-link :to="`/video/${video._id}`">
            <h2 class="video-title">{{ video.title }}</h2>
        </router-link>
        <div class="auth">
            <router-link :to="{name: 'page', query: { user: video.user._id } }" class="auth-avatar">
              <img :src="video.user.avator" alt="">
            </router-link>
            <router-link :to="{name: 'page', query: { user: video.user._id } }" class="auth-name">
            <span>{{ video.user.name }}</span>
            </router-link>
            <span class="timeago">{{ video.created_at | timeAgo }}</span>
            <a href="javascript:void(0)" class="hidden" @click="hiddenVideo(video)">
              X
              <span class="alter">不感兴趣</span>
            </a>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'videoitem',
  props: ['video'],
  methods: {
    hiddenVideo (video) {
      this.$store.commit('HIDDEN_VIDEO', video)
    }
  }
}
</script>

<style lang="scss" scoped>
.video {
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  width: 20.5rem;
  border-radius: .5rem;
  overflow: hidden;
  box-shadow: 1px 2px 2px rgba(0,0,0,.5);
  margin: 1.5rem 0 0 2rem;
  position: relative;
  height: 17rem;
  transition: all .2s;

  &:hover {
    box-shadow: 4px 4px 4px rgba(0,0,0,.3)
  }

  .video-top {
    width: 100%;
    height: 10.625rem;
    position: relative;

    .video-img {
      height: 10.625rem;
      width: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .video-mask {
      position: absolute;
      top: 0;right: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.5);
      
      a {
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          width: 3rem;
          height: 3rem;
          color: #fff;
          transition: color .3s;
        }

        &:hover > svg {
          color: red;
        }

      }
    }

  }

  .video-info {
    width: 100%;
    border: 1px solid #eee;

    a:hover > h2 {
      color: red;
    }

    .video-title {
      margin: 0;
      font-size: 1rem;
      padding: .5rem;
      letter-spacing: 1px;
      color: #34332b;
      min-height: 3.3rem;
    }

    .auth {
      width: 100%;
      display: flex;
      

      .auth-avatar {
        display: block;
        flex-basis: 2rem;
        height: 2rem;
        border-radius: 50%;
        overflow: hidden;
        margin: .5rem;

        img {
          max-width: 100%;
          height: 2rem;
        }
      }

      .auth-name {
        display: block;
        padding: .5rem .5rem .5rem 0;
        flex-basis: 9rem;
        height: 1.6rem;
        overflow: hidden;
        align-self: center;
        color: #333;

        &:hover {
          color: red;
        }
      }

      .timeago {
        font-size: 0.625rem;
        flex-basis: 6rem;
        align-self: center;
        padding: .4rem 0;
        text-align: right;
      }
    }
  }

  .hidden {
    display: block;
    font-size: .8rem;
    padding: 1rem 0 0 1rem;
    position: relative;
    color: #666;

    &:hover {
      color: red;
    }

    &:hover > .alter {
      display: block;
    }
  }

  .alter {
    display: none;
    position: absolute;
    color:white;
    background: red;
    border-radius: 5px;
    width: 4rem;
    font-size: .625rem;
    top: .35rem;
    right: 1.3rem;
    padding: .5rem;
    border-right: none;
    transition: all .5s;

    &::before {
      content: '';
      width: 0;
      height: 0;
      border: .625rem solid transparent;
      border-left-color: red;
      position: absolute;
      top: 13%;
      left: 95%;
    }
  }

}
</style>
