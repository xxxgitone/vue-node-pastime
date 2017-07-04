<template>
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
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
@import '../assets/scss/mixins.scss';

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
</style>
