import React from 'react'
import Container from '@/common/Container'
import { Heading } from '@/common/Typography'
import ScrollFrame from '@/common/ScrollFrame'
import FoodCardList from './FoodCardList'
import { useInfiniteFoods } from '../hooks'

const ScrolledFoodList: React.FC = () => {
  const { isFetching, data, hasNextPage, fetchNextPage } = useInfiniteFoods({ page: 1, limit: 10 })

  return (
    <Container as="section">
      <Heading.Sm css={{ marginBottom: '1.5rem' }}>π₯ μλ¬λ μμμ λΉμ¨ λ­νΉ</Heading.Sm>
      <ScrollFrame onIntersect={fetchNextPage} isActive={hasNextPage} isLoading={isFetching}>
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            <FoodCardList foods={page.data} />
          </React.Fragment>
        ))}
      </ScrollFrame>
    </Container>
  )
}

export default ScrolledFoodList
