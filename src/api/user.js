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
