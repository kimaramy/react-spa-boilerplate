import { useParams, Link } from 'react-router-dom'
import { Heading, Body } from '@/common/Typography'
import Navbar from '@/common/Navbar'
import Main from '@/common/Main'
import Divider from '@/common/Divider'
import BackIcon from '@/common/BackIcon'
import FoodThumbnail from './components/FoodThumbnail'
import Spec from './components/Spec'
import GradeSpec from './components/GradeSpec'
import Container from './components/Container'
import NutritionRatioSpec from './components/NutritionRatioSpec'
import CaloriePercentage from './components/CaloriePercentage'
import NutritionPercentage from './components/NutritionPercentage'
import PurchareButton from './components/PurchaseButton'
import { useFoodDetailById } from './hooks'

const FoodDetailPage = () => {
  const params = useParams()

  const { data: food } = useFoodDetailById(Number(params.id))

  return (
    <>
      <Navbar isFixed>
        <Link to="/">
          <BackIcon />
        </Link>
      </Navbar>

      <Main>
        <header css={{ marginBottom: '2.5rem' }}>{food && <FoodThumbnail food={food} />}</header>

        <section css={{ marginBottom: '2.5rem' }}>
          <Heading.Md>영양소 비율</Heading.Md>
          <Divider />
          <Body.Md isGray>
            전문가들이 권장하는 탄수화물 5 : 단백질 2 : 지방 3 비율을 기준으로 A~C까지의 등급으로 표기하였습니다.
          </Body.Md>
          <Spec.List css={{ marginTop: '1rem' }}>
            {food && <GradeSpec grade={food.nutrition_grade} />}
            {food?.nutrients_ratio.map((data) => (
              <NutritionRatioSpec key={data.name} {...data} />
            ))}
          </Spec.List>
        </section>

        <section css={{ marginBottom: '2.5rem' }}>
          <Heading.Md>칼로리 정보</Heading.Md>
          <Divider />
          <Body.Md isGray>하루 2000칼로리의 식단을 기준으로 합니다.</Body.Md>
          <Container css={{ marginTop: '1rem' }}>
            {food && (
              <CaloriePercentage
                calorie={food.nutrition_facts.find((data) => data.name === 'calories') || food.nutrition_facts[0]}
              />
            )}
          </Container>
        </section>

        <section css={{ marginBottom: '1rem' }}>
          <Heading.Md>영양소 정보</Heading.Md>
          <Divider />
          <Body.Md isGray>백분율은 하루 2000칼로리의 식단을 기준으로 합니다.</Body.Md>
          <Container css={{ marginTop: '1rem' }}>
            {food?.nutrition_facts
              .filter((data) => data.name !== 'calories')
              .map((data) => (
                <NutritionPercentage key={data.name} nutrition={data} />
              ))}
          </Container>
        </section>

        <footer>
          <PurchareButton href={food?.url} target="_blank">
            구매하기
          </PurchareButton>
        </footer>
      </Main>
    </>
  )
}

export default FoodDetailPage
