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
这是之前我最想知道的问题，听过很多前后端分离，但是都是只闻其声，不见其形。

之前同学问过我这样一个问题，**为什么前端也要单独起一个服务**，当时我脑海里，闪过的第一个答案就是，现在前端构建项目需要依赖很多包，需要通过node环境来安装各种依赖工作，帮助我们工作。

现在看来这个答案大错特错了，问的是服务，而不是node环境。其实这个问题的答案和前后端分离也和相关

在传统web开发的时候，前端和后端的工作比较耦合，后端人员要做着很多前端的工作，不停切换，比如发送后台请求。这样导致前后端分工不明确，效率反而更加低。不仅如此，而且前后端还要搭建同样的开发环境，让前端开发去搭建一个Java开发环境，显得有些复杂，而且确实没必要。

现代web开发，前后端各司其职，开发之前约定好数据接口和格式，就可以同时开发了。

前端负责静态样式的编写，以及发送ajax请求，后台负责api的开发和测试。双方都不用管对方具体怎么实现。

![](http://i1.nbimg.com/605011/2a88410dc66eb685.png)

前面也说到过前端不应该去搭建一个复杂的Java或者其他后台服务，我们可以通过nodejs来搭建一个服务器，寥寥几行代码，便可快速搭建，搭建nodejs服务器的好处

* 可以模拟线上环境，毕竟本地静态文件和线上还是有些差别，比如路径等
* 发送ajax，还要处理跨域
* 部署线上，中间层，用于加载静态文件

### 前后端如何部署
在前后端完全分离的情况下，前端和后端当然是分别部署(本案例由于是自己一个人写的，并且后台语言正好是nodejs，所以没有将前后端分别部署），比如`www.xxxuthus.cn`，那么后台api可以使用一个二级域名`api.xxxuthus.cn`

前端部署，nodejs为一个中间层，作为静态文件服务器，比如将`webpack`打包后的`dist`作为静态资源

```javascript
const express = require('express')
const env = process.env.NODE_ENV || 'development'
const app = express()

app.use(express.static('./dist'))

const server = app.listen(4000, () => {
  console.log(`Express started in ${app.get('env')} mode on http://localhsot:4000`)
})
```

使用nginx进行反向代理，当用户访问静态资源的时候，返回静态资源，当前台访问api的时候，转发到后台服务器

该配置文件是该项目的，该项目没有严格按照前后端分离部署，所以其它场景配置文件仅供参考

```nginx
  upstream xxxuthus {
  server 127.0.0.1:4000;
}

server {
  listen 80;
  server_name www.xxxuthus.cn;

  location / {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-Nginx-Proxt true;

    proxy_pass http://xxxuthus;
    proxy_redirect off;
  }

  location ~* ^.+\.(jpg|jpeg|gif|png|ico|css|js|pdf|txt) {
    root /www/vnpastime/production/current/dist;
  }
}
```

![](http://i4.fuimg.com/605011/eab2fb317a1632e0.png)

### 跨域


## Build Setup

``` bash
# clone项目
git clone git@github.com:xxxgitone/vue-node-pastime.git

cd vue-node-pastime

# install dependencies
npm install

# 还原数据，为了方便展示，我将数据库上传到了项目中，文件名为vnpastime
# --host 数据库服务
# -d 数据库名
# 最后面是备份文件的路径,如果不在该目录下记得填写绝对路径
mongorestore --host 127.0.0.1:27017 -d vnpastime ./vnpastime/

# 启动mongodb服务
mongo

# 启动后台服务
node app.js

# 再启动前台
npm run dev

# build for production with minification
npm run build
```
