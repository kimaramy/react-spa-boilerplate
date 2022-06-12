import foodService from '../service'
import { useQuery, useInfiniteQuery } from 'react-query'
import type { AxiosError, AxiosResponse } from 'axios'

export function useInfiniteFoods(initialParams: JsonServerQueryParams) {
  return useInfiniteQuery<AxiosResponse<Food.Item[]>, AxiosError>(
    ['foods', 'scroll'],
    ({ pageParam = 1 }) => foodService.fetchFoods({ ...initialParams, page: pageParam }),
    {
      /**
       * 동일한 키 호출에 대해 쿼리 함수 실행 전 다음 미들웨어 실행
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

export function usePaginatedFoods(params: JsonServerQueryParams) {
  return useQuery<AxiosResponse<Food.Item[]>, AxiosError>(
    ['foods', 'pagination', params],
    () => foodService.fetchFoods(params),
    {
      keepPreviousData: true,
      staleTime: 1000 * 60,
    },
  )
}

export function useFoodDetailById(foodId: number) {
  return useQuery<AxiosResponse<Food.Detail>, AxiosError, Food.Detail>(
    ['foodDetail', foodId],
    () => foodService.fetchFoodDetailById(foodId),
    {
      select: ({ data }) => data,
      staleTime: 1000 * 60 * 5, // 5 mins
    },
  )
}
