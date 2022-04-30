import React, { useLayoutEffect } from 'react'
import nprogress from 'nprogress'

nprogress.configure({ showSpinner: false, speed: 500 })

const useNProgress = (deps: React.DependencyList) => {
  useLayoutEffect(() => {
    if (nprogress.isStarted()) {
      nprogress.done()
    } else {
      nprogress.start()
      nprogress.done()
    }
    return () => {
      nprogress.remove()
    }
  }, [...deps])
}

export default useNProgress
