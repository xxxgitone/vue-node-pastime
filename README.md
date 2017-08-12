# vn-pastime

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

基于vue全家桶、mongodb和nodejs的全栈项目,其实是个大杂烩。通过这个项目，了解前后端的整合，以及产品上线的基本流程

前端使用axios与后台api交互获取数据，vue全家桶进行数据的管理和渲染，mongodb存储网上爬取的原始数据以及用户后期产生的数据，nodejs主要提供api接口以及token的签发与验证

线上使用阿里云服务器部署，nginx进行http反向代理，pm2管理Node应用的进程

## 功能介绍

这个项目本身并不复杂，最主要的是清扫了一些后台的盲区，满足了自己的好奇心，特别是在项目部署这一块。虽然还没有达到熟悉的地步，但提起也不至于什么也不知道。

后期将会优化前端的代码，比如代码的结构和书写规范，以及vue的组件规范，还有响应式的实现，也可能会添加一些新的模块。

**主要目录**

        ├── app.js   // 后台入口
        ├── index.html
        ├── server  // 服务端文件
        │   ├── api  // api借口
        │   ├── middlewares
        │   │   └── jwtMid.js  // token验证中间件
        │   ├── models  // mongodb的文档模型
        │   └── public
        ├── src  // 前端主文件
        │   ├── api  // 前端api，与后台api的交互
        │   ├── App.vue
        │   ├── assets  // 静态资源
        │   │   ├── font
        │   │   ├── img
        │   │   └── scss
        │   ├── components // 单个组件
        │   ├── main.js
        │   ├── router
        │   ├── store
        │   ├── utils // axios拦截器
        │   │   └── axiosService.js
        │   └── views // 页面级组件

**主要功能**(期待更多)

- [x] 视频播放列表的展示
- [x] 视频播放器自定义样式
- [x] 视频评论功能，包括二级评论，自定义简单的富文本组件，用于评论的编辑
- [x] 基于token进行登录验证
- [x] 图片的展示列表
- [x] 图片滚动加载
- [x] 图片详情页展示，支持上下张切换以及评论
- [x] 使用socket.io进行简单聊天室
- [x] 图片上传预览

## 项目总结和感想
#### 组件编写应该规范
vue上手容易，可以很轻松的实现一些功能。但是要让代码变得更加容易维护和扩展，还得做点其他工作。组件编写规范化便是一个非常有效的方法，组件一般分为基础组件和业务组件，组件应该各司其职，比如基础组件就不应该包含跟业务相关的具体代码，只是返回一个信息，给引用它的组件。这样可以降低组件的耦合度，提升组件的可复用性。

比如一个confirm组件

```
<template>
  <transition name="confirm">
    <div class="info-confirm" v-show="showFlag">
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
  </transition>
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
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    hide () {
      this.showFlag = false
    },
    show () {
      this.showFlag = true
    },
    confirm () {
      this.hide()
      this.$emit('confirm')
    },
    cancle () {
      this.hide()
      this.$emit('cancle')
    }
  }
}
</script>
```

在点击确认后，不应该直接在这里组件里面处理接下来的逻辑（比如删除或着清空），而是应该通过`this.$emit('confirm')`向父组件传递一个确认的信息，父组件监听这个方法，然后再处理接下来的逻辑

这个项目后续将会重点围绕这点来进行优化

#### 前后端如何分离


## Build Setup

``` bash
# install dependencies
npm install

# 搭建mongodb服务

# 先启动后台服务
node app.js

# 再启动前台
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
