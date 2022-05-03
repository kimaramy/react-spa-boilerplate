import axios from '@/service/axios'
import type { AxiosResponse } from 'axios'
import type { Food, FoodDetail } from './food'
import type { SearchQuery } from '@/service/interfaces'

const foodAPI = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 5000,
})

interface FoodService {
  fetchFoods: (query: SearchQuery) => Promise<AxiosResponse<Food[]>>
  fetchFoodDetailById: (foodId: number) => Promise<AxiosResponse<FoodDetail>>
}

// export type FetchFoodsParams = Parameters<FoodService['fetchFoods']>

// export type FetchFoodDetailByIdParams = Parameters<FoodService['fetchFoodDetailById']>

const foodService: FoodService = {
  fetchFoods: (searchQuery) => foodAPI.get<Food[]>(`/foods?_start=${searchQuery.start}&_limit=${searchQuery.limit}`),
  fetchFoodDetailById: (foodId: number) => foodAPI.get(`/foodDetails/${foodId}`),
}

export default foodService
