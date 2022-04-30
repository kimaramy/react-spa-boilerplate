import axios from 'axios'
import nprogress from 'nprogress'

nprogress.configure({ showSpinner: false, speed: 500 })

axios.defaults.onDownloadProgress = (e: ProgressEvent) => {
  const percentage = Math.floor(e.loaded * 1.0) / e.total
  nprogress.set(percentage)
}

axios.defaults.onUploadProgress = (e: ProgressEvent) => {
  const percentage = Math.floor(e.loaded * 1.0) / e.total
  nprogress.set(percentage)
}

axios.interceptors.response.use(
  (response) => {
    nprogress.done()
    return response
  },
  (error) => {
    nprogress.done()
    return Promise.reject(error)
  },
)

export default axios
