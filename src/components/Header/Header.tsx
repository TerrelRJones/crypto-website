import { Box, Flex, Link } from '@chakra-ui/react';
import FullLogo from 'components/FullLogo';
import { COLORS } from 'const/colors';

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

        <Flex
          justifyContent="space-between"
          color="white"
          gap="40px"
          fontSize={20}
          fontWeight="medium">
          {linkdata.map(({ title, link }: HeaderLinksType) => (
            <Link
              href={link}
              isExternal
              transition="all .25s ease-in-out"
              _hover={{
                cursor: 'poiner',
                color: COLORS.secondaryGreen,
              }}>
              {title}
            </Link>
          ))}
        </Flex>

        <Flex gap={5} alignItems="center">
          <Box
            border="2px solid #fff"
            padding="10px 15px"
            borderRadius={50}
            color="white ">
            Sign In
          </Box>
          <Box
            bgColor={COLORS.primaryBlue}
            border={`2px solid ${COLORS.primaryBlue}`}
            padding="10px 15px"
            borderRadius={50}
            color="white "
            transition="all .25s ease-in-out"
            _hover={{
              cursor: 'pointer',
              color: COLORS.primaryBlue,
              bgColor: COLORS.secondaryGreen,
              borderColor: COLORS.secondaryGreen,
            }}>
            Get Started
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
