import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { Button, ButtonType } from 'components/Button/Button';
import { COLORS } from 'const/colors';

const FooterRightSection = () => {
  return (
    <Box w={400}>
      <Text fontSize="lg" fontWeight="bold" mb={5}>
        Submit for updates.
      </Text>
      <Text mb={5} color={COLORS.ghostWhite}>
        Subscribe to get update and notify our exchange and products.
      </Text>

      {/* email input */}
      <InputGroup display="flex" justifyContent="flex-end">
        <Input
          type="email"
          placeholder="Enter your email address"
          borderRadius={50}
          h="60px"
        />
        <InputRightElement
          h="100%"
          display="flex"
          justifyContent="flex-end"
          padding="0 5px"
          alignItems="center">
          <Button
            buttonType={ButtonType.PRIMARY}
            onClick={() => console.log('Send btn clicked')}>
            Send
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default FooterRightSection;
