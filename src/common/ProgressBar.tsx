import styled from '@emotion/styled'

interface Props {
  value: number
}

const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background-color: #30333f;
  border-radius: 6px;
`

const Progress = styled.span<Props>`
  position: absolute;
  display: inline-block;
  width: ${(props) => `${props.value}%`};
  height: 100%;
  border-radius: 6px;
  background-color: #ffffff;
`

const _ProgressBar: React.FC<Props> = ({ value }) => (
  <ProgressBar role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
    <Progress value={value} />
  </ProgressBar>
)

export default _ProgressBar
