import axios from '@/service/axios'

const foodAPI = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 5000,
})

const foodService = {
  /**
   * 입력 받는 검색 파라미터에 따라 푸드 리스트를 받아옵니다.
   */
  fetchFoods({ page, limit }: JsonServerQueryParams) {
    return foodAPI.get<Food.Item[]>(`/foods?_page=${page}&_limit=${limit}`)
  },
  /**
   * 입력 받는 푸드 id에 해당하는 푸드 상세를 받아옵니다.
   */
  fetchFoodDetailById(foodId: number) {
    return foodAPI.get<Food.Detail>(`/foodDetails/${foodId}`)
  },
}

export default foodService
