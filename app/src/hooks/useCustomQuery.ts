import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { CustomUseQueryOptions } from '../types/Hooks/useCustomQuery';



export function useCustomQuery<TQueryFnData, TError, TData = TQueryFnData, TQueryKey extends any[] = any[]>(
  queryKey: TQueryKey,
  queryFn: () => Promise<TQueryFnData>,
  options?: CustomUseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
): UseQueryResult<TData, TError> {
  const mergedOptions: CustomUseQueryOptions<TQueryFnData, TError, TData, TQueryKey> = {
    ...options,
    queryKey,
    queryFn,
    onError: (error: TError) => {
      console.error('An error occurred:', error); // سجل الخطأ في الكونسول
      if (options?.onError) {
        options.onError(error); // استدعاء onError الخاص بالخيارات إذا وُجد
      }
    },
  };

  return useQuery(mergedOptions);
}
