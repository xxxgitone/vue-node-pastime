import axios from '../utils/axiosService'

export const fetchImages = (count) => {
  return axios.get(`/api/images?count=${count}`)
}

export const fetchImageById = (id) => {
  return axios.get(`/api/images/${id}`)
}
