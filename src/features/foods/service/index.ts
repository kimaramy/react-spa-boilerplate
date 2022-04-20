import axios from 'axios'
import type { Food, FoodDetail } from './food'

const foodAPI = axios.create({
  baseURL: 'https://nrisecodingtest.s3.ap-northeast-2.amazonaws.com/fe/food',
  timeout: 5000,
})

const foodService = {
  getFoods: async () => {
    // 에러 캐치와 함께 에러 바운더리로 버블링
    const { data } = await foodAPI.get<Food[]>('/food_main_list.json')
    return data
  },
  getFoodDetails: async () => {
    const { data } = await foodAPI.get<FoodDetail[]>('/food_detail_list.json')
    return data
  },
}

export default foodService
