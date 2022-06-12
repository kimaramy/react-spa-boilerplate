import type { NutritionGrade, NutritionName } from '@/types/food'

export const getGradeColor = (grade: NutritionGrade) => {
  switch (grade) {
    case 'A+':
      return '#6BBF00'
    case 'A':
      return '#C2CF04'
    case 'A-':
      return '#DFC80A'
    case 'B+':
      return '#FFC410'
    case 'B':
      return '#FBA408'
    case 'B-':
      return '#F78500'
    case 'C':
      return '#F75900'
    default:
      throw new TypeError(`일치하는 영양소 등급이 없습니다.`)
  }
}

export const getNutritionName = (name: NutritionName) => {
  switch (name) {
    case 'calories':
      return '칼로리'
    case 'carbs':
      return '탄수화물'
    case 'protein':
      return '단백질'
    case 'fat':
      return '지방'
    case 'natrium':
      return '나트륨'
    default:
      throw new TypeError(`일치하는 영양소 이름이 없습니다.`)
  }
}

export const getRatioDiffColor = (diff: number) => (diff >= 0 ? '#F65900' : '#6BBF00')
