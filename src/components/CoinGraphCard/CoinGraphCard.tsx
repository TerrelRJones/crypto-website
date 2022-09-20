import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import CoinIcon from 'components/CoinIcon';
import GlassBox from 'components/GlassBox';
import { COLORS } from 'const/colors';
import { Item } from 'types/coins';

interface CoinGraphCardProps {
  item?: Item;
}

export const CoinGraphCard = ({ item }: CoinGraphCardProps) => {
  const { large: icon, id: coinName, symbol, price_btc } = item;

  // Graph fetch with points with coin name/id arg
  // fetch f/% Increase || decrease

  return (
    <GlassBox
      boxProps={{
        minH: 250,
        maxW: 400,
        p: 5,
      }}>
      <Flex justifyContent="space-between">
        <CoinIcon src={icon} spacing={{ marginRight: 5 }} />
        <Flex marginRight="auto" flexDirection="column">
          <Text color={COLORS.accentBlue}>{coinName}</Text>
          <Text color="whiteAlpha.900" fontSize="3xl" as="b">
            USD {price_btc}
          </Text>
        </Flex>
        <Text color={COLORS.ghostAccentBlue}>{symbol}</Text>
      </Flex>
    </GlassBox>
  );
};
