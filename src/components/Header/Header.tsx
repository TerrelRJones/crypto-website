import { HeaderLinksType, linkdata } from './mockHeaderLinkData';
import { Box, Flex } from '@chakra-ui/react';
import Button from 'components/Button';
import { ButtonType } from 'components/Button/Button';
import CustomLink from 'components/CustomLink';
import FullLogo from 'components/FullLogo';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Box h="80px" mb={15}>
      <Flex
        maxW={1400}
        margin="0 auto"
        padding="5px 0"
        h="100%"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap">
        <Box w="200px">
          <FullLogo />
        </Box>

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
      </Flex>
    </Box>
  );
};
