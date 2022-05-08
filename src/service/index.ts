/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, useMutation, useInfiniteQuery } from 'react-query'
import { AxiosResponse, AxiosError } from 'axios'

export { default as axios } from './axios'

// R: 응답 데이터 스키마
// F: 필터된 응답 데이터 스키마
// Q: 요청 데이터 스키마

export const useAxiosQuery = <R = any, F = any, Q = any>(...params: Parameters<typeof useQuery>) =>
  useQuery<AxiosResponse<R, Q>, AxiosError<R, Q>, F>(params)

export const useAxiosInfiniteQuery = <R = any, F = any, Q = any>(...params: Parameters<typeof useInfiniteQuery>) =>
  useInfiniteQuery<AxiosResponse<R, Q>, AxiosError<R, Q>, F>(params)

export const useAxiosMutation = <R = any, F = any, Q = any>(...params: Parameters<typeof useMutation>) =>
  useMutation<AxiosResponse<R, Q>, AxiosError<R, Q>, F>(params)
