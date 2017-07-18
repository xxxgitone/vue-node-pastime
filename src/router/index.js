import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['views/Home'], resolve)
const VideoList = resolve => require(['views/VideoList'], resolve)
const VideoPlayer = resolve => require(['views/VideoPlayer'], resolve)
const VideoPost = resolve => require(['views/VideoPost'], resolve)
const PostSuccess = resolve => require(['views/PostSuccess'], resolve)
const PersonalPage = resolve => require(['views/PersonalPage'], resolve)
const ImageList = resolve => require(['views/ImageList'], resolve)
const ImageBanner = resolve => require(['views/ImageBanner'], resolve)
const Chat = resolve => require(['views/Chat'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
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
