import axios from '../utils/axiosService'

export const postCommentApi = (commentInfo) => {
  return axios.post('/api/comments', commentInfo)
}

export const fetchCommentsByType = (type, typeId) => {
  return axios.get(`/api/comments?type=${type}&typeId=${typeId}`)
}
