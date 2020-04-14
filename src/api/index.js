import service from './service'

const apiService = {}

apiService.getList = () => {
  return service({
    method: 'GET'
  })
}

export default apiService
