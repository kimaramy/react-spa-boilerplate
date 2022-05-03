import styled from '@emotion/styled'
import { useIntersectionObserver } from '@/hooks'

interface Props {
  onIntersect: () => void
  isActive?: boolean
  isLoading?: boolean
  renderLoading?: (isLoading: boolean) => React.ReactChild
}

const Frame = styled.div`
  width: 100%;
  height: 100%;
`

const Fallback = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 5rem;
  font-size: 1rem;
  color: white;
`

const ScrollFrame: React.FC<Props> = ({ onIntersect, isActive = true, isLoading = false, renderLoading, children }) => {
  const targetRef = useIntersectionObserver<HTMLDivElement>(onIntersect)

  return (
    <Frame>
      {children}
      {isActive && (
        <Fallback ref={targetRef}>
          {renderLoading ? renderLoading(isLoading) : isLoading ? '불러오는 중...' : null}
        </Fallback>
      )}
    </Frame>
  )
}

export default ScrollFrame
