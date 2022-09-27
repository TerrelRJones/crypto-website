import { Box, Flex, Text } from '@chakra-ui/react';
import Button from 'components/Button';
import { ButtonSize, ButtonType } from 'components/Button/Button';
import { COLORS } from 'const/colors';
import { useMobileResponsiveness } from 'hooks/useMobileResponsiveness';

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
  const { isMobile } = useMobileResponsiveness();

  return (
    <Flex
      mb={10}
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      minH={!isMobile && 600}>
      <Box w={!isMobile && '60%'}>
        <Text
          lineHeight={1}
          textAlign="center"
          color={COLORS.white}
          fontWeight="700"
          fontSize={isMobile ? 30 : 60}
          mb={isMobile ? 5 : 10}>
          {header}
        </Text>
        <Text
          color={COLORS.white}
          textAlign="center"
          fontSize={isMobile ? 16 : 20}
          mb={isMobile ? '40px' : '90px'}>
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
