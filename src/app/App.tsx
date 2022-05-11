import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ErrorBoundary } from 'react-error-boundary'
import { hot } from 'react-hot-loader/root'
import Spinner from '@/common/Spinner'
import ErrorPage from '@/common/ErrorPage'
import Sheet from './Sheet'
import Page from './Page'
import MemoizedChild from './MemoizedChild'
import { DarkModeContextProvider } from '@/context/DarkModeContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      // cacheTime: 1000 * 60, // 1 min (default: 5 mins)
      suspense: true,
    },
  },
})

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <DarkModeContextProvider>
        <Sheet>
          <Suspense fallback={<Spinner />}>
            <QueryErrorResetBoundary>
              {({ reset }) => (
                <ErrorBoundary
                  onReset={reset}
                  fallbackRender={({ resetErrorBoundary }) => (
                    <ErrorPage
                      status={500}
                      fallback={<button onClick={() => resetErrorBoundary()}>다시 시도</button>}
                    />
                  )}
                >
                  <Page />
                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>
          </Suspense>
        </Sheet>
        <MemoizedChild />
      </DarkModeContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)

export default hot(App)
