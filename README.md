# vn-pastime

基于vue全家桶、mongodb和nodejs的全栈项目,通过这个项目，了解前后端的整合，以及产品上线的基本流程

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

**主要功能**

- [x] 视频播放


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
