import { useState } from 'react';
import { HeaderLinksType, linkdata } from './mockHeaderLinkData';
import { Box, Divider, Fade, Flex } from '@chakra-ui/react';
import Button from 'components/Button';
import { ButtonSize, ButtonType } from 'components/Button/Button';
import CustomLink from 'components/CustomLink';
import FullLogo from 'components/FullLogo';
import LogoMark from 'components/LogoMark';
import MobileNav from 'components/MobileNav';
import { COLORS } from 'const/colors';
import { useMobileResponsiveness } from 'hooks/useMobileResponsiveness';
import { useToggle } from 'hooks/useToggle';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [isOpen, { toggle }] = useToggle();
  const { isTablet, isMobile } = useMobileResponsiveness();

  return (
    <Box minH="80px" pt={5} mb={15}>
      <Flex
        maxW={1400}
        margin="0 auto"
        h="100%"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        padding="0 16px">
        {!isMobile && (
          <Box w="200px">
            <FullLogo />
          </Box>
        )}
        {isMobile && (
          <Box w="80px">
            <LogoMark />
          </Box>
        )}

        {isTablet && (
          <>
            {isOpen ? (
              <MobileNav isOpen={isOpen} onClick={() => toggle()} />
            ) : (
              <AiOutlineMenu
                color={COLORS.white}
                size="40px"
                onClick={() => toggle()}
              />
            )}
          </>
        )}

        {!isTablet && (
          <>
            <Flex justifyContent="space-between" color="white" gap="40px">
              {linkdata.map(({ id, title, link }: HeaderLinksType) => (
                <CustomLink key={id} size={20} url={link}>
                  {title}
                </CustomLink>
              ))}
            </Flex>

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
