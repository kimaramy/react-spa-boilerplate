const messages = {
  404: '페이지를 찾을 수 없습니다.',
  500: '데이터를 불러오는 도중 문제가 발생했습니다.',
}

interface Props {
  status: 404 | 500
  fallback: React.ReactNode
}

const ErrorPageTemplate: React.FC<{ message: string }> = ({ message }) => (
  <div>
    <h2>{message}</h2>
  </div>
)

const ErrorPage: React.FC<Props> = ({ status, fallback }) => {
  return (
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <ErrorPageTemplate message={messages[status]} />
      {fallback}
    </div>
  )
}

export default ErrorPage
