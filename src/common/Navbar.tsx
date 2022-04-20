import styled from '@emotion/styled'

interface Props {
  isFixed?: boolean
}

const Navbar = styled.nav<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 1rem;
  position: ${(props) => (props.isFixed ? 'sticky' : 'static')};
  z-index: 100;
  top: 0;
  background-color: #0c0f0f;
`

export default Navbar
