import * as types from './mutations-type'
import axios from 'axios'

const actions = {
  // 获取登录用户信息
  [types.FETCH_SIGNIN_USER] ({commit, state}) {
    axios.get('/auth/user', {params: {token: state.token}}).then((res) => {
      const data = res.data
      commit('SET_SIGNIN_USER', data)
    })
  }
}

export default actions
