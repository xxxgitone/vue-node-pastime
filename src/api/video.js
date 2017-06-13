import axios from '../utils/axiosService'

export const fetchVideos = () => {
  return axios.get('/api/videos')
}

export const fetchVideoById = (id) => {
  return axios.get(`/api/videos/${id}`)
}
