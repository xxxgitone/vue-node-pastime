import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

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
    // 其他用户
    userInfo: {},
    message: {},
    showSignDialog: false,
    current: 1
  },
  mutations,
  actions
})

export default store
