import { Display, Heading, Body } from '@/common/Typography'
import Spec from './Spec'
import { getNutritionName, getRatioDiffColor } from '../utils'
import type { FoodDetail } from '../service/food'

const NutritionRatioSpec: React.FC<FoodDetail['nutrients_ratio'][0]> = ({ name, ratio, recommended, diff }) => (
  <Spec bgColor="#1E2127">
    <Spec.Content>
      <div>
        <Display.Sm>
          <span>{ratio}%</span>
        </Display.Sm>
        <Body.Sm isGray>
          적정 비율 <span>{recommended}%</span>
        </Body.Sm>
      </div>
      <div>
        <Heading.Sm css={{ color: getRatioDiffColor(diff) }}>
          <span>{diff >= 0 ? `+${diff}` : diff}%</span>
        </Heading.Sm>
      </div>
    </Spec.Content>
    <Spec.Title>
      <Body.Md>{getNutritionName(name)}</Body.Md>
    </Spec.Title>
  </Spec>
)

export default NutritionRatioSpec
