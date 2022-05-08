/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, useCallback } from 'react'

const baseOption = {
  root: null, // 비지정시 window viewport
  rootMargin: '0px',
  threshold: 0.5,
}

/**
 * @param onIntersect Observer의 추적 대상(entry.target)이 Observer 영역에 들어오면 실행할 콜백
 * @param option Observer 설정 옵션
 * @returns Observer의 추적 대상(entry.target) 엘리먼트 참조(ref)
 */
const useIntersectionObserver = <T extends HTMLElement>(
  onIntersect: () => void,
  option: IntersectionObserverInit = {},
) => {
  const targetRef = useRef<T>(null) // Observer 콜백을 실행할 Observer 추적 대상(entry.target) 엘리먼트

  const checkIntersection = useCallback<IntersectionObserverCallback>(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        onIntersect()
        observer.unobserve(entry.target) // 중복 onIntersect 콜 방지
      }
    },
    [onIntersect], // props로 넘겨받은 onIntersect 콜백이 갱신되면 따라서 Observer 콜백 갱신, 아니면 캐시
  )

  useEffect(() => {
    let observer: IntersectionObserver
    if (targetRef.current) {
      observer = new IntersectionObserver(checkIntersection, {
        ...baseOption,
        ...option,
      })
      observer.observe(targetRef.current)
    }
    return () => {
      targetRef.current && observer.unobserve(targetRef.current)
    }
  }, [option, checkIntersection])

  return targetRef
}

export default useIntersectionObserver
