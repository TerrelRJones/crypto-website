import { HeaderLinksType, linkdata } from './mockHeaderLinkData';
import { Box, Flex } from '@chakra-ui/react';
import Button from 'components/Button';
import { ButtonType } from 'components/Button/Button';
import CustomLink from 'components/CustomLink';
import FullLogo from 'components/FullLogo';
import { COLORS } from 'const/colors';
import { useMobileResponsiveness } from 'hooks/useMobileResponsiveness';
import { AiOutlineMenu } from 'react-icons/ai';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const { isTablet } = useMobileResponsiveness();

  return (
    <Box minH="80px" mt={5} mb={15}>
      <Flex
        maxW={1400}
        margin="0 auto"
        h="100%"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        padding="0 16px">
        <Box w="200px">
          <FullLogo />
        </Box>

        {isTablet && (
          <AiOutlineMenu
            color={COLORS.white}
            size="40px"
            onClick={() => console.log('opened menu')}
          />
        )}

        {!isTablet && (
          <>
            {!isTablet && (
              <Flex justifyContent="space-between" color="white" gap="40px">
                {linkdata.map(({ id, title, link }: HeaderLinksType) => (
                  <CustomLink key={id} size={20} url={link}>
                    {title}
                  </CustomLink>
                ))}
              </Flex>
            )}

            <Flex gap={5} alignItems="center">
              <Button
                buttonType={ButtonType.SECONDARY}
                onClick={() => console.log('Sign in clilcked')}>
                Sign In
              </Button>
              <Button
                buttonType={ButtonType.PRIMARY}
                onClick={() => console.log('Get started clilcked')}>
                Get Started
              </Button>
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};
