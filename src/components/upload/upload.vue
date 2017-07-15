<template>
  <div class="upload-box">
    <div class="preview">
       <img :src="url" class="previewImg" v-if="url">
       <span v-else-if="text">{{ text }}</span>
    </div>

    <a href="#" class="upload" v-show="!showFlag">
       <input type="file" @change="handleChange($event)" ref="filesList">点击选择上传的图片 
    </a>

    <a href="#" class="upload" @click.prevent="upload" ref="uploadButton" v-show="showFlag">
       确认上传
    </a>

    <span class="close" @click="closeUpload">&times;</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: '',
      text: '',
      showFlag: false,
      file: ''
    }
  },
  methods: {
    handleChange (event) {
      this.switchShowFlag()
      const { filesList } = this.$refs
      this.file = filesList.files[0]
      const url = window.URL.createObjectURL(this.file)

      if (/image/.test(this.file.type)) {
        this.url = url
      } else {
        this.text = '您选择的不是图片'
      }
    },
    upload () {
      const formData = new FormData()
      formData.append('file', this.file)
      console.log(formData)
      // this.$http.post('/api/upload', formData).then(res => {
      //   console.log(res.data)
      // })
    },
    switchShowFlag () {
      this.showFlag = !this.showFlag
    },
    closeUpload () {
      this.url = ''
      this.text = ''
      this.file = ''
      this.showFlag = false
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-box {
  position: fixed;
  width: 20rem;
  height: 20rem;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .6);
  padding: 1rem;

  .preview {
    height: 14rem;
    width: 14rem;
    border: 1px dotted #eee;
    margin: 0 auto;
    text-align: center;
    line-height: 14rem;

    .previewImg {
      width: 100%;
      height: 100%;
    }
  }

  .upload {
    display: inline-block;
    position: relative;
    margin-top: 20px;
    margin-left: calc((100% - 12rem)/2);
    text-align: center;
    width: 12rem;
    // border: 1px solid ;
    color: white;
    padding: .5rem 0;
    background: red;
    border-radius: 8px;
    transition: all .3s;
    &:hover {
      background: black;
    }

    input[type="file"] {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2rem;
      opacity: 0;
      filter: alpha(opacity=0);
    }
  }

  .close {
    position: absolute;
    top: 0;
    right: 5%;
    font-size: 2rem;
    color: black;
    cursor: pointer;
    transition: all .3s;
    &:hover {
      color: red;
    }
  }
}
</style>
