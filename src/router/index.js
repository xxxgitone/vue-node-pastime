import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['views/home/Home'], resolve)
const VideoList = resolve => require(['views/videolist/VideoList'], resolve)
const VideoPlayer = resolve => require(['views/videoplayer/VideoPlayer'], resolve)
const VideoPost = resolve => require(['views/videopost/VideoPost'], resolve)
const PostSuccess = resolve => require(['views/success/PostSuccess'], resolve)
const PersonalPage = resolve => require(['views/personalpage/PersonalPage'], resolve)
const ImageList = resolve => require(['views/imagelist/ImageList'], resolve)
const ImageBanner = resolve => require(['views/imagebanner/ImageBanner'], resolve)
const Chat = resolve => require(['views/chat/Chat'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/videolist',
      name: 'videolist',
      component: VideoList
    },
    {
      path: '/video/:id',
      name: 'videoPlayer',
      component: VideoPlayer
    },
    {
      path: '/post/video',
      name: 'videopost',
      component: VideoPost,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/post/success',
      name: 'success',
      component: PostSuccess,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/page',
      name: 'page',
      component: PersonalPage,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/images',
      name: 'imagelist',
      component: ImageList,
      children: [{
        path: ':id',
        component: ImageBanner
      }]
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
      meta: {
        requireAuth: true
      }
    }
  ]
})
