import { useLocation, useNavigate } from 'react-router-dom'
import { Heading, Body } from '@/common/Typography'
import Card from './Card'
import { getGradeColor } from '../utils'
import type { Food } from '../service/food'

interface Props {
  foods: Food[]
}

const FoodCardList: React.FC<Props> = ({ foods }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleCardClick = (foodId: number) => {
    // sessionStorage.setItem('scrollY', window.scrollY.toString())
    navigate(`/${foodId}`, {
      state: {
        backPathname: location.pathname,
        backScrollPosition: [window.scrollX, window.scrollY],
        scrollRestorable: false,
      },
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
