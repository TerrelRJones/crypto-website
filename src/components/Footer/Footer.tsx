import FooterBottomSection from './sections/FooterBottomSection';
import FooterLeftSection from './sections/FooterLeftSection';
import FooterMiddleSection from './sections/FooterMiddleSection';
import FooterRightSection from './sections/FooterRightSection';
import { Box, Divider, Flex } from '@chakra-ui/react';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Box marginTop="auto">
      <Box maxW={1400} color="#fff" m="0 auto">
        <Flex justifyContent="space-between">
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
