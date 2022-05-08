import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { css } from '@emotion/react'
import { useDarkModeContext } from '@/context/DarkModeContext'
import type { HistoryState } from '@/types'

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
  console.log('Sheet rendered')

  const location = useLocation()

  const [darkMode, toggleDarkMode] = useDarkModeContext()

  useLayoutEffect(() => {
    const scrollRestorable = (location.state as HistoryState)?.scrollRestorable || false
    if (scrollRestorable) {
      const [left, top] = (location.state as HistoryState)?.backScrollPosition || [0, 0]
      window.scrollTo({ left, top })
    } else {
      window.scrollTo({ left: 0, top: 0 })
    }
  }, [location.state])

  return (
    <div css={SheetCss}>
      <div>
        <button onClick={() => toggleDarkMode((isDarkMode) => !isDarkMode)}>{`${darkMode}`}</button>
      </div>
      {children}
    </div>
  )
}

export default Sheet
