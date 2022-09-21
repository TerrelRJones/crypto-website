import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from 'components/Layout';
import { QueryClient, QueryClientProvider } from 'react-query';

interface AppProps {
  children?: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const App = ({ children }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Layout>{children}</Layout>
      </ChakraProvider>
    </QueryClientProvider>
  );
};
