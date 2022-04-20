import { css, keyframes } from '@emotion/react'

const spinAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

const SpinnerCss = css({
  position: 'fixed',
  zIndex: 1000,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 'auto',
  border: '5px solid #f3f3f3',
  borderTop: '5px solid #555555',
  borderRadius: '50%',
  width: 80,
  height: 80,
  animation: `${spinAnimation} 1s linear infinite`,
})

const Spinner = () => <div css={SpinnerCss} />

export default Spinner
