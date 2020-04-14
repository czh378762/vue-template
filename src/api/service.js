
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // baseurl
  timeout: 20000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // 接口添加token参数
  const token = localStorage.getItem('token')
  if (token) {
    if (config.params) {
      config.params.token = token
    } else {
      config.params = {}
      config.params.token = token
    }
  }
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    // 根据response判断token是否有效， 无效则调登陆页面
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
