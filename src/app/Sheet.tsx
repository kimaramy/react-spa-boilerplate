import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
// import { useDarkModeContext } from '@/context/DarkModeContext'

const StyledSheet = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 375px;
  min-height: 100vh;
  /* overflow-x: hidden;
  overflow: auto; */
  background-color: #0c0f0f;
`

const Sheet: React.FC = ({ children }) => {
  const location = useLocation()

  // const [darkMode, toggleDarkMode] = useDarkModeContext()

  useLayoutEffect(() => {
    const routeState = location.state as ReactRouterRouteState

    if (routeState?.scrollRestorable) {
      const [left, top] = routeState?.backScrollPosition || [0, 0]
      window.scrollTo({ left, top })
    } else {
      window.scrollTo({ left: 0, top: 0 })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]) // 각지 컴포넌트에서 쿼리 파라미터를 변경함에 따라 location이 갱신되게 되는데, 그 중 pathname만 변경될 때만 상태에 저장한 포지션으로 스크롤 복구를 실행함

  return (
    <StyledSheet>
      {/* <div>
        <button onClick={() => toggleDarkMode((isDarkMode) => !isDarkMode)}>{`${darkMode}`}</button>
      </div> */}
      {children}
    </StyledSheet>
  )
}

export default Sheet
