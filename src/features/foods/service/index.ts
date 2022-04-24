import axios from 'axios'
import nprogress from 'nprogress'
import type { Food, FoodDetail } from './food'

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

const foodAPI = axios.create({
  baseURL: 'https://nrisecodingtest.s3.ap-northeast-2.amazonaws.com/fe/food',
  timeout: 5000,
})

const foodService = {
  getFoods: async () => {
    const { data } = await foodAPI.get<Food[]>('/food_main_list.json')
    return data
  },
  getFoodDetails: async () => {
    const { data } = await foodAPI.get<FoodDetail[]>('/food_detail_list.json')
    return data
  },
}

export default foodService
