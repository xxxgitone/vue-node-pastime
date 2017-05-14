<template>
    <div class="video">
        <div class="video-top">
        <div class="video-img">
            <img :src="video.imgSrc">
        </div>
        <div class="video-mask">
            <a href="#">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-video1"></use>
            </svg>
            </a>
        </div> 
        </div>
        <div class="video-info">
        <a href="#">
            <h2 class="video-title">{{ video.title }}</h2>
        </a>
        <div class="auth">
            <a href="#" class="auth-avatar">
              <img src="http://p2.pstatp.com/large/411001640297c536bda" alt="">
            </a>
            <a href="#" class="auth-name">
            <span>哈哈大头</span>
            </a>
            <span class="timeago">{{ video.created_at | timeAgo }}</span>
            <a href="#" class="hidden">...</a>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'videoitem',
  props: ['video']
}
</script>

<style lang="scss" scoped>
.video {
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  width: 18.75rem;
  border-radius: .5rem;
  overflow: hidden;
  box-shadow: 1px 2px 2px rgba(0,0,0,.5);
  margin: 1.5rem 0 0 1rem;
  position: relative;

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

    .video-title {
      margin: 0;
      font-size: 1rem;
      padding: .5rem;
      letter-spacing: 1px;
      color: #34332b;
    }

    .auth {
      width: 100%;
      display: flex;
      

      .auth-avatar {
        display: block;
        width: 2rem;
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
        align-self: center;
        color: #333;

        &:hover {
          color: red;
        }
      }

      .timeago {
        align-self: center;
        padding: .5rem 0 .5rem 2rem;
      }
    }
  }

  .hidden {
    font-size: 1.5rem;
    padding: .2rem 0 .5rem 2rem;
  }
}
</style>
