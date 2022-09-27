import { Suspense } from 'react';
import { Flex, Spinner, Text } from '@chakra-ui/react';
import CoinIcon from 'components/CoinIcon';
import GlassBox from 'components/GlassBox';
import MarketGraph from 'components/MarketGraph';
import PercentChangeDisplay from 'components/PercentChangeDisplay';
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
  const { marketData, marketDataIsLoading } = useCryptoService({ coinName });
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
      {marketDataIsLoading ? (
        <Spinner
          thickness="6px"
          speed="0.65s"
          emptyColor={COLORS.secondaryGreen}
          color={COLORS.primaryBlue}
          size="xl"
        />
      ) : (
        <>
          <Flex justifyContent="space-between">
            <CoinIcon src={icon} spacing={{ marginRight: 5 }} />
            <Flex marginRight="auto" flexDirection="column">
              <Text color={COLORS.accentBlue} fontSize={20}>
                {capitalizeFirstLetter(coinName)}
              </Text>
              <Flex justifyContent="space-between">
                <Text
                  color="whiteAlpha.900"
                  fontSize={isMobile ? 'larger' : '3xl'}
                  as="b">
                  USD {CURRENT_USD_PRICE}
                </Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" alignItems="flex-end">
              <Text color={COLORS.ghostAccentBlue}>{symbol}</Text>
              {isMobile && (
                <PercentChangeDisplay
                  prices={marketData.prices}
                  fontSize={16}
                />
              )}
            </Flex>
          </Flex>
          <MarketGraph prices={marketData.prices} />
        </>
      )}
    </GlassBox>
  );
};
