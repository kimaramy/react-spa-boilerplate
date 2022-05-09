import type { To } from 'react-router-dom'

export interface HistoryState {
  backTo?: To
  backScrollPosition?: number[]
  scrollRestorable?: boolean
}
