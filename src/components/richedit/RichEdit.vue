<<template>
  <div class="richeditBox">
    <div class="richedit">
      <div class="edit-controller">
        <button v-for="command in execCommands" @click="execCommand(command)" class="command-button">
          <svg class="icon" aria-hidden="true" >
            <use :xlink:href="command.icon"></use>
          </svg>
        </button>
      </div>
      <div ref="editable" class="editable" contenteditable="true" @keyup.ctrl.enter="postComment"></div>
    </div>
    <button ref="submitButton" class="submitButton" type="submit" @click="postComment">
      <span class="code">(ctrl + enter)</span>
      <span>提交</span>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { postCommentApi } from 'api/comment.js'
export default {
  data () {
    return {
      execCommands: [{
        icon: '#icon-blod',
        command: 'bold'
      },
      {
        icon: '#icon-i',
        command: 'italic'
      },
      {
        icon: '#icon-xiahuaxian',
        command: 'underline'
      },
      // {
      //   icon: '#icon-img',
      //   command: 'insertimage'
      // },
      {
        icon: '#icon-lianjie',
        command: 'createlink'
      },
      {
        icon: '#icon-wuxuliebiao',
        command: 'insertunorderedlist'
      },
      {
        icon: '#icon-icxiangmufuhaodaishuzi24px',
        command: 'insertorderedlist'
      },
      {
        icon: '#icon-yinyong',
        command: 'formatblock'
      },
      {
        icon: '#icon-chexiao',
        command: 'undo'
      },
      {
        icon: '#icon-zhongzuo',
        command: 'redo'
      }],
      isShow: false,
      innerHtml: ''
    }
  },
  props: ['videoId'],
  created () {
    const editable = this.$refs
    editable.contenteditable = true
  },
  computed: {
    ...mapState({
      user: 'user'
    })
  },
  methods: {
    execCommand (command) {
      const cmd = command.command
      switch (cmd) {
        case 'createlink':
          const linkURL = prompt('输入链接:', 'https://')
          const sText = document.getSelection()
          '<a href="' + linkURL + '" target="_blank">' + sText + '</a>'
          document.execCommand('insertHTML', false, `<a href="${linkURL}" target="_blank">${sText}</a>`)
          break
        case 'formatblock':
          document.execCommand(cmd, false, '<blockquote>')
          break
        default:
          document.execCommand(cmd, false, null)
      }
    },
    // 提交评论
    postComment () {
      const { editable, submitButton } = this.$refs
      submitButton.disabled = 'disabled'
      this.innerHtml = editable.innerHTML
      const commentInfo = {
        user: {
          name: this.user.name,
          avatar_url: this.user.avatar_url,
          _id: this.user._id
        },
        text: this.innerHtml,
        type: 'video',
        typeId: this.videoId
      }
      this.innerHtml && postCommentApi(commentInfo).then(res => {
        this.$emit('comment', res.data)
        submitButton.disabled = ''
        editable.innerHTML = ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixins.scss';

.richeditBox {
  display: flex;
  width: 100%;
  height: 100%;
}

.richedit {
  width: 89%;
  height: 100%;
  border: 1px solid #DDE1E5;
  position: relative;
}

.edit-controller {
  background: #ECEEF0;
  padding: .3rem;
  @include mediaQ(480px) {
    padding: .2rem;
  }

  .command-button {
    border: none;
    background: #ECEEF0;
    outline: none;
  }

  svg {
    width: 2rem;
    height: 2rem;
    transition: all .3s;
    @include mediaQ(480px) {
      width: 1.7rem;
      height: 1.7rem;
    }

    &:hover {
      background: #D0D6D9;
    }
  }
}

.editable {
  width: 100%;
  height: 10rem;
  overflow: auto;
  outline: none;
  padding: 1rem .5rem;
  background: white;
}

.link-box {
  border: 1px solid #eee;
  position: absolute;
  top: 2rem;
  right: 6rem;
  background: white;
  padding: .5rem;

  span {
    display: block;
    padding: .5rem 0;
  }

  .link-text {
    input {
      border: none;
      outline: none;
      border-bottom: 1px solid #999;
    }
  }
}

.submitButton {
  border: none;
  outline: none;
  align-self: flex-end;
  padding: .8rem .5rem;
  background: red;
  border-radius: 7px;
  color: white;
  margin: 0 0 1rem 1rem;
  cursor: pointer;
  @include mediaQ(480px) {
    padding: .5rem .3;
    margin: 0 0 0 .5rem;
  }

  .code {
    @include mediaQ(480px) {
      display: none;
    }
  }
}
</style>
