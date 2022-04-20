import Navbar from '@/common/Navbar'
import Main, { SectionCss } from '@/common/Main'
import { Heading } from '@/common/Typography'
import { useFoodList } from './hooks'
import FoodCardList from './components/FoodCardList'

const FoodListPage: React.FC = () => {
  const { data } = useFoodList()

  return (
    <>
      <Navbar />
      <Main>
        <header css={{ marginBottom: '1.5rem' }}>
          <Heading.Lg>푸드</Heading.Lg>
        </header>
        <section css={SectionCss}>
          <Heading.Sm>🥗 샐러드 영양소 비율 랭킹</Heading.Sm>
          {data && <FoodCardList foods={data} amountToAdd={10} />}
        </section>
      </Main>
    </>
  )
}

export default FoodListPage
