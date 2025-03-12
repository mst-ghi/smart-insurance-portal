import { QueryClient } from '@tanstack/react-query';

export const DefaultQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60,
      refetchOnReconnect: 'always',
    },
  },
});
