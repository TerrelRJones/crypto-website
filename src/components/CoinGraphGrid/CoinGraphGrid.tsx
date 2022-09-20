import { Box } from '@chakra-ui/react';
import CoinGraphCard from 'components/CoinGraphCard';
import { Coin, TrendingResponse } from 'types/coins';

interface CoinGraphGridProps {
  data: TrendingResponse;
}

export const CoinGraphGrid = ({ data }: CoinGraphGridProps) => {
  return (
    <Box>
      {data?.coins.map((coin: Coin, index) => (
        <CoinGraphCard {...coin} key={index} />
      ))}
    </Box>
  );
};
