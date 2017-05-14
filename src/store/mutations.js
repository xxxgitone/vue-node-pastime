import * as types from './mutations-type'
import axios from 'axios'

const mutations = {
  // 获取videos全部信息
  [types.FETCH_VIDEOS] (state) {
    axios.get('/api/videos').then(res => {
      state.videos = res.data
    })
  }
}

export default mutations
