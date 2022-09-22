import { Box, Flex, Text } from '@chakra-ui/react';
import CustomLink from 'components/CustomLink';
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
        <CustomLink size={25} color={COLORS.ghostWhite} url="#">
          <AiFillLinkedin />
        </CustomLink>
        <CustomLink size={25} color={COLORS.ghostWhite} url="#">
          <AiFillFacebook />
        </CustomLink>
        <CustomLink size={25} color={COLORS.ghostWhite} url="#">
          <AiFillInstagram />
        </CustomLink>
      </Flex>
    </Box>
  );
};

export default FooterLeftSection;
