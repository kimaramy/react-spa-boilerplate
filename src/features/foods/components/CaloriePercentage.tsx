import { Heading, Body } from '@/common/Typography'
import ProgressBar from '@/common/ProgressBar'
import type { FoodDetail } from '../service/food'

interface Props {
  calorie: FoodDetail['nutrition_facts'][0]
}

const CaloriePercentage: React.FC<Props> = ({ calorie }) => (
  <div>
    <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
      <div css={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        <Heading.Md>{calorie.amount}</Heading.Md>
        <Body.Sm isGray>
          / <span>{calorie.recommended_amount}</span>
        </Body.Sm>
      </div>
      <Heading.Sm>{calorie.ratio}%</Heading.Sm>
    </div>
    <ProgressBar value={calorie.ratio} />
  </div>
)

export default CaloriePercentage
