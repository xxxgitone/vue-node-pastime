<template>
  <div class="home">
    <header class="land">
      <div class="content">
        <h1 class="title">Entertain Your Life Pastime</h1>
        <p class="subTitle">If you doubt yourself,then indeed you stand on shaky ground. </p>
        <a href="#" class="button">Let's Go</a>
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
    <section class="tecStack">
      <div class="row1">
        <figure>
          <a href="https://github.com/vuejs/vue">
            <img src="../assets/logo.png" alt="vue.js">
            <span class="mask"></span>
          </a>
          <figcaption>
            <iframe src="https://ghbtns.com/github-btn.html?user=vuejs&repo=vue&type=star&count=true" frameborder="0" scrolling="0" width="160px" height="20px"></iframe>
          </figcaption>
        </figure>
        <figure>
          <a href="https://github.com/webpack/webpack">
            <img src="../assets/webpack.png" alt="vue.js">
            <span class="mask"></span>
          </a>
          <figcaption>
            <iframe src="https://ghbtns.com/github-btn.html?user=webpack&repo=webpack&type=star&count=true" frameborder="0" scrolling="0" width="160px" height="20px"></iframe>
          </figcaption>
        </figure>
        <figure>
          <a href="https://github.com/sass/sass">
            <img src="../assets/scss.png" alt="vue.js">
            <span class="mask"></span>
          </a>
          <figcaption>
            <iframe src="https://ghbtns.com/github-btn.html?user=sass&repo=sass&type=star&count=true" frameborder="0" scrolling="0" width="160px" height="20px"></iframe>
          </figcaption>
        </figure>
      </div>
      <div class="row2">
        <figure>
          <a href="https://github.com/nodejs/node">
            <img src="../assets/nodepng.png" alt="vue.js">
            <span class="mask"></span>
          </a>
          <figcaption>
            <iframe src="https://ghbtns.com/github-btn.html?user=nodejs&repo=node&type=star&count=true" frameborder="0" scrolling="0" width="160px" height="20px"></iframe>
          </figcaption>
        </figure>
        <figure>
          <a href="https://github.com/mongodb/mongo">
            <img src="../assets/mongodb.png" alt="vue.js">
            <span class="mask"></span>
          </a>
          <figcaption>
            <iframe src="https://ghbtns.com/github-btn.html?user=mongodb&repo=mongo&type=star&count=true" frameborder="0" scrolling="0" width="160px" height="20px"></iframe>
          </figcaption>
        </figure>
      </div>      
    </section>
    <section>
      fdg
    </section>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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

  .content {
    height: calc(100% - 3.75rem);
    width: 100%;
    position: absolute;
    left: 0;
    top: 3.75rem;
    background: rgba(0, 0, 0, .4);

    .title {
      margin: 0;
      padding: 0;
      font-size: 3.2em;
      color: #fff;
      letter-spacing: 1px;
      width: 60%;
      height: 40%;
      padding: 2em 1.6em;
    }

    @keyframes typing {
        from { width: 0; }
    }

    @keyframes caret {
        50% { border-color: transparent; }
    }

    .subTitle {
      margin-left: 4.5em;
      color: white;
      font: 120% Consolas, Monaco, monospace;
      width: 60ch;
      animation: typing 6s steps(59),
          caret .5s steps(2) infinite;
      white-space: nowrap;
      overflow: hidden;
      border-right: .05em solid;
    }

    .button {
      display: inline-block;
      color: red;
      font-size: 2em;
      border: 1px solid rgba(255, 255, 255, .5);
      padding: .7em 2em;
      margin: 1.7em 0 0 5em;
      border-radius: .2em;
      transition: all .3s;

      &:hover {
        background: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .5));
        border-color: red;
        color: white;
      }
    }
  }
}

section {
  height: 80em;
  // 
}

.tecStack {
  height: 36rem;
  background-image: url('https://1x.com/images/user/ca10e1133d91048ee3e3c4c66a2b4536-hd2.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .row1, .row2 {
    display: flex;
    flex-direction: row;

    figure {
      width: 11.5em;
      height: 11.5em;

      a {
        display: block;
        position: relative;

        .mask {
          position: absolute;
          top: 0;right: 0;left: 0;bottom: 0;
          border-radius: 50%;
          background: radial-gradient(rgba(0, 0, 0, .4), rgba(244, 22, 22, .5));
          transform: scale(0);
          transition: all .3s;
        }

        &:hover {
          .mask {
            transform: scale(1);
            transform-origin: 50% 50%;
          }
        }
      }

      img {
        background: white;
        padding: 0.5em;
        max-width: 100%;
        border: 0.625em solid rgba(250, 0, 0, .3);
        border-radius: 50%;
        background-clip: padding-box;
      }

      iframe {
        margin:.6em 0 0 22%;

      }
    }
  }

  .row1 {
    width: 60%;
    justify-content: space-between;
  }

  .row2 {
    width: 40%;
  }
}

  section.intro {
    font-size: 1rem;
    height: 36rem;
    padding: 1rem calc(50% - 28.125rem);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .title {
      color: red;
      letter-spacing: 2px;
      font-size: 4em;
    }

    .contentWrapper {
      display: flex;

      div {
        width: 100%;
        padding: 3em 2em;
        text-align: center;

        svg {
          width: 6em;
          height: 6em;
        }

        p {
          text-align: center;
          font-size: 1em;
        }

      }
    }


  }
</style>
