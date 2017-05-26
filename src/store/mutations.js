import * as types from './mutations-type'
import axios from 'axios'

const mutations = {
  [types.FETCH_VIDEOS] (state) {
    axios.get(`/api/videos`).then(res => {
      state.videos = res.data
    })
  },
  [types.HIDDEN_VIDEO] (state, video) {
    const index = state.videos.indexOf(video)
    state.videos = [
      ...state.videos.slice(0, index),
      ...state.videos.slice(index + 1)
    ]

    return state
  }
}

export default mutations
