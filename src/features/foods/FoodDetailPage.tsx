import { useCallback } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
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
import styled from '@emotion/styled'

const BackButton = styled.a`
  cursor: pointer;
`

const FoodDetailPage = () => {
  const params = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const { data } = useFoodDetailById(Number(params.id))

  const onBackClick = useCallback(() => {
    const routeState = location.state as ReactRouterRouteState

    if (routeState) {
      // @ts-ignore
      navigate(routeState?.backTo || -1, {
        state: {
          backScrollPosition: routeState?.backScrollPosition || [0, 0],
          scrollRestorable: true,
        } as ReactRouterRouteState,
      })
    }
  }, [navigate, location.state])

  return (
    <>
      <Navbar isFixed>
        <BackButton onClick={onBackClick}>
          <BackIcon />
        </BackButton>
      </Navbar>

      <SafeArea as="main">
        <header css={{ marginBottom: '2.5rem' }}>{data && <FoodThumbnail food={data} />}</header>

        <section css={{ marginBottom: '2.5rem' }}>
          <Heading.Md>영양소 비율</Heading.Md>
          <Divider />
          <Body.Md isGray>
            전문가들이 권장하는 탄수화물 5 : 단백질 2 : 지방 3 비율을 기준으로 A~C까지의 등급으로 표기하였습니다.
          </Body.Md>
          <Spec.List css={{ marginTop: '1rem' }}>
            {data && <GradeSpec grade={data.nutrition_grade} />}
            {data?.nutrients_ratio.map((item) => (
              <NutritionRatioSpec key={item.name} {...item} />
            ))}
          </Spec.List>
        </section>

        <section css={{ marginBottom: '2.5rem' }}>
          <Heading.Md>칼로리 정보</Heading.Md>
          <Divider />
          <Body.Md isGray>하루 2000칼로리의 식단을 기준으로 합니다.</Body.Md>
          <Box css={{ marginTop: '1rem' }}>
            {data && (
              <CaloriePercentage
                calorie={data.nutrition_facts.find((item) => item.name === 'calories') || data.nutrition_facts[0]}
              />
            )}
          </Box>
        </section>

        <section css={{ marginBottom: '1rem' }}>
          <Heading.Md>영양소 정보</Heading.Md>
          <Divider />
          <Body.Md isGray>백분율은 하루 2000칼로리의 식단을 기준으로 합니다.</Body.Md>
          <Box css={{ marginTop: '1rem' }}>
            {data?.nutrition_facts
              .filter((item) => item.name !== 'calories')
              .map((item) => (
                <NutritionPercentage key={item.name} nutrition={item} />
              ))}
          </Box>
        </section>

        <footer>
          <PurchareButton href={data?.url} target="_blank">
            구매하기
          </PurchareButton>
        </footer>
      </SafeArea>
    </>
  )
}

export default FoodDetailPage
