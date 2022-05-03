import { useNavigate } from 'react-router-dom'
import { Heading, Body } from '@/common/Typography'
import Card from './Card'
import { getGradeColor } from '../utils'
import type { Food } from '../service/food'
// import type { SearchQuery } from '@/service/interfaces'

interface Props {
  foods: Food[]
}

// type FoodsReducer = (curr: Food[], next: Food[]) => Food[]

const FoodCardList: React.FC<Props> = ({ foods }) => {
  const navigate = useNavigate()

  // const [totalCount, setTotalCount] = useState(0)

  // useEffect(() => {
  //   if (res) {
  //     setTotalCount(Number(res.headers['X-Total-Count']))
  //   } else {
  //     setTotalCount(0)
  //   }
  // }, [res])

  // const [isLoading, setIsLoading] = useState(false)

  // const [currFoods, addNextFoods] = useReducer<FoodsReducer>(
  //   (curr, next) => curr.concat(next),
  //   [],
  // )

  // const renderMoreFoods = useCallback(() => {
  //   setIsLoading(true)
  //   console.log(`
  //       Render more foods.
  //       Current: ${currFoods.length}
  //       Next: ${currFoods.length + amountToAdd}
  //       Last: ${foods.length}
  //     `)
  //   addNextFoods(foods.slice(currFoods.length, currFoods.length + amountToAdd))
  //   setIsLoading(false)
  // }, [foods, amountToAdd, currFoods])

  const handleCardClick = (foodId: number) => {
    sessionStorage.setItem('scrollY', window.scrollY.toString())
    navigate(`/${foodId}`)
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
