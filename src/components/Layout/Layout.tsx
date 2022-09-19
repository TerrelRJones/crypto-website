import * as React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { COLORS } from 'const/colors';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex bgColor={COLORS.darkBlue} flexDirection="column" minH="100vh">
      <Header />
      <Flex w="100%" maxW={1400} m="0 auto">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
