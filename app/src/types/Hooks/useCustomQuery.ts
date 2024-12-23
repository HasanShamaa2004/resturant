import { UseQueryOptions } from "@tanstack/react-query";

export type CustomUseQueryOptions<TQueryFnData, TError, TData, TQueryKey extends any[]> = UseQueryOptions<
  TQueryFnData,
  TError,
  TData,
  TQueryKey
> & {
  onError?: (error: TError) => void; // إضافة onError كخاصية اختيارية
};