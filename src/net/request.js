import axios from 'axios'
//本地测试
const head = 'http://106.15.248.47:8080'
//线上
// const head = '../'

function request (config) {
  const geturl = axios.create({
    baseURL: 'http://106.15.248.47:8080',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': localStorage.getItem('token')
    }
  })
  return geturl(config)
}

function getimg (url) {
  const getimgurl = axios.get({
    timeout: 5000
  })
  return getimgurl(url)
}

export {request, head, getimg}
