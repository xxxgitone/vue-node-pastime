<template>
  <div class="videolist">
      <div class="banner">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--sad"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--kiss"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--joy"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--happy-"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--cool"></use>
        </svg>    
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--astonished-"></use>
        </svg>    
      </div>
      <div class="videos">
        <div class="video">
          <div class="video-top">
            <a href="#">
              <img src="https://i.ytimg.com/vi/vg9cNFPQFqM/hqdefault.jpg?custom=true&w=196&h=110&stc=true&jpg444=true&jpgq=90&sp=68&sigh=m7nPn8TaNQj1pU1JoObiX6voMtY">
            </a> 
          </div>
          <div class="video-info">
            <h2 class="video-title">主人归家与狗狗重逢，狗狗竟把主人堵在门口还叼出一条绳，看哭了</h2>
            <div class="auth">
              <div class="auth-avatar">
                <img src="http://p2.pstatp.com/large/411001640297c536bda" alt="">
              </div>
              <span class="auth-name">哈哈大头</span>
            </div>
            <span class="timeago">6分钟前</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'videolist',
  mounted () {
    this.$store.state.isHome = false
  }
}
</script>

<style lang="scss" scoped>
.videolist {
  font-size: 1rem;
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-image: url('https://1x.com/images/user/6872df05db6242eb3f61f8f1e646deb3-hd2.jpg');
  background-repeat: no-repeat;
  background-size: 100% 28.125rem;
}

.banner {
    width: 85%;
    background: white;
    position: absolute;
    top: 25rem;left: 9%;
    display: flex;
    justify-content: space-between;
    border-radius: 1.5rem;
    padding: 1rem 4rem;
    box-shadow: 0 4px 3px rgba(0,0,0,.3);

    svg {
      width: 5rem;
      height: 5rem;
    }
  }

.videos {
  height: 200rem;
  padding: 35rem calc(50% - 28.25rem) 0  calc(50% - 28.25rem);
}
</style>
