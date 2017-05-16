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
            <li><a href="#">LOGIN</a></li>             
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      isShow: false,
      scrolled: false
    }
  },
  computed: {
    ...mapState({
      isHome: 'isHome'
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
      if (scrollTop > 0) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScrollTop)
  }
}
</script>

<style lang="scss">
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
  background-color: #212121 !important;
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
  display: flex;
  justify-content: center;
  align-items: center;

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
        display: flex;
        justify-content: center;
        align-items: center;
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
    display: flex;
    align-items: center;
    position: relative;
    transition: all .2s;
    justify-content: center;

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
  background: #212121;
  padding: 1rem calc(50% - 31.25em);
  display: flex;
  justify-content: center;
  align-items: center;
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

</style>
