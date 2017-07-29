<template>
  <div class="home">
    <header class="land">
      <div class="content">
        <div class="wrapper">
          <h1 class="title">Entertain Your Life Pastime</h1>
          <p class="subTitle">If you doubt yourself,then indeed you stand on shaky ground. </p>
          <router-link class="button" :to="'/videolist'">Let's Go</router-link>
        </div>
      </div>
    </header>
    <section class="intro">
      <p class="title">What's here?</p>
      <div class="contentWrapper">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-music"></use>
          </svg>
          <p>动听音乐，聆听你心</p>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-video"></use>
          </svg>
          <p>搞笑视频，欢笑你我</p>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-news"></use>
          </svg>
          <p>科技要闻，走向前沿</p>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-beauty"></use>
          </svg>
          <p>美女照片，博你眼球</p>
        </div>
      </div>
    </section>
    <section class="picture">
      <div class="pic-left">
        <div class="pic-warpper">
          <img src="https://drscdn.500px.org/photo/211460087/q%3D80_h%3D450/be5a500bd76786b068924c9b0a9d54c1" alt="">
        </div>
        <div class="pic-warpper mid">
          <img src="https://drscdn.500px.org/photo/211414721/q%3D80_h%3D300/2a249ade2ffe9733a9939716b345db31" alt="">
          <img src="https://drscdn.500px.org/photo/211406037/q%3D80_h%3D300/5f7fe5930b4d1780897d8eb894415d0c" alt="">
        </div>
        <div class="pic-warpper">
          <img src="https://drscdn.500px.org/photo/220903987/q%3D80_m%3D1000/v2?webp=true&sig=622ad017eda0a2ea2f0b329a0a0bc58da34e6061d6f95a7cd5232faf9d70e6d6" alt="">
        </div>
      </div>
      <div class="pic-right">
        <h2>美女高清大图</h2>
        <router-link :to="'/images'">READMORE</router-link>
      </div>
    </section>

    <section class="tecStack">
      <h3 class="ts-title">Technology Stack</h3>
      <div class="logo-list" ref="logoList">
        <figure v-for="ts in tecStacks" class="figure" ref="figure">
          <a :href="ts.href">
            <img width="250" :src="ts.url" :alt="ts.name">
          </a>
          <figcaption class="figcaption">
            <span class="repo-name">{{ts.user}}</span>
            <span class="star">{{ts.star_count}}</span>
          </figcaption>
        </figure>  
      </div>
      <button class="more" @click="more">
        <span v-show="!showMore">MORE</span>
        <span v-show="showMore">CLOSE</span>
      </button>
    </section>

    <section>
      fdg
    </section>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppFooter from 'components/footer/App-Footer'
