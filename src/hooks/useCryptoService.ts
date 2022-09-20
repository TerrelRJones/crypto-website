import { useQuery } from 'react-query';
import { client } from 'services/cryptoApi';
import { MarketResponse, TrendingResponse } from 'types/coins';
import { EndPoints } from 'types/endpoints';

interface UseCryptoServiceProps {
  coinName?: string;
}

export const useCryptoService = ({ coinName }: UseCryptoServiceProps = {}) => {
  const { data: trendingData } = useQuery<TrendingResponse, Error>(
    'trending',
    async () => await client({ endpoint: EndPoints.TRENDING }),
  );

  const { data: marketData } = useQuery<MarketResponse, Error>(
    ['market', coinName],
    async () =>
      await client({
        endpoint: `coins/${coinName}/${EndPoints.MARKET_CHART}`,
      }),
  );

  return {
    trendingData,
    marketData,
  };
};
