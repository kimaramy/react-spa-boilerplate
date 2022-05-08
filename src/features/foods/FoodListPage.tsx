import React from 'react'
import Navbar from '@/common/Navbar'
import Container, { SafeArea } from '@/common/Container'
import { Heading } from '@/common/Typography'
import ScrollFrame from '@/common/ScrollFrame'
import FoodCardList from './components/FoodCardList'
import { useInfiniteFoods } from './hooks'

const FoodListPage: React.FC = () => {
  const { isFetching, data, hasNextPage, fetchNextPage } = useInfiniteFoods({ page: 0, limit: 10 })

  return (
    <>
      <Navbar />
      <SafeArea as="main">
        <Container as="header" css={{ marginBottom: '1.5rem' }}>
          <Heading.Lg>푸드</Heading.Lg>
        </Container>
        <Container as="section">
          <Heading.Sm css={{ marginBottom: '1.5rem' }}>🥗 샐러드 영양소 비율 랭킹</Heading.Sm>
          <ScrollFrame onIntersect={fetchNextPage} isActive={hasNextPage} isLoading={isFetching}>
            {data?.pages.map((page, i) => (
              <React.Fragment key={i}>
                <FoodCardList foods={page.data} />
              </React.Fragment>
            ))}
          </ScrollFrame>
        </Container>
      </SafeArea>
    </>
  )
}

export default FoodListPage
