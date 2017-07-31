# vn-pastime

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

基于vue全家桶、mongodb和nodejs的全栈项目,其实是个大杂烩。通过这个项目，了解前后端的整合，以及产品上线的基本流程

前端使用axios与后台api交互获取数据，vue全家桶进行数据的渲染，mongodb存储网上爬取的原始数据以及用户后期产生的数据，nodejs主要提供api接口以及token的签发与验证

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
