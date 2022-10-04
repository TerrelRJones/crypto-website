import { platformInfoSectionCardData } from './const';
import { Box, Flex, Text } from '@chakra-ui/react';
import GlassBox from 'components/GlassBox';
import SectionContainer from 'components/SectionContainer';
import { COLORS } from 'const/colors';
import { useMobileResponsiveness } from 'hooks/useMobileResponsiveness';

interface PlatformInfoSection {}

export const PlatformInfoSection: React.FC<PlatformInfoSection> = ({}) => {
  const { isMobile, isTablet } = useMobileResponsiveness();
  return (
    <SectionContainer>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Box
          lineHeight={1}
          textAlign="center"
          color={COLORS.white}
          fontWeight="700"
          fontSize={isMobile ? 30 : 40}>
          <Text>The most trusted</Text>
          <Text mb={isMobile ? 5 : 10}>cryptocurrency platform.</Text>
          <Text
            color={COLORS.white}
            textAlign="center"
            fontWeight="400"
            fontSize={isMobile ? 16 : 20}
            mb={isMobile ? '40px' : '80px'}>
            Cryptolly has a variety of features that make it the best place to
            start trading
          </Text>
        </Box>
        <Flex justifyContent={isTablet && 'center'} flexWrap="wrap" gap={5}>
          {platformInfoSectionCardData.map((card, idx) => (
            <GlassBox
              key={idx}
              boxProps={{
                h: isMobile ? 80 : 350,
                w: isMobile ? '100%' : 300,
                padding: '35px 30px',
                mt: !isTablet && idx % 2 !== 0 && '60px',
              }}>
              <Flex flexDirection="column" h="100%" alignItems="center">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor={COLORS.ghostWhite}
                  h="80px"
                  w="80px"
                  p={3}
                  borderRadius={100}>
                  {card.icon}
                </Flex>
                <Text
                  color={COLORS.white}
                  fontWeight="bold"
                  textAlign="center"
                  padding="25px 0"
                  fontSize={25}>
                  {card.title}
                </Text>
                <Text
                  color={COLORS.ghostWhite}
                  textAlign="center"
                  fontSize={20}>
                  {card.desc}
                </Text>
              </Flex>
            </GlassBox>
          ))}
        </Flex>
      </Flex>
    </SectionContainer>
  );
};
