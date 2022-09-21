import { footerLinks } from '../mockFooterLinkData';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import CustomLink from 'components/CustomLink';
import { COLORS } from 'const/colors';

const FooterMiddleSection: React.FC = () => {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" mb={5}>
        Quick Links.
      </Text>
      <Flex gap={20}>
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(3, 1fr)"
          rowGap="5px"
          columnGap="60px">
          {footerLinks.map(({ title, id, link }) => (
            <Box key={id} mt={0} marginBottom="15px">
              <CustomLink color={COLORS.ghostWhite} size={15} url={link}>
                {title}
              </CustomLink>
            </Box>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default FooterMiddleSection;
