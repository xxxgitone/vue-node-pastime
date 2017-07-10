<<template>
  <div class="richedit">
    <div class="edit-controller">
      <button v-for="command in execCommands" @click="execCommand(command)" class="command-button">
        <svg class="icon" aria-hidden="true" >
          <use :xlink:href="command.icon"></use>
        </svg>
      </button>
    </div>
    <div ref="editable" class="editable" contenteditable="true"></div>

    <div class="link-box" v-show="isShow">
      <span>添加一个链接</span>
      <div class="link-text">
        链接： <input type="text" v-model="linktext" @keyup.enter="addLink">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'richedit',
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
      {
        icon: '#icon-img',
        command: 'insertimage'
      },
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
      linktext: ''
    }
  },
  created () {
    const editable = this.$refs
    editable.contenteditable = true
  },
  methods: {
    execCommand (command) {
      const cmd = command.command
      switch (cmd) {
        case 'createlink':
          this.isShow = !this.isShow
          break
        case 'formatblock':
          document.execCommand(cmd, false, '<blockquote>')
          break
        default:
          document.execCommand(cmd, false, null)
      }
    },
    addLink () {
      document.execCommand('createlink', false, this.linktext)
    }
  }
}
</script>

<style lang="scss" scoped>
.richedit {
  width: 35rem;
  border: 1px solid #DDE1E5;
  position: relative;
}

.edit-controller {
  background: #ECEEF0;
  padding: .3rem;

  .command-button {
    border: none;
    background: #ECEEF0;
    outline: none;
  }

  svg {
    width: 2rem;
    height: 2rem;
    transition: all .3s;

    &:hover {
      background: #D0D6D9;
    }
  }
}

.editable {
  width: 100%;
  height: 12.5rem;
  outline: none;
  padding: 1rem .5rem;
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
</style>
