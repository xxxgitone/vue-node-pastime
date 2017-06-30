import axios from '../utils/axiosService'

export const fetchImages = () => {
  return axios.get('/api/images')
}
