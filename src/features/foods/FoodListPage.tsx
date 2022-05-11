import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '@/common/Navbar'
import Container, { SafeArea } from '@/common/Container'
import { Heading } from '@/common/Typography'
import PaginatedFoodList from './components/PaginatedFoodList'
import ScrolledFoodList from './components/ScrolledFoodList'

const getNextListingParam = (listingParam: string | null): string => {
  switch (listingParam) {
    case 'scroll':
      return 'page'
    case 'page':
    default:
      return 'scroll'
  }
}

const FoodListPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({ listing: 'scroll' })

  const [listingParam, setListingParam] = useState(() => searchParams.get('listing'))

  const [pageParam] = useState(() => Number(searchParams.get('page')) || 1) // Number(null) === 0

  useEffect(() => {
    if (listingParam) {
      // listingParam이 setListingParam에 의해 변경되면 쿼리 파라미터도 변경
      const params = {} as Record<string, string>
      searchParams.forEach((value, key) => {
        params[key] = value
      })
      setSearchParams({ ...params, listing: listingParam })
    }
  }, [listingParam, searchParams, setSearchParams])

  return (
    <>
      <Navbar />
      <SafeArea as="main">
        <Container as="header" css={{ marginBottom: '1.5rem', flexGrow: 0 }}>
          <div css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Heading.Lg>푸드</Heading.Lg>
            <button onClick={() => setListingParam(getNextListingParam(listingParam))}>
              {getNextListingParam(listingParam)} view
            </button>
          </div>
        </Container>
        {listingParam === 'page' ? <PaginatedFoodList initialPage={pageParam} /> : <ScrolledFoodList />}
      </SafeArea>
    </>
  )
}

export default FoodListPage
