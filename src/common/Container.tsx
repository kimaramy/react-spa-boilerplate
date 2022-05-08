// import React, { ElementType } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const MainCss = css`
  padding: 1rem;
`

export const SectionCss = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

// interface Props {
//   as: ElementType
// }

// const Main: React.FC = ({ children }) => <main css={[MainCss, SectionCss]}>{children}</main>

// export const Container: React.FC<Props> = ({ as, children, ...props }) => React.createElement(as, props, children)

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const SafeArea = styled(Container)`
  padding: 1rem;
`

export default Container
