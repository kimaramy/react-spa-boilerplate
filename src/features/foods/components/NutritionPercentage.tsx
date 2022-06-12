import { Heading, Body } from '@/common/Typography'
import ProgressBar from '@/common/ProgressBar'
import { getNutritionName } from '../utils'

interface Props {
  nutrition: Food.Detail['nutrition_facts'][0]
}

const NutritionPercentage: React.FC<Props> = ({ nutrition }) => (
  <div>
    <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
      <Body.Md>{getNutritionName(nutrition.name)}</Body.Md>
      <Heading.Sm>{nutrition.ratio}%</Heading.Sm>
    </div>

    <ProgressBar value={nutrition.ratio} />

    <div css={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
      <Body.Sm>{nutrition.amount}</Body.Sm>
      <Body.Sm isGray>/{nutrition.recommended_amount}</Body.Sm>
    </div>
  </div>
)

export default NutritionPercentage
