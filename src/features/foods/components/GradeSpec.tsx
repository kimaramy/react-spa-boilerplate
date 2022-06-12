import type { NutritionGrade } from '@/types/food'
import { Display, Body } from '@/common/Typography'
import Spec from './Spec'
import { getGradeColor } from '../utils'

interface Props {
  grade: NutritionGrade
}

const GradeSpec: React.FC<Props> = ({ grade }) => (
  <Spec bgColor={getGradeColor(grade)}>
    <Spec.Content>
      <Display.Md>{grade}</Display.Md>
    </Spec.Content>
    <Spec.Title>
      <Body.Md>영양소 비율 등급</Body.Md>
    </Spec.Title>
  </Spec>
)

export default GradeSpec
