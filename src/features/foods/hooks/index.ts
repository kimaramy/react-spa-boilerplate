import { useQuery, useInfiniteQuery } from 'react-query'
import { AxiosResponse, AxiosError } from 'axios'
import foodService from '../service'
import type { Food, FoodDetail } from '../service/food'
import type { SearchQuery } from '@/service/interfaces'

export function useFoodList(searchQuery: SearchQuery) {
  return useQuery<AxiosResponse<Food[]>, AxiosError>(['foods', searchQuery], () => foodService.fetchFoods(searchQuery))
}

export function useFoodDetailById(foodId: number) {
  return useQuery<AxiosResponse<FoodDetail>, AxiosError>(['foodDetails', foodId], () =>
    foodService.fetchFoodDetailById(foodId),
  )
}

// export function useFoodDetailById(id: number) {
//   const { data } = useFoodDetails()
//   if (data) {
//     const foodDetail = data.find((item) => item.id === id) || null
//     return { data: foodDetail }
//   }
//   return { data: null }
// }
