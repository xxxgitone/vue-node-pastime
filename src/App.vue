<template>
  <div id="app">
    <header class="header" :class="{ headerBg: !isHome || scrolled}">
      <div class="navWrap">
        <span class="logo"><router-link :to="'/'">vn-pastime</router-link></span>
        <nav class="nav">
          <ul class="nav-list">
            <li><router-link :to="'/videolist'">VIDEO</router-link></li>
            <li><router-link :to="'/images'">IMAGES</router-link></li>
            <li><router-link :to="'/chat'" >DISCUSSING</router-link></li>
            <li><a href="#">ABOUT</a></li>
            <li v-show="!token"><a href="#" @click.prevent="showSignDia">LOGIN</a></li>
          </ul>
        </nav>
        <div class="search" :class="{ flex: isShow }">
          <svg @click="showSearch" class="icon" aria-hidden="true">
              <use xlink:href="#icon-search"></use>
          </svg>
          <input ref="search" 
            :class="{ input: isShow }" 
            @blur="showSearch" 
            type="text" placeholder="search">
        </div>
        <PersonalMenu v-show="token" :user="user" ></PersonalMenu>
      </div>
    </header>
    <router-view></router-view>
    <SignDialog v-show="showSignDialog" :message="message">
      <h2 v-if="signType === 'signin'">SIGN &nbsp;IN</h2>
      <h2 v-else-if="signType === 'signup'">SIGN &nbsp;UP</h2>
    </SignDialog>
  </div>
</template>

<script>
import PersonalMenu from 'components/menu/personalMenu'
import SignDialog from 'components/signin/SignDialog'
import { mapState } from 'vuex'
export default {
  components: {
    PersonalMenu,
    SignDialog
  },
  data () {
    return {
      isShow: false,
      scrolled: false,
      showMenued: false
    }
  },
  created () {
    // 如果token存在，直接获取用户信息
    if (this.$store.state.token) {
      this.$store.dispatch('FETCH_SIGNIN_USER')
    }
  },
  computed: {
    ...mapState({
      token: 'token',
      user: 'user',
      isHome: 'isHome',
      message: 'message',
      showSignDialog: 'showSignDialog',
      signType: 'signType'
    })
  },
  methods: {
    showSearch () {
      if (this.isShow === false) {
        this.isShow = true
        this.$refs.search.focus()
      } else {
        this.isShow = false
      }
    },
    updateScrollTop () {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      scrollTop > 0 ? this.scrolled = true : this.scrolled = false
    },
    // 显示登录注册框
    showSignDia () {
      this.$store.commit('SHOW_SIGN_DIALOG')
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScrollTop)
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/variables.scss';
@import './assets/scss/mixins.scss';

#app {
  font-size: 1rem;
}
.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.headerBg {
  background-color: $mainBlack !important;
}

.header {
  width: 100%;
  height: 3.75rem;
  position: fixed;
  background: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .3));
  padding: 0 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 1;
  transition: background .3s;
}

.navWrap {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  @include flexCenter;

  .logo {
    font-family:"Federant", cursive !important;
    font-size:1.875rem;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex: 1;
    flex-basis: 15%;
    
    a {
      color: red;
    }
  }

  .nav {
    flex: 2;
    height: 100%;
    flex-basis: 50%;
    transition: all 1s;

    .nav-list {
      display: flex;
      justify-content:  space-around;
      align-items: center;
      height: 100%;

      li {
        flex: 6;
        height: 100%;
        
      }

      a {
        font-size: 1rem;
        color: #fff;
        display: inline-block;
        height: 100%;
        @include flexCenter;
        transition: all .2s;
        letter-spacing: 1px;

        &:hover {
          border-bottom: 3px solid red;
          background-color: rgba(0, 0, 0, .5);
        }
      }
    }
  }

  .flex {
      flex: 1;
  }

  .search {
    flex-basis: 14%;
    text-align: center;
    height: 100%;
    @include flexCenter;
    position: relative;
    transition: all .2s;

    svg {
      cursor: pointer;
      position: absolute;
      right: 83%;
    }

    input {
      border: none;
      outline: none;
      color: rgba(255, 255, 255, .6);
      width: 0;
      background-color: rgba(0,0,0, .0);
      transition: all .2s;
    }

    .input {
      padding: 0.625rem 1.3rem;
      width: 80%;
      border-bottom: 2px solid #fff;
    }
  }
}
</style>
