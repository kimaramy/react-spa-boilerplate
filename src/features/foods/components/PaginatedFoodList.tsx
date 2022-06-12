import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Container from '@/common/Container'
import { Heading } from '@/common/Typography'
import FoodCardList from './FoodCardList'
import { usePaginatedFoods } from '../hooks'

interface Props {
  /**
   * number of initial page
   */
  initialPage?: number
  /**
   * total number of items per page
   */
  limit?: number
}

const PaginatedFoodList: React.FC<Props> = ({ initialPage = 1, limit = 5 }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [pageNum, setPageNum] = useState(initialPage)

  const { data, isFetching } = usePaginatedFoods({ page: pageNum, limit })

  const lastPageNum = useMemo(() => Math.ceil((Number(data?.headers['x-total-count']) || limit) / limit), [data, limit])

  useEffect(() => {
    const params = {} as Record<string, string>
    searchParams.forEach((value, key) => {
      if (value) params[key] = value
    })
    setSearchParams({ ...params, page: pageNum.toString() })
  }, [pageNum, searchParams, setSearchParams])

  return (
    <Container as="section">
      <Heading.Sm css={{ marginBottom: '1.5rem' }}>🥗 샐러드 목록</Heading.Sm>
      <Container as="div">
        <div>{data?.data && <FoodCardList foods={data.data} />}</div>
        <div>
          <button disabled={pageNum === 1} onClick={() => setPageNum(1)}>
            Start
          </button>
          <button disabled={pageNum === 1} onClick={() => setPageNum((pageNum) => --pageNum)}>
            Prev
          </button>
          <button disabled={pageNum === lastPageNum} onClick={() => setPageNum((pageNum) => ++pageNum)}>
            Next
          </button>
          <button disabled={pageNum === lastPageNum} onClick={() => setPageNum(lastPageNum)}>
            End
          </button>
        </div>
        {isFetching && <p>Loading...</p>}
      </Container>
    </Container>
  )
}

export default PaginatedFoodList
