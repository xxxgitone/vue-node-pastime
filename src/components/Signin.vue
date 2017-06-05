<template>
    <form class="signinForm">
      <div class="form-control">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yonghuming"></use>
        </svg>
        <input type="text" placeholder="用户名"/>
      </div>
      <div class="form-control">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-mima"></use>
        </svg>
        <input type="password" placeholder="密码"/>
      </div>
      <button class="signin">登录</button>

      <a class="signup" href="#">没有帐号？点击注册</a>
    </form>
</template>

<script>
export default {
  name: 'signin'
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

