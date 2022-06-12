import { useLocation, useNavigate } from 'react-router-dom'
import { Heading, Body } from '@/common/Typography'
import Card from './Card'
import { getGradeColor } from '../utils'

interface Props {
  foods: ReadonlyArray<Food.Item>
}

const FoodCardList: React.FC<Props> = ({ foods }) => {
  const navigate = useNavigate()
  const { pathname, search, hash } = useLocation()

  const handleCardClick = (foodId: number) => {
    navigate(`/${foodId}`, {
      state: {
        backTo: { pathname, search, hash },
        backScrollPosition: [window.scrollX, window.scrollY],
        scrollRestorable: false,
      } as ReactRouterRouteState,
    })
  }

  return (
    <Card.List>
      {foods.map((food) => (
        <Card key={food.id} onClick={() => handleCardClick(food.id)}>
          <Card.Thumbnail>
            <Card.Thumbnail.Grade bgColor={getGradeColor(food.nutrition_grade)}>
              <Heading.Sm>{food.nutrition_grade}</Heading.Sm>
            </Card.Thumbnail.Grade>
            <Card.Thumbnail.Image src={food.image_url} alt={food.name} />
          </Card.Thumbnail>

          <Card.Content>
            <Body.Md isGray css={{ marginBottom: '0.125rem' }}>
              {food.brand}
            </Body.Md>
            <Body.Lg>{food.name}</Body.Lg>
          </Card.Content>
        </Card>
      ))}
    </Card.List>
  )
}

export default FoodCardList
