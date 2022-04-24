import { useState, useReducer, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Heading, Body } from '@/common/Typography'
import Frame from '@/common/Frame'
import Card from './Card'
import { getGradeColor } from '../utils'
import type { Food } from '../service/food'

interface Props {
  foods: Food[]
  amountToAdd: number
}

type FoodsReducer = (curr: Food[], next: Food[]) => Food[]

const FoodCardList: React.FC<Props> = ({ foods, amountToAdd }) => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const [currFoods, addNextFoods] = useReducer<FoodsReducer>(
    (curr, next) => curr.concat(next),
    JSON.parse(sessionStorage.getItem('foods') as string) || [],
  )

  const renderMoreFoods = useCallback(() => {
    if (currFoods.length < foods.length) {
      setIsLoading(true)
      console.log(`
        Render more foods.
        Current: ${currFoods.length}
        Next: ${currFoods.length + amountToAdd}
        Last: ${foods.length}
      `)
      addNextFoods(foods.slice(currFoods.length, currFoods.length + amountToAdd))
      setIsLoading(false)
    }
  }, [foods, amountToAdd, currFoods])

  const handleCardClick = (foodId: number) => {
    sessionStorage.setItem('scrollY', window.scrollY.toString())
    navigate(`/${foodId}`)
  }

  useEffect(() => {
    sessionStorage.setItem('foods', JSON.stringify(currFoods))
  }, [currFoods])

  return (
    <Frame isLoading={isLoading} onIntersect={renderMoreFoods}>
      <Card.List>
        {currFoods.map((food) => (
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
    </Frame>
  )
}

export default FoodCardList
