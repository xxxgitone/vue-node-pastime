import * as types from './mutations-type'
import axios from 'axios'

const actions = {
  // 获取videos全部信息,并获取作者信息
  [types.FETCH_VIDEOS] ({ commit, state }) {
    axios.get('/api/videos').then(res => {
      state.videos = res.data
      state.videos.forEach(video => {
        let by = video.by
        commit('FETCH_USER', by)
      })
    })
  }
}

export default actions
