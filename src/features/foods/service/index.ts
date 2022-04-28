import axios from 'axios'
import type { Food, FoodDetail } from './food'

const foodAPI = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 5000,
})

const foodService = {
  getFoods: async () => {
    // 에러 캐치와 함께 에러 바운더리로 버블링
    const { data } = await foodAPI.get<Food[]>('/foods')
    return data
  },
  getFoodDetails: async () => {
    const { data } = await foodAPI.get<FoodDetail[]>('/foodDetails')
    return data
  },
}

export default foodService
