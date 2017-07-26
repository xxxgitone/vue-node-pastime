import axios from '../utils/axiosService'

/**
 * @param {仓库作者} name
 * @param {仓库名} repo
 */
export const getReposStar = (user, repo) => {
  return axios.get(`https://api.github.com/repos/${user}/${repo}`)
}
