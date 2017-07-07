/*
 * @Author: xuthus
 * @Date: 2017-06-17 20:35:04
 * @Last Modified by: xuthus
 * @Last Modified time: 2017-07-07 16:04:10
 */
import axios from '../utils/axiosService' // 引入加了拦截器的axios

// 注册和登录api， 通过type判断
export const signByUsername = (username, password, type) => {
  const data = {
    username,
    password,
    type
  }
  return axios.post('/auth/users', data)
}

export const fetchSignUser = () => {
  return axios.get('/auth/user')
}

export const fetchUserById = (id) => {
  return axios.get(`/auth/users/${id}`)
}

