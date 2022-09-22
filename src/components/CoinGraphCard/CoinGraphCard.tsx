import { Flex, Text } from '@chakra-ui/react';
import CoinIcon from 'components/CoinIcon';
import GlassBox from 'components/GlassBox';
import MarketGraph from 'components/MarketGraph';
import { COLORS } from 'const/colors';
import { useCryptoService } from 'hooks/useCryptoService';
import { useMobileResponsiveness } from 'hooks/useMobileResponsiveness';
import { Item } from 'types/coins';
import { capitalizeFirstLetter } from 'utils/capitalizeFirst';

interface CoinGraphCardProps {
  item?: Item;
}

export const CoinGraphCard = ({ item }: CoinGraphCardProps) => {
  const { large: icon, id: coinName, symbol } = item;
  const { marketData } = useCryptoService({ coinName });
  const { isMobile } = useMobileResponsiveness();
  const CURRENT_USD_PRICE = marketData?.prices[marketData.prices.length - 1][1]
    .toString()
    .substring(0, 7);

  return (
    <GlassBox
      boxProps={{
        minH: 250,
        p: 5,
      }}>
      <Flex justifyContent="space-between">
        <CoinIcon src={icon} spacing={{ marginRight: 5 }} />
        <Flex marginRight="auto" flexDirection="column">
          <Text color={COLORS.accentBlue} fontSize={20}>
            {capitalizeFirstLetter(coinName)}
          </Text>
          <Text color="whiteAlpha.900" fontSize={isMobile ? 'larger' : '3xl'} as="b">
            USD {CURRENT_USD_PRICE}
          </Text>
        </Flex>
        <Text color={COLORS.ghostAccentBlue}>{symbol}</Text>
      </Flex>
      {marketData && <MarketGraph prices={marketData.prices} />}
    </GlassBox>
  );
};
