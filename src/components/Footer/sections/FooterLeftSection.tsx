import { Box, Flex, Text } from '@chakra-ui/react';
import FullLogo from 'components/FullLogo';

const FooterLeftSection = () => {
  return (
    <Box w={400}>
      <Box w={150}>
        <FullLogo />
      </Box>
      <Text>Your best crypto partner</Text>
      <Flex w={150} justifyContent="space-around" mt={5}>
        <Box>in</Box>
        <Box>f</Box>
        <Box>ig</Box>
      </Flex>
    </Box>
  );
};

export default FooterLeftSection;
