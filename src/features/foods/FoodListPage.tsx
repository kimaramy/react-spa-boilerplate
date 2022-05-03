import Navbar from '@/common/Navbar'
import Container, { SafeArea } from '@/common/Container'
import { Heading } from '@/common/Typography'
import FoodCardList from './components/FoodCardList'

const FoodListPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <SafeArea as="main">
        <Container as="header" css={{ marginBottom: '1.5rem' }}>
          <Heading.Lg>푸드</Heading.Lg>
        </Container>
        <Container as="section">
          <Heading.Sm>🥗 샐러드 영양소 비율 랭킹</Heading.Sm>
          <FoodCardList />
        </Container>
      </SafeArea>
    </>
  )
}

export default FoodListPage
