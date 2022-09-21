import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import CoinIcon from 'components/CoinIcon';
import GlassBox from 'components/GlassBox';
import { BREAKPOINTS } from 'const/breakpoints';
import { COLORS } from 'const/colors';
import { useCryptoService } from 'hooks/useCryptoService';
import { Item } from 'types/coins';

interface CoinGraphCardProps {
  item?: Item;
}

export const CoinGraphCard = ({ item }: CoinGraphCardProps) => {
  const { large: icon, id: coinName, symbol } = item;
  const { marketData } = useCryptoService({ coinName });
  const USD_PRICE = marketData?.prices[marketData.prices.length - 1][1]
    .toString()
    .substring(0, 7);

  // calculate f/% Increase || decrease

  return (
    <GlassBox
      boxProps={{
        minH: 250,
        p: 5,
      }}>
      <Flex justifyContent="space-between">
        <CoinIcon src={icon} spacing={{ marginRight: 5 }} />
        <Flex marginRight="auto" flexDirection="column">
          <Text color={COLORS.accentBlue}>{coinName}</Text>
          <Text color="whiteAlpha.900" fontSize="3xl" as="b">
            USD {USD_PRICE}
          </Text>
        </Flex>
        <Text color={COLORS.ghostAccentBlue}>{symbol}</Text>
      </Flex>
    </GlassBox>
  );
};
