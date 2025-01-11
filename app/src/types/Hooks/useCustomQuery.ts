import { UseQueryOptions } from "@tanstack/react-query";

export type CustomUseQueryOptions<TQueryFnData, TError, TData, TQueryKey extends unknown[]> = UseQueryOptions<
  TQueryFnData,
  TError,
  TData,
  TQueryKey
> & {
  onError?: (error: TError) => void; // إضافة onError كخاصية اختيارية
};