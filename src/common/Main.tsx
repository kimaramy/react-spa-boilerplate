import { css } from '@emotion/react'

export const MainCss = css`
  padding: 1rem;
`

export const SectionCss = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const Main: React.FC = ({ children }) => <main css={[MainCss, SectionCss]}>{children}</main>

export default Main
