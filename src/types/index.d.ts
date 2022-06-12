import type { To } from 'react-router-dom'

declare global {
  interface ReactRouterRouteState {
    backTo?: To
    backScrollPosition?: number[]
    scrollRestorable?: boolean
  }

  interface JsonServerQueryParams {
    start?: number
    end?: number
    limit?: number
    page?: number
  }
}
