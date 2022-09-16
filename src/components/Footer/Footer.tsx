import { Box, Flex } from '@chakra-ui/react';
import { COLORS } from 'const/colors';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Box height="250px" marginTop="auto">
      <Flex maxW={1400} color="#fff" m="0 auto">
        Footer
      </Flex>
    </Box>
  );
};
