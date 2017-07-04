<template>
  <div class="chat">
    <div class="chat-box">
      <div class="user-list">
        <span class="title">在线用户</span>
        <ul class="online-user">
          <li>
            <img src="https://pacdn.500px.org/777395/fcc4a2ab5f58bb2da689ed70763e23cd70eaa6a6/2.jpg?59">
            <span>Sean Archer</span>
          </li>
        </ul>
      </div>
      <div class="chat-window">
        <span class="descript-title">聊天消息</span>
        <div class="chat-message">
          <div class="message-info">
            <img class="message-user-avatar" src="https://pacdn.500px.org/777395/fcc4a2ab5f58bb2da689ed70763e23cd70eaa6a6/2.jpg?59">
            <div class="message-wrapper">
              <span class="message-user">Sean Archer</span>
              <p class="message-content">第一条信息</p>
            </div>
          </div>
        </div>
        <div class="send-message">
          <textarea class="message-text" placeholder="输入您的消息..."></textarea>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sendemail"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat',
  mounted () {
    this.$store.state.isHome = false
  }
}
</script>

<style lang="scss" scoped>
.chat {
  font-size: 1rem;
  padding-top: 3.75rem;
  background: #E8E6FD;
  min-height: 100vh;

  .chat-box {
    width: 50rem;
    margin: 0 auto;
    margin-top: 1rem;
    background: #fff;
    height: 36.5rem;
    border-radius: 7px;
    box-shadow: 1px 1px 2px rgba(0,0,0,.1),
        -1px -1px 2px rgba(0,0,0,.1);
    display: flex;
  }

  .user-list {
    width: 15rem;
    height: 100%;
    display: flex;
    flex-direction: column;

    .title {
      text-align: center;
      padding: 1rem 0;
      border: 1px solid #eee;
      color: #999;
    }

    .online-user {
      overflow-y: scroll;
      height: calc(100% - 6.5rem);
      border-bottom: 1px solid #eee;

      li {
        width: 100%;
        padding: .5rem .5rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(0,0,0,0.02);
        cursor: pointer;
        transition: all .3s;
        &:hover {
          background: #eee;
        }

        img {
          width: 2.3rem;
          height: 2.3rem;
          border-radius: 50%;
          margin-right: .5rem;
        }
      }
    }
  }

  .chat-window {
    width: 35rem;
    background: #F6F6FC;
    height: 100%;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    display: flex;
    flex-direction: column;

    .descript-title {
      padding: 1rem 0 1rem 1rem;
      color: #999;
    }

    .chat-message {
      overflow-y: scroll;
      height: calc(100% - 6.5rem);
      border-bottom: 1px solid #eee;
      width: 100%;

      .message-info {
        padding: .5rem 0 .5rem .5rem;
        display: flex;
        width: 100%;

        .message-user-avatar {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
        }

        .message-wrapper {
          display: flex;
          flex-direction: column;
          padding: 0 .5rem;
          max-width: 75%;
        }
        .message-user {
          display: inline-block;
          vertical-align: top;
          color: #999;
          font-size: .8rem;
        }

        .message-content {
          background: #fff;
          display: inline-block;
          padding: .5rem;
          max-width: 100%;
          border-radius: 7px;
          margin: 0;
          margin-top: .5rem;
          box-shadow: 1px 1px 2px rgba(0,0,0,.1),
            -1px -1px 2px rgba(0,0,0,.1);
        }
      }
    }

    .send-message {
      height: 3rem;
      display: flex;
      align-items: center;

      .message-text {
        height: 2rem;
        width: 80%;
        color: #999;
        outline: none;
        border: none;
        background: #f6f6f6;
        resize: none;
        border-bottom: 1px solid rgb(0, 50, 200);
        margin-left: 1rem;
      }

      svg {
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        margin-left: .5rem;
      }
    }
  }

}
</style>
