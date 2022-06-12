export type NutritionGrade = 'A+' | 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C'

export type NutritionName = 'calories' | 'carbs' | 'protein' | 'fat' | 'natrium'

export interface FoodItem {
  /**
   * 상품 ID
   */
  id: number
  /**
   * 상품명
   */
  name: string
  /**
   * 브랜드명
   */
  brand: string
  /**
   * 상품 이미지 URL
   */
  image_url: string
  /**
   * 영양소 비율 등급
   */
  nutrition_grade: NutritionGrade
}

export interface FoodDetail extends FoodItem {
  /**
   * 가격
   */
  price: number
  /**
   * 상품 구매 주소
   */
  url: string
  /**
   * 영양소 비율
   */
  nutrients_ratio: {
    /**
     * 영양소명
     */
    name: NutritionName
    /**
     * 비율
     */
    ratio: number
    /**
     * 적정 비율
     */
    recommended: number
    /**
     * 비율 차이
     */
    diff: number
  }[]
  /**
   * 영양소 정보
   */
  nutrition_facts: {
    /**
     * 영양소명
     */
    name: NutritionName
    /**
     * 비율
     */
    ratio: number
    /**
     * 포함량
     */
    amount: number
    /**
     * 적정 기준량
     */
    recommended_amount: number
  }[]
}

declare global {
  namespace Food {
    type Item = FoodItem
    type Detail = FoodDetail
  }
}
