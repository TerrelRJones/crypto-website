import { useQuery } from 'react-query';
import { client } from 'services/cryptoApi';
import { TrendingResponse } from 'types/coins';
import { EndPoints } from 'types/endpoints';

export const useCryptoService = () => {
  const { data: trendingData } = useQuery<TrendingResponse, Error>(
    'trending',
    async () => await client({ endpoint: EndPoints.TRENDING }),
  );

  return {
    trendingData,
  };
};
