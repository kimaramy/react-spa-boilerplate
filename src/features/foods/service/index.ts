import axios from '@/service/axios'
import type { Food, FoodDetail } from './food'

const foodAPI = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 5000,
})

const foodService = {
  getFoods: async () => {
    const { data } = await foodAPI.get<Food[]>('/foods')
    return data
  },
  getFoodDetails: async () => {
    const { data } = await foodAPI.get<FoodDetail[]>('/foodDetails')
    return data
  },
}

export default foodService
