<template>
    <form class="signinForm" ref="signinForm">
      <div class="form-control">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yonghuming"></use>
        </svg>
        <input type="text" placeholder="用户名" v-model="username"/>
      </div>
      <div class="form-control">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-mima"></use>
        </svg>
        <input type="password" placeholder="密码" v-model="password"/>
      </div>
      <button type="submit" class="signin" @click.prevent="signin">登录</button>

      <a class="signup" href="#">没有帐号？点击注册</a>
    </form>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signin () {
      let formInfo = {
        username: this.username,
        password: this.password
      }
      let { signinForm } = this.$refs
      this.$http.post('/auth/users', formInfo).then((res) => {
        this.$store.state.message = res.data
        const data = res.data
        if (data.success) {
          this.$store.state.user.token = data.token
          localStorage.setItem('vn-token', data.token)
          this.$store.dispatch('FETCH_SIGNIN_USER')
          setTimeout(() => {
            signinForm.reset()
            this.$store.state.message = {}
            this.$store.state.showSignin = false
          }, 500)
        } else {
          localStorage.setItem('vn-token', null)
        }
      }).catch((err) => {
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

