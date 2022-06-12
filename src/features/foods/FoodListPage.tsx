import React, { useState, useLayoutEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { SwitchVerticalIcon, SwitchHorizontalIcon } from '@heroicons/react/outline/index'
import Navbar from '@/common/Navbar'
import Container, { SafeArea } from '@/common/Container'
import { Heading } from '@/common/Typography'
import PaginatedFoodList from './components/PaginatedFoodList'
import ScrolledFoodList from './components/ScrolledFoodList'

const SwitchButton = styled.button<{ isActive: boolean }>`
  display: inline-block;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: transparent;
  border-radius: 6px;
  background-color: ${({ isActive }) => (isActive ? '#6BBF00' : '#1e2127')};
  cursor: pointer;

  &:not(:first-child):last-child {
    margin-left: 0.5rem;
  }
`

const FoodListPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({ listing: 'scroll' })

  const [listingParam, setListingParam] = useState(() => searchParams.get('listing') || 'scroll')

  const [pageParam] = useState(() => Number(searchParams.get('page')) || 1) // Number(null) === 0

  useLayoutEffect(() => {
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

            <div>
              <SwitchButton isActive={listingParam === 'scroll'} onClick={() => setListingParam('scroll')}>
                <SwitchVerticalIcon css={{ width: '1.125rem', color: 'white' }} />
              </SwitchButton>

              <SwitchButton isActive={listingParam === 'page'} onClick={() => setListingParam('page')}>
                <SwitchHorizontalIcon css={{ width: '1.125rem', color: '#fff' }} />
              </SwitchButton>
            </div>
          </div>
        </Container>
        {listingParam === 'page' ? <PaginatedFoodList initialPage={pageParam} /> : <ScrolledFoodList />}
      </SafeArea>
    </>
  )
}

export default FoodListPage
