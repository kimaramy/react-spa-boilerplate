import { useParams, Link } from 'react-router-dom'
import { Heading, Body } from '@/common/Typography'
import Navbar from '@/common/Navbar'
import { SafeArea } from '@/common/Container'
import Box from '@/common/Box'
import Divider from '@/common/Divider'
import BackIcon from '@/common/BackIcon'
import FoodThumbnail from './components/FoodThumbnail'
import Spec from './components/Spec'
import GradeSpec from './components/GradeSpec'
import NutritionRatioSpec from './components/NutritionRatioSpec'
import CaloriePercentage from './components/CaloriePercentage'
import NutritionPercentage from './components/NutritionPercentage'
import PurchareButton from './components/PurchaseButton'
import { useFoodDetailById } from './hooks'

const FoodDetailPage = () => {
  const params = useParams()

  const { data: res } = useFoodDetailById(Number(params.id))

  return (
    <>
      <Navbar isFixed>
        <Link to="/">
          <BackIcon />
        </Link>
      </Navbar>
      (
      <SafeArea as="main">
        <header css={{ marginBottom: '2.5rem' }}>{res?.data && <FoodThumbnail food={res.data} />}</header>

        <section css={{ marginBottom: '2.5rem' }}>
          <Heading.Md>영양소 비율</Heading.Md>
          <Divider />
          <Body.Md isGray>
            전문가들이 권장하는 탄수화물 5 : 단백질 2 : 지방 3 비율을 기준으로 A~C까지의 등급으로 표기하였습니다.
          </Body.Md>
          <Spec.List css={{ marginTop: '1rem' }}>
            {res?.data && <GradeSpec grade={res.data.nutrition_grade} />}
            {res?.data.nutrients_ratio.map((item) => (
              <NutritionRatioSpec key={item.name} {...item} />
            ))}
          </Spec.List>
        </section>

        <section css={{ marginBottom: '2.5rem' }}>
          <Heading.Md>칼로리 정보</Heading.Md>
          <Divider />
          <Body.Md isGray>하루 2000칼로리의 식단을 기준으로 합니다.</Body.Md>
          <Box css={{ marginTop: '1rem' }}>
            {res?.data && (
              <CaloriePercentage
                calorie={
                  res.data.nutrition_facts.find((item) => item.name === 'calories') || res.data.nutrition_facts[0]
                }
              />
            )}
          </Box>
        </section>

        <section css={{ marginBottom: '1rem' }}>
          <Heading.Md>영양소 정보</Heading.Md>
          <Divider />
          <Body.Md isGray>백분율은 하루 2000칼로리의 식단을 기준으로 합니다.</Body.Md>
          <Box css={{ marginTop: '1rem' }}>
            {res?.data.nutrition_facts
              .filter((item) => item.name !== 'calories')
              .map((item) => (
                <NutritionPercentage key={item.name} nutrition={item} />
              ))}
          </Box>
        </section>

        <footer>
          <PurchareButton href={res?.data.url} target="_blank">
            구매하기
          </PurchareButton>
        </footer>
      </SafeArea>
      )
    </>
  )
}

export default FoodDetailPage
