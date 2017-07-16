<template>
  <div class="info-confirm">
    <div class="info-header">
        <span>提示信息</span>
    </div>
    <div class="info-text">
      {{ text }}
    </div>
    <div class="info-button">
      <a href="#" @click.prevent="confirm">{{ confirmBtnText }}</a>
      <a href="#" @click.prevent="cancle">{{ cancleBtnText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    cancleBtnText: {
      type: String,
      default: '取消'
    }
  },
  methods: {
    confirm () {
      this.$emit('confirm')
    },
    cancle () {
      this.$emit('cancle')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins.scss";

.info-confirm {
  font-size: 1rem;
  position: fixed;
  height: 13rem;
  width: 24rem;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  border: 1px solid #eee;
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .5);

  .info-header {
    padding: .8rem 1rem;
    border-bottom: 1px solid #eee;
    position: relative;

    .close {
      position: absolute;
      top: 20%;
      right: 5%;
      font-size: 1.5rem;
      cursor: pointer;

      &:hover {
        color: red;
      }
    }
  }

  .info-text{
    @include flexCenter;
    height: 6rem;
    font-size: 1.2em;
    letter-spacing: 2px;
    border-bottom: 1px solid #eee;
  }

  .info-button {
    @include flexCenter;
    justify-content:space-around;
    height: 4rem;

    a {
      display: inline-block;
      padding: .5rem 1rem;
      color: white;
      border-radius: 6px;
    }

    a:nth-child(1) {
      background: red;
    }

    a:nth-child(2) {
      background: #999;
    }
  }
}
</style>
