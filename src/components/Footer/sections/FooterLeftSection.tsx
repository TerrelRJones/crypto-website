import { Box, Flex, Text } from '@chakra-ui/react';
import FullLogo from 'components/FullLogo';
import { COLORS } from 'const/colors';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

const FooterLeftSection = () => {
  return (
    <Box w={400}>
      <Box w={150} mb="15px">
        <FullLogo />
      </Box>
      <Text>Your best crypto partner</Text>
      <Flex w={100} justifyContent="space-between" mt={5}>
        <Box>
          <AiFillLinkedin size={20} color={COLORS.ghostWhite} />
        </Box>
        <Box>
          <AiFillFacebook size={20} color={COLORS.ghostWhite} />
        </Box>
        <Box>
          <AiFillInstagram size={20} color={COLORS.ghostWhite} />
        </Box>
      </Flex>
    </Box>
  );
};

export default FooterLeftSection;
