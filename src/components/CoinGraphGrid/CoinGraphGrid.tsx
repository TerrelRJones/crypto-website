import { Grid } from '@chakra-ui/react';
import CoinGraphCard from 'components/CoinGraphCard';
import { useMobileResponsiveness } from 'hooks/useMobileResponsiveness';
import { Coin, TrendingResponse } from 'types/coins';

interface CoinGraphGridProps {
  data: TrendingResponse;
}

export const CoinGraphGrid = ({ data }: CoinGraphGridProps) => {
  const { isTablet } = useMobileResponsiveness();

  return (
    <Grid
      w="100%"
      templateColumns={isTablet ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)'}
      templateRows={isTablet ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)'}
      gap={isTablet ? 3 : 1}>
      {data?.coins.map((coin: Coin, index) => (
        <CoinGraphCard {...coin} key={index} />
      ))}
    </Grid>
  );
};
