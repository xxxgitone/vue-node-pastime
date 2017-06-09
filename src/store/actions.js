import * as types from './mutations-type'
import axios from 'axios'

const actions = {
  // 获取登录用户信息
  [types.FETCH_SIGNIN_USER] ({commit, state}) {
    console.log('进入')
    axios.get('/auth/user', {params: {
      token: state.userInfo.token
    }}).then((res) => {
      const data = res.data
      console.log(data)
      state.userInfo.avatar_url = data.avatar_url
    })
  }
}

export default actions
