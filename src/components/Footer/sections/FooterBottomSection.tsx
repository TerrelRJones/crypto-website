import { Divider, Flex, Text } from '@chakra-ui/react';
import CustomLink from 'components/CustomLink';
import { COLORS } from 'const/colors';
import { useMobileResponsiveness } from 'hooks/useMobileResponsiveness';

const FooterBottomSection = () => {
  const { isMobile } = useMobileResponsiveness();

  return (
    <Flex
      flexDir={isMobile ? 'column' : 'row'}
      margin="0 auto"
      color={COLORS.ghostWhite}
      justifyContent="space-between"
      marginBottom="30px">
      <Text>Cryptolly &copy;. All rights reserved.</Text>
      <Flex alignItems="center">
        <CustomLink color={COLORS.ghostWhite} size={15} url="#">
          Terms of service
        </CustomLink>
        <Divider
          colorScheme={COLORS.ghostWhite}
          orientation="vertical"
          m="0 15px"
        />
        <CustomLink color={COLORS.ghostWhite} size={15} url="#">
          Privacy Policy
        </CustomLink>
      </Flex>
    </Flex>
  );
};

export default FooterBottomSection;
