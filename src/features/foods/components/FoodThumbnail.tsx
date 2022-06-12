import { Heading, Body } from '@/common/Typography'
import Thumbnail from './Thumbnail'

interface Props {
  food: Food.Detail
}

const FoodThumbnail: React.FC<Props> = ({ food }) => (
  <Thumbnail imageUrl={food.image_url}>
    <Thumbnail.Content>
      <Heading.Lg>{food.name}</Heading.Lg>
      <div>
        <Body.Md>{food.brand}</Body.Md>
        <Body.Md isBold>{food.price}원</Body.Md>
      </div>
    </Thumbnail.Content>
  </Thumbnail>
)

export default FoodThumbnail
