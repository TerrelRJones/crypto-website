import FooterBottomSection from './sections/FooterBottomSection';
import FooterLeftSection from './sections/FooterLeftSection';
import FooterMiddleSection from './sections/FooterMiddleSection';
import FooterRightSection from './sections/FooterRightSection';
import { Box, Divider, Flex, useMediaQuery } from '@chakra-ui/react';
import { BREAKPOINTS } from 'const/breakpoints';
import { COLORS } from 'const/colors';
import { useMobileResponsiveness } from 'hooks/useMobileResponsiveness';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const { isTablet, isDesktop } = useMobileResponsiveness();

  const { getFlexDir } = useMobileResponsiveness();

  return (
    <Box marginTop="auto">
      <Box
        maxW={1400}
        color={COLORS.white}
        m="0 auto"
        mt="40px"
        padding={isDesktop && '0 16px'}>
        <Flex
          justifyContent="space-between"
          flexDirection={getFlexDir()}
          gap={isTablet ? 5 : 0}>
          <FooterLeftSection />
          <FooterMiddleSection />
          <FooterRightSection />
        </Flex>
        <Divider marginTop="80px" mb="40px" />
        <FooterBottomSection />
      </Box>
    </Box>
  );
};
