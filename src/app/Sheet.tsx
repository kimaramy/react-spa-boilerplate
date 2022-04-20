import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { css } from '@emotion/react'

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
  const { pathname } = useLocation()

  useEffect(() => {
    const scrollY = sessionStorage.getItem('scrollY')
    if (pathname === '/' && scrollY) {
      // console.log('scrollY', scrollY)
      sessionStorage.removeItem('scrollY')
      window.scrollTo({ top: Number(scrollY), left: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }, [pathname])

  return <div css={SheetCss}>{children}</div>
}

export default Sheet
