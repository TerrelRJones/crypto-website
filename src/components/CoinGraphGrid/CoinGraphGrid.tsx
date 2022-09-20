import { Center, Flex, Grid } from '@chakra-ui/react';
import CoinGraphCard from 'components/CoinGraphCard';
import { Coin, TrendingResponse } from 'types/coins';

interface CoinGraphGridProps {
  data: TrendingResponse;
}

export const CoinGraphGrid = ({ data }: CoinGraphGridProps) => {
  return (
    <Center>
      <Grid
        w="100%"
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap={1}>
        {data?.coins.map((coin: Coin, index) => (
          <CoinGraphCard {...coin} key={index} />
        ))}
      </Grid>
    </Center>
  );
};
