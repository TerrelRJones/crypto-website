import { Box, Fade, Flex } from '@chakra-ui/react';
import Button from 'components/Button';
import { ButtonType } from 'components/Button/Button';
import CustomLink from 'components/CustomLink';
import {
  HeaderLinksType,
  linkdata,
} from 'components/Header/mockHeaderLinkData';
import { COLORS } from 'const/colors';
import { AiOutlineClose } from 'react-icons/ai';

interface MobileNavProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClick }) => {
  return (
    <Fade in={isOpen}>
      <Box
        position="fixed"
        zIndex="100"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundColor={COLORS.darkBlue}>
        <Flex h="100%" flexDir="column" justifyContent="space-around">
          <Box>
            <Flex justifyContent="flex-end" p="0 16px" alignItems="center">
              <AiOutlineClose
                color={COLORS.white}
                size="40px"
                onClick={onClick}
              />
            </Flex>
            <Flex
              p="20px 0"
              margin="5px 0"
              alignItems="center"
              w="100%"
              gap={10}
              flexDirection="column">
              {linkdata.map(({ id, title, link }: HeaderLinksType) => (
                <CustomLink key={id} size={40} url={link}>
                  {title}
                </CustomLink>
              ))}
            </Flex>
          </Box>

          <Flex flexDirection="column" gap={5} padding="0 16px">
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
        </Flex>
      </Box>
    </Fade>
  );
};