import {getReposStar} from 'api/star.js'
export default {
  components: {
    AppFooter
  },
  data () {
    return {
      tecStacks: [
        {
          user: 'vuejs',
          repo: 'vue',
          href: 'https://github.com/vuejs/vue',
          url: require('../../assets/img/logo.png'),
          star_count: ''
        },
        {
          user: 'sass',
          repo: 'sass',
          href: 'https://github.com/sass/sass',
          url: require('../../assets/img/scss.png'),
          star_count: ''
        },
        {
          user: 'nodejs',
          repo: 'node',
          href: 'https://github.com/nodejs/node',
          url: require('../../assets/img/nodepng.png'),
          star_count: ''
        },
        {
          user: 'mongodb',
          repo: 'mongo',
          href: 'https://github.com/mongodb/mongo',
          url: require('../../assets/img/mongodb.png'),
          star_count: ''
        },
        {
          user: 'webpack',
          repo: 'webpack',
          href: 'https://github.com/webpack/webpack',
          url: require('../../assets/img/webpack.png'),
          star_count: ''
        },
        {
          user: 'nginx',
          repo: 'nginx',
          href: 'https://github.com/nginx/nginx',
          url: require('../../assets/img/nginx.png'),
          star_count: ''
        }
      ],
      showMore: false
    }
  },
  methods: {
    more () {
      this.showMore = !this.showMore
      const {logoList, figure} = this.$refs
      const singleHeight = figure[0].offsetHeight
      logoList.style.height = this.showMore ? `${singleHeight * 2}px` : `${singleHeight}px`
    },
    setHeight () {
      const {logoList, figure} = this.$refs
      const singleHeight = figure[0].offsetHeight
      logoList.style.height = singleHeight + 'px'
    }
  },
  mounted () {
    let { isHome } = this.$store.state
    if (isHome === false) {
      this.$store.state.isHome = true
    }

    setTimeout(() => {
      this.tecStacks.forEach(ts => {
        getReposStar(ts.user, ts.repo).then(res => {
          const data = res.data
          ts.star_count = data.stargazers_count
        })
      })
      this.setHeight()
    }, 20)

    window.addEventListener('resize', () => {
      this.setHeight()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/scss/mixins.scss";

.home {
  font-size: 1rem;
}

.land {
  font-size: 1em;
  height: 100vh;
  width: 100%;
  background-image: url('https://drscdn.500px.org/photo/210954383/q%3D80_m%3D1500/a94e5951e20c2871e0ee36b4f3453324');
  background-size: cover;
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  @include mediaQ(480px) {
    height: 50vh;
  }
  @include mediaQ(768px, 481px) {
    height: 70vh;
  }

  .content {
    height: calc(100% - 3.75rem);
    width: 100%;
    position: absolute;
    left: 0;
    top: 3.75rem;
    background: rgba(0, 0, 0, .4);
    @include mediaQ(480px) {
      top: 3rem;
      height: calc(100% - 3rem);
    }

    .wrapper {
       width: 60%;
       height: 100%;
       display: flex;
       flex-direction: column;
       padding: 10em 0 0 10em;;
       @include mediaQ(768px) {
         padding: 5rem 0 0 0;
         width: 100%;
         align-items: center;
       }
       @include mediaQ(960px, 768px) {
         width: 80%;
       }
       @include mediaQ(1365px, 961px) {
         width: 100%;
       }

      .title {
        margin: 0;
        padding: 0;
        font-size: 3.2em;
        color: #fff;
        letter-spacing: 1px;
        width: 60%;
        height: 20%;
        @include mediaQ(480px) {
          font-size: 1.5rem;
        }
        @include mediaQ(768px) {
          width: 100%;
          height: 40%;
          text-align: center;
        }
        @include mediaQ(768px, 481px) {
          font-size: 2rem;
        }
        @include mediaQ(960px, 769px) {
          width: 100%;
        }
      }

      @keyframes typing {
          from { width: 0; }
      }

      @keyframes caret {
          50% { border-color: transparent; }
      }

      .subTitle {
        color: white;
        font: 120% Consolas, Monaco, monospace;
        width: 60ch;
        animation: typing 6s steps(59),
            caret .5s steps(2) infinite;
        white-space: nowrap;
        overflow: hidden;
        border-right: .05em solid;
        margin: 1.8em 0 1.8em 0;
        @include mediaQ(768px) {
          display: none;
        }
      }

      .button {
        display: inline-block;
        color: red;
        font-size: 2em;
        border: 1px solid rgba(255, 255, 255, .5);
        padding: .7em 0;
        margin: 1em 0 0 1em;
        border-radius: .2em;
        transition: all .3s;
        text-align: center;
        width: 8.5em;
        @include mediaQ(480px) {
          padding: .5rem 0;
          margin: 0 0 2rem 0;
          width: 6.5em;
        }

        &:hover {
          background: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .5));
          border-color: red;
          color: white;
        }
      }

    }

  }
}

section {
  @include mediaQ(768px) {
    padding: 1rem 0;
    width: 100%;
  }
}

.intro {
  font-size: 1rem;
  height: 36rem;
  padding: 1rem calc(50% - 28.125rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #eee;
  @include mediaQ(480px) {
    height: 30rem;
  }

  .title {
    color: red;
    letter-spacing: 2px;
    font-size: 4em;
    @include mediaQ(480px) {
      font-size: 2.5rem;
    }
  }

  .contentWrapper {
    display: flex;
    @include mediaQ(768px) {
      flex-wrap: wrap;
    }

    div {
      width: 100%;
      padding: 3em 2em;
      text-align: center;
      @include mediaQ(768px) {
        width: 50%;
        padding: 1.5em 0;
      }

      svg {
        width: 6em;
        height: 6em;
        @include mediaQ(480px) {
          width: 4em;
          height: 4em;
        }
        @include mediaQ(768px, 481px) {
          width: 5em;
          height: 5em;
        }
      }

      p {
        text-align: center;
        font-size: 1em;
      }

    }
  }
}

.picture {
  font-size: 1rem;
  padding: 6.8rem calc(50% - 34.375rem);
  display: flex;
  @include mediaQ(768px) {
    padding: 4rem 0;
    flex-direction: column;
  }

  .pic-left {
    flex-basis: 70%;
    display: flex;

    .pic-warpper {
      width: 100%;
      margin: 1em 1em;
      overflow: hidden;
      @include mediaQ(480px) {
        margin: 1em .5em;
      }
      img {
        max-width: 100%;
        cursor: pointer;
        transition: all .4s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
    
    .mid {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .pic-right {
    font-family: 'Federant';
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;;

    h2 {
      color: rgba(0, 0, 0, .5);
      letter-spacing: 2px;
      padding: 2rem;
      font-size: 2rem;
      @include mediaQ(480px) {
        padding: .5rem;
      }
    }

    a {
      display: inline-block;
      padding: 1.3rem 1.8rem;
      font-size: 1.5rem;
      color: #fff;
      background: red;
      border-radius: .5rem;
      transition: color .3s;
      @include mediaQ(480px) {
        padding: .65rem .9rem;
        font-size: 1.2rem;
      }

      &:hover {
        background: rgba(0, 0, 0, 1);
      }
    }
  }
}


.tecStack {
  background: #292A2F;
  text-align: center;
  padding: 2rem calc(50% - 31.25rem);
  color: white;
  @include mediaQ(480px) {
    padding: 1rem 0;
    width: 100%;
  }

  .ts-title {
    font-size: 3rem;
    @include mediaQ(480px) {
      font-size: 2rem;
    }
    @include mediaQ(768px, 481px) {
      font-size: 2.5rem;
    }
  }

  .logo-list {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    transition: all .4s;

    .figure {
      width: 25%;
      padding: 3.5rem;
      margin: 0;
      @include mediaQ(480px) {
        padding: 1.5rem;
      }
      @include mediaQ(768px, 481px) {
        padding: 2.5rem;
      }

      img {
        width: 100%;
        border-radius: 50%;
        background: #18191B;
      }

      .figcaption {
        padding-top: 1rem;
        display: flex;
        flex-direction: column;

        .repo-name {
          color: #FF8256;
          font-size: 1.3rem;
          font-weight: bold;
          letter-spacing: 1px;
          @include mediaQ(480px) {
            font-size: 1rem;
          }
        }

        .star {
          @include mediaQ(480px) {
            font-size: .8rem;
          }
        }
        .star::after {
          content: '*';
          color: #FF8256;
        }
      }
    }
  }

  .more {
    outline: none;
    border: none;
    background: red;
    padding: .5rem 1.5rem;
    margin-top: 1rem;
    color: white;
    border-radius: 20px;
    cursor: pointer;
    transition: all .3;

    &:hover {
      background: #111;
    }
  }
}


</style>
