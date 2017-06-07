import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
// import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isHome: true,
    videos: [],
    user: {},
    message: {},
    showSignin: false
  },
  mutations
})

export default store
