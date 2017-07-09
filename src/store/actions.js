import * as types from './mutations-type'
import { signByUsername, fetchSignUser } from '../api/user'

const actions = {
  // 用户登录
  [types.SIGN_BY_USERNAME] ({ commit, dispatch }, formInfo) {
    const username = formInfo.username.trim()
    return new Promise((resolve, reject) => {
      signByUsername(username, formInfo.password, formInfo.type).then((res) => {
        const data = res.data
        commit('SET_MESSAGE', data)
        // 后台有返回这个字段,success为ture
        if (data.success) {
          commit('SET_TOKEN', data.token)
          localStorage.setItem('vn-token', data.token)
          dispatch('FETCH_SIGNIN_USER')
          resolve(data.success)
        } else {
          // 为false的时候
          resolve(data.success)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取登录用户信息
  [types.FETCH_SIGNIN_USER] ({commit, state}) {
    fetchSignUser().then(res => {
      const data = res.data
      commit('SET_SIGNIN_USER', data)
    })
  }
}

export default actions
