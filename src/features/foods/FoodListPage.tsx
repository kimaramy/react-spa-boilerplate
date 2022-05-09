import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '@/common/Navbar'
import Container, { SafeArea } from '@/common/Container'
import { Heading } from '@/common/Typography'
import PaginatedFoodList from './components/PaginatedFoodList'
import ScrolledFoodList from './components/ScrolledFoodList'

const getNextListingQuery = (listingQuery: string | null): string => {
  switch (listingQuery) {
    case 'scroll':
      return 'page'
    case 'page':
    default:
      return 'scroll'
  }
}

const FoodListPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [listingQuery, setListQuery] = useState(() => searchParams.get('listing'))

  useEffect(() => {
    if (listingQuery) {
      // listQuery가 setListQuery에 의해 변경 되면 쿼리 파라미터도 변경
      setSearchParams({ listing: listingQuery })
    }
  }, [listingQuery, setSearchParams])

  return (
    <>
      <Navbar />
      <SafeArea as="main">
        <Container as="header" css={{ marginBottom: '1.5rem', flexGrow: 0 }}>
          <div css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Heading.Lg>푸드</Heading.Lg>
            <button onClick={() => setListQuery(getNextListingQuery(listingQuery))}>
              {getNextListingQuery(listingQuery)} view
            </button>
          </div>
        </Container>
        {listingQuery === 'page' ? <PaginatedFoodList /> : <ScrolledFoodList />}
      </SafeArea>
    </>
  )
}

export default FoodListPage
