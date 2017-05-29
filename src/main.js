// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axios from 'axios'
import moment from 'moment'

Vue.config.productionTip = false
Vue.prototype.$http = axios

// 处理时间的全局过滤器
Vue.filter('timeAgo', timestamp => {
  return moment(timestamp).startOf('hour').fromNow()
})

// 处理视频时长的过滤器
Vue.filter('durationFormat', duration => {
  const min = parseInt(duration / 60)
  const s = duration % 60
  const time = s >= 10 ? `${min}:${s}` : `${min}:0${s}`
  return time
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
