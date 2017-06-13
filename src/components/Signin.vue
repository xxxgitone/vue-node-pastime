<template>
    <form class="signinForm" ref="signinForm">
      <div class="form-control">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yonghuming"></use>
        </svg>
        <input type="text" placeholder="用户名" v-model="formInfo.username"/>
      </div>
      <div class="form-control">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-mima"></use>
        </svg>
        <input type="password" placeholder="密码" v-model="formInfo.password"/>
      </div>
      <button ref="submitButton" type="submit" class="signin" @click.prevent="signin">
        <span v-show="!isLoading">登录</span>
        <span v-show="isLoading">登录中...</span>
      </button>

      <a class="signup" href="#">没有帐号？点击注册</a>
    </form>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      formInfo: {
        username: 'IGN',
        password: '123456'
      },
      isLoading: false
    }
  },
  methods: {
    signin () {
      let { signinForm, submitButton } = this.$refs
      submitButton.disabled = 'disabled'
      this.isLoading = true
      this.$store.dispatch('SIGNIN_BY_USERNAME', this.formInfo).then((data) => {
        // 为true时
        if (data) {
          signinForm.reset()
          this.$store.state.message = {}
          this.$store.commit('CLOSE_SIGN_DIALOG')
          submitButton.disabled = ''
          this.isLoading = false
        } else { // 为false的时候，既验证失败，将按钮重新至为可用
          this.isLoading = false
          submitButton.disabled = ''
        }
      }).catch(err => {
        this.isLoading = false
        submitButton.disabled = ''
        this.$store.state.message = {
          success: false,
          message: err
        }
      })
    }
  }
}
</script>

<style lang="scss">
.signinForm {
  width: 65%;
  margin: 0 auto;

  .form-control {
    position: relative;

    input {
      border: none;
      background: #AAB2AF;
      border-bottom: 1px solid white;
      width: 100%;
      margin-top: 2.5rem;
      outline: none;
      text-indent: 2.5rem;
      color: white;
      padding: .5rem;
      letter-spacing: 1px;
    }

    svg {
      position: absolute;
      top: 50%;
      margin-left: .5rem;
      width: 1.8rem;
      height: 1.8rem;
      color: white;
    }
  }

  .signin {
    margin-top: 2.5rem;
    color: white;
    width: 100%;
    border: none;
    background: rgba(0, 0, 0, .5);
    padding: .7rem;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
  }

  .signup {
    position: absolute;
    right: 10%;
    bottom: 10%;
  }
  
}

</style>

