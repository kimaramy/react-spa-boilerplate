import { useQuery } from 'react-query'
import { AxiosError } from 'axios'
import foodService from '../service'
import type { Food, FoodDetail } from '../service/food'

export function useFoodList() {
  return useQuery<Food[], AxiosError>('foods', foodService.getFoods)
}

export function useFoodDetails() {
  return useQuery<FoodDetail[], AxiosError>('foodDetails', foodService.getFoodDetails)
}

export function useFoodDetailById(id: number) {
  const { data } = useFoodDetails()
  if (data) {
    const foodDetail = data.find((item) => item.id === id) || null
    return { data: foodDetail }
  }
  return { data: null }
}
