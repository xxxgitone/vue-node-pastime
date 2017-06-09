import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isHome: true,
    videos: [],
    userInfo: {
      name: '',
      id: '',
      avatar_url: '',
      token: localStorage.getItem('vn-token')
    },
    message: {},
    showSignin: false
  },
  mutations,
  actions
})

export default store
