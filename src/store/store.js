import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isHome: true,
    videos: [],
    user: {
      token: localStorage.getItem('vn-token'),
      info: {
        name: '',
        id: '',
        avatar_url: ''
      }
    },
    message: {},
    showSignin: false
  },
  mutations,
  actions
})

export default store
