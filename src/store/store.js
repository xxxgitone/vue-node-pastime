import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isHome: true,
    videos: [],
    token: localStorage.getItem('vn-token'),
    user: { // 登录者信息
      name: '',
      id: '',
      avatar_url: ''
    },
    // 判断是登入还是注册
    signType: 'signin',
    // 其他用户
    userInfo: {},
    message: {},
    showSignDialog: false,
    current: 1,
    all: 0,
    limitNum: 15,
    // 用户个人视频
    userVideos: [],
    // 将要删除的视频id
    deleteVideoid: '',
    images: [],
    // 记录获取图片的次数，用于滚动加载
    fetchCount: 1,
    // 判断是否在加载，防止滚动加载多次
    isFetch: false
  },
  mutations,
  actions,
  getters
})

export default store
