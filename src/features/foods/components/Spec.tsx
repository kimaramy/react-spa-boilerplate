import styled from '@emotion/styled'

const SpecList = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
  grid-row: auto auto;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  width: 100%;
  height: auto;
`

const Spec = styled.div<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 8.75rem;
  padding: 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.bgColor};
`

const SpecContent = styled.div`
  display: flex;
  justify-content: space-between;
`

const SpecTitle = styled.div`
  display: flex;
`

export default Object.assign(Spec, {
  List: SpecList,
  Title: SpecTitle,
  Content: SpecContent,
})
