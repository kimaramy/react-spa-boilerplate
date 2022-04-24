import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { css } from '@emotion/react'
import { useIsFetching, useIsMutating } from 'react-query'
import { useNProgress } from '@/hooks'

const SheetCss = css`
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

  const isFetching = useIsFetching() // 1(true) or 0(false)
  const isMutating = useIsMutating() // 1(true) or 0(false)

  useNProgress([location.pathname, isFetching, isMutating])

  useLayoutEffect(() => {
    const scrollY = sessionStorage.getItem('scrollY')
    if (location.pathname === '/' && scrollY) {
      // console.log('scrollY', scrollY)
      sessionStorage.removeItem('scrollY')
      window.scrollTo({ top: Number(scrollY), left: 0 })
    } else {
      window.scrollTo({ top: 0, left: 0 })
    }
  }, [location.pathname])

  return <div css={SheetCss}>{children}</div>
}

export default Sheet
