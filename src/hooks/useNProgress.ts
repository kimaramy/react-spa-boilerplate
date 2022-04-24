import React, { useLayoutEffect } from 'react'
import nprogress from 'nprogress'

const useNProgress = (deps: React.DependencyList) => {
  useLayoutEffect(() => {
    if (nprogress.isStarted()) {
      nprogress.done()
    } else {
      nprogress.configure({ showSpinner: false, speed: 500 })
      nprogress.start()
      nprogress.done()
    }
    return () => {
      nprogress.remove()
    }
  }, [...deps])
}

export default useNProgress
