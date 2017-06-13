<template>
  <div class="singDialog">
    <div class="title">
      <h2>SIGN &nbsp;IN</h2>
      <span class="message" :class="{ messageSuccess: message.success}">{{ message.message }}</span>
        <span class="close" @click="closeSignDia">&times;</span>
    </div>
    <Signin></Signin>
  </div>
</template>

<script>
import Signin from './Signin'
export default {
  name: 'signDialog',
  props: ['message'],
  components: {
    Signin
  },
  methods: {
    // 显示登录注册框
    closeSignDia () {
      this.$store.commit('CLOSE_SIGN_DIALOG')
    }
  }
}
</script>

<style lang="scss">
.singDialog {
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
      transition: all .2s;

      &:hover {
        color: red;
        transform: rotate(360deg);
        transform-origin: 50% 50%;
      }
    }
  }
}
</style>
