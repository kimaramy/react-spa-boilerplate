import React from 'react'

/**
 * Context API 리렌더링 테스트용
 */
const MemoizedChild = () => {
  console.log('MemoizedChild Rendered')
  return <div></div>
}

export default React.memo(MemoizedChild)
