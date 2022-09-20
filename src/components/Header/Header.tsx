import { Box, Flex } from '@chakra-ui/react';
import Button from 'components/Button';
import { ButtonType } from 'components/Button/Button';
import CustomLink from 'components/CustomLink';
import FullLogo from 'components/FullLogo';

interface HeaderProps {}

type HeaderLinksType = { title: string; link: string };

const linkdata: HeaderLinksType[] = [
  {
    title: 'Exchange',
    link: '#',
  },
  {
    title: 'Pricing',
    link: '#',
  },
  {
    title: 'Wallet',
    link: '#',
  },
  {
    title: 'Company',
    link: '#',
  },
  {
    title: 'Blog',
    link: '#',
  },
];

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Box h="80px">
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
          {linkdata.map(({ title, link }: HeaderLinksType) => (
            <CustomLink url={link}>{title}</CustomLink>
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
