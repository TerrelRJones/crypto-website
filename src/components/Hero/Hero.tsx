import { Box, Flex, Text } from '@chakra-ui/react';
import Button from 'components/Button';
import { ButtonType } from 'components/Button/Button';
import { COLORS } from 'const/colors';

interface HeroProps {
  header: string;
  buttonTitle?: string;
  children: React.ReactNode;
  button?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  children,
  header,
  buttonTitle,
  button,
}) => {
  return (
    <Flex
      minH="600px"
      flexDir="column"
      justifyContent="center"
      alignItems="center">
      <Box w="60%">
        <Text
          lineHeight={1}
          textAlign="center"
          color={COLORS.white}
          fontWeight="700"
          fontSize={60}
          mb={10}>
          {header}
        </Text>
        <Text color={COLORS.white} textAlign="center" fontSize={20} mb="90px">
          {children}
        </Text>
        {button && (
          <Flex justifyContent="center">
            <Box w="300px">
              <Button
                buttonType={ButtonType.PRIMARY}
                onClick={() => console.log('Get started clicked')}>
                {buttonTitle}
              </Button>
            </Box>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};
