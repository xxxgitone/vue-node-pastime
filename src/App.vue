<template>
  <div id="app">
    <header class="header" :class="{ headerBg: !isHome || scrolled}">
      <div class="navWrap">
        <span class="logo"><router-link :to="'/'">vn-pastime</router-link></span>
        <nav class="nav">
          <ul class="nav-list">
            <li><router-link :to="'/videolist'">VIDEO</router-link></li>
            <li><a href="#">PICTURE</a></li>
            <li><a href="#">AMIZING</a></li>
            <li><a href="#">ABOUT</a></li>
            <li v-show="!token"><a href="#" @click.prevent="signin">LOGIN</a></li>
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
    <footer class="footer">
      <p class="contact">
        <a href="https://github.com/xxxgitone" target="_bank">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github"></use>
          </svg>
        </a>
        <a href="https://xxxgitone.github.io/" target="_bank">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-letter-b"></use>
          </svg>
        </a>
        <a href="https://www.zhihu.com/people/xxxjiang/activities" target="_bank">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhihu"></use>
          </svg>
        </a>
      </p>
      <span class="copy">Copyright © 2017 | <a href="https://github.com/xxxgitone" target="_bank">XUTHUS</a></span>
    </footer>
    <div class="singinMask" v-show="showSignin">
      <div class="title">
        <h2>SIGN &nbsp;IN</h2>
        <span class="message" :class="{ messageSuccess: message.success}">{{ message.message }}</span>
        <span class="close" @click="signin">&times;</span>
      </div>
      <Signin></Signin>
    </div>
  </div>
</template>

<script>
import Signin from './components/Signin'
import PersonalMenu from './components/personalMenu'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    Signin,
    PersonalMenu
  },
  data () {
    return {
      isShow: false,
      scrolled: false,
      showMenued: false
    }
  },
  created () {
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
      showSignin: 'showSignin'
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
    signin () {
      this.$store.commit('SHOW_SIGNIN_DIALOG')
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScrollTop)
  }
}
</script>

<style lang="scss">
@import "./assets/scss/normalize.scss";
@import "./assets/scss/variables.scss";
@import "./assets/scss/mixins.scss";

@font-face {
    font-family: 'Federant';
    src: url('../static/font/Federant-Regular.ttf');
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1rem;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  outline: none;
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

.footer {
  background: $mainBlack;
  padding: 1rem calc(50% - 31.25em);
  @include flexCenter;
  flex-direction: column;

  .contact {
    width: 100%;
    text-align: center;

    a {
      color: #9b9b9b;
      display: inline-block;
      width: 1.875rem;
      height: 1.875rem;
      margin: 0 0.3rem;

      svg {
        display: block;
        width: 100%;
        height: 100%;
        transition: color .3s;
      }

      &:hover {

        svg {
          color: red;
        }
      }

    }
  }

  .copy {
    font-size: 0.8em;
    color: #fff;

    a {
      color: #fff;

      &:hover {
        color: #9b9b9b;
        text-decoration: underline;
      }
    }
  }
}

.singinMask {
  position: fixed;
  top: 50%;left: 50%;
  z-index: 1;
  width: 26rem;
  height: 26rem;
  background: #AAB2AF;
  border: 1px solid rgba(0, 0, 0, .5);
  transform: translate(-45%, -50%);
  box-shadow: 0 .2em .5em rgba(0, 0, 0, .5),
    0 0 0 100vmax rgba(0,0,0,.5);

  .title {
    width: 100%;
    height: 5.5rem;
    text-align: center;
    border: 1px solid transparent; 
    position: relative;

    .message {
      font-size: .875rem;
      color: red;
    }

    .messageSuccess {
      color: green;
    }

    .close {
      position: absolute;
      top: 5%;
      right: 4%;
      cursor: pointer;
      font-size: 2rem;
      color: white;

      &:hover {
        color: red;
      }
    }
  }
}

</style>
