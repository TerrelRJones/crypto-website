import * as React from 'react';
import { Flex } from '@chakra-ui/react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { COLORS } from 'const/colors';
import { useMobileResponsiveness } from 'hooks/useMobileResponsiveness';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isTablet } = useMobileResponsiveness();

  return (
    <Flex bgColor={COLORS.darkBlue} flexDirection="column" minH="100vh">
      <Header />
      <Flex
        maxW={1400}
        w="100%"
        m="0 auto"
        direction="column"
        padding={isTablet && '0 16px'}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
