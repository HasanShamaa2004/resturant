'use client'
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { CustomUseMutationOptions } from '../types/Hooks/useCustomMutation';



export function useCustomMutation<TData, TError, TVariables, TContext>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: CustomUseMutationOptions<TData, TError, TVariables, TContext>
): UseMutationResult<TData, TError, TVariables, TContext> {
  return useMutation({mutationFn, 
    onError: (error, variables, context) => {
      console.error('Mutation error:', error);
      if (options?.onError) options.onError(error, variables, context);
    },
    ...options,}
  );
}