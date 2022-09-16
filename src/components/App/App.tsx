import * as React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
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
        <Flex align="center" justify="center" maxW="1200px" mx="auto">
          {children}
        </Flex>
      </ChakraProvider>
    </QueryClientProvider>
  );
};
