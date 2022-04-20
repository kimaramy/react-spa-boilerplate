import { useQuery } from 'react-query'
import foodService from '../service'

export function useFoodList() {
  return useQuery('foods', foodService.getFoods)
}

export function useFoodDetails() {
  return useQuery('foodDetails', foodService.getFoodDetails)
}

export function useFoodDetailById(id: number) {
  const { data, isLoading, isError } = useFoodDetails()
  if (data) {
    const foodDetail = data.find((item) => item.id === id) || null
    return {
      data: foodDetail,
      isLoading,
      isError,
    }
  }
  return {
    data: null,
    isLoading,
    isError,
  }
}
