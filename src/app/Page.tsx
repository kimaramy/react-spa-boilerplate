import { lazy } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const FoodListPage = lazy(() => import('@/features/foods/FoodListPage'))
const FoodDetailPage = lazy(() => import('@/features/foods/FoodDetailPage'))
const ErrorPage = lazy(() => import('@/common/ErrorPage'))

export default function Page() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FoodListPage />} />
        <Route path="/:id" element={<FoodDetailPage />} />
        <Route path="*" element={<ErrorPage status={404} fallback={<Link to="/">홈으로</Link>} />} />
      </Routes>
    </>
  )
}
