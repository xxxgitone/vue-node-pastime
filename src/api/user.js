/*
 * @Author: xuthus
 * @Date: 2017-06-17 20:35:04
 * @Last Modified by: xuthus
 * @Last Modified time: 2017-06-20 19:29:34
 */
import axios from '../utils/axiosService' // 引入加了拦截器的axios

export const signinByUsername = (username, password) => {
  const data = {
    username,
    password
  }
  return axios.post('/auth/users', data)
}

export const fetchSignUser = () => {
  return axios.get('/auth/user')
}

export const fetchUserById = (id) => {
  return axios.get(`/auth/users/${id}`)
}

export const fetchUserByName = (name) => {
  return axios.get(`/auth/user?name=${name}`)
}
