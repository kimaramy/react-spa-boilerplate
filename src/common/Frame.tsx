import styled from '@emotion/styled'
import { useIntersectionObserver, useNProgress } from '@/hooks'

interface Props {
  isLoading?: boolean
  onIntersect?: () => void
}

const Frame = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: beige; */
`

const LastChild = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 5rem;
  font-size: 1rem;
`

const _Frame: React.FC<Props> = ({ isLoading = false, onIntersect = () => null, children }) => {
  const targetRef = useIntersectionObserver<HTMLDivElement>(onIntersect)

  useNProgress([isLoading])

  return (
    <Frame>
      {children}
      <LastChild ref={targetRef}>{isLoading && '불러오는 중...'}</LastChild>
    </Frame>
  )
}

export default _Frame
