import * as types from './mutations-type'
import { fetchVideos, fetchVideoByUserid } from '../api/video'
import { fetchUserById } from '../api/user'
import { fetchImages } from '../api/image'

const mutations = {
  [types.FETCH_VIDEOS] (state, p) {
    fetchVideos(p).then(res => {
      state.current = p
      state.videos = res.data.videos
      state.all = Math.ceil(res.data.total / state.limitNum)
    })
  },
  // 隐藏不感兴趣视频
  [types.HIDDEN_VIDEO] (state, video) {
    const index = state.videos.indexOf(video)
    state.videos = [
      ...state.videos.slice(0, index),
      ...state.videos.slice(index + 1)
    ]

    return state
  },
  // 将用户信息添加至状态
  [types.SET_SIGNIN_USER] (state, data) {
    state.user = data
  },
  // 登出
  [types.SET_USER_OUT] (state) {
    // 显示菜单的时候是将这个字段作为判断，
    state.token = ''
  },
  // 弹出登录框
  [types.SHOW_SIGN_DIALOG] (state) {
    state.showSignDialog = true
    // state.showSignin ? state.showSignin = false : state.showSignin = true
  },
  // 关闭登录框
  [types.CLOSE_SIGN_DIALOG] (state) {
    state.showSignDialog = false
  },
  // 保存token
  [types.SET_TOKEN] (state, token) {
    state.token = token
  },
  [types.SET_MESSAGE] (state, message) {
    state.message = message
  },
  // 获取用户信息，显示主页
  [types.FETCH_USER_INFO] (state, id) {
    fetchUserById(id).then(res => {
      state.userInfo = res.data
    })
  },
  // 通过user的id，获取他的视频
  [types.FETCH_VIDEOS_BY_USERID] (state, id) {
    fetchVideoByUserid(id).then(res => {
      state.userVideos = res.data.userVideos
    })
  },
  [types.FETCH_IMAGES] (state, count) {
    fetchImages(count).then(res => {
      state.images = res.data
    }).then(() => {
      state.isFetch = false
    })
  }
}

export default mutations
