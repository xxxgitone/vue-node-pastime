import axios from '../utils/axiosService'

export const fetchVideoById = (id) => {
  return axios.get(`/api/videos/${id}`)
}
