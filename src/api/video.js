import axios from '../utils/axiosService'

export const fetchVideos = (p) => {
  if (!p) {
    return axios.get(`/api/videos`)
  } else {
    return axios.get(`/api/videos?p=${p}`)
  }
}

export const fetchVideoById = (id) => {
  return axios.get(`/api/videos/${id}`)
}

export const postVideo = (postData) => {
  return axios.post('/api/videos', postData)
}

export const fetchVideoByUserid = (id) => {
  return axios.get(`/api/uservideos?userId=${id}`)
}
