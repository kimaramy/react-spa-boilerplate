import foodService from '../service'
import { useQuery, useInfiniteQuery } from 'react-query'
import type { AxiosError, AxiosResponse } from 'axios'
import type { Food, FoodDetail } from '../service/food'
import type { JsonServerQueryParams } from '@/types'

export function useInfiniteFoods(initialParams: JsonServerQueryParams) {
  return useInfiniteQuery<AxiosResponse<Food[]>, AxiosError>(
    ['foods'],
    ({ pageParam = 1 }) => foodService.fetchFoods({ ...initialParams, page: pageParam }),
    {
      /**
       * @param page 현재 페이지 데이터
       * @param pages 누적 페이지 데이터 리스트
       */
      getNextPageParam(page, pages) {
        try {
          // 백엔드에서 lastPageNum을 제공할 경우 다음 계산 제거
          const lastPageNum = Math.ceil(parseInt(page.headers['x-total-count']) / (initialParams.limit || 10))
          // console.log(`currPageNum: ${pages.length}, lastPageNum: ${lastPageNum}`)
          return pages.length < lastPageNum ? pages.length + 1 : undefined
        } catch (err) {
          console.error(err)
        }
      },
      staleTime: 1000 * 60, // 1 min
    },
  )
}

export function useFoodDetailById(foodId: number) {
  return useQuery<AxiosResponse<FoodDetail>, AxiosError, FoodDetail>(
    ['foodDetails', foodId],
    () => foodService.fetchFoodDetailById(foodId),
    {
      select: ({ data }) => data,
      staleTime: 1000 * 60 * 5, // 5 mins
    },
  )
}
