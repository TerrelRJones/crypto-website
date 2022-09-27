import { useQuery } from 'react-query';
import { client } from 'services/cryptoApi';
import { MarketResponse, TrendingResponse } from 'types/coins';
import { EndPoints } from 'types/endpoints';

interface UseCryptoServiceOpts {
  coinName?: string;
}

export const useCryptoService = ({ coinName }: UseCryptoServiceOpts = {}) => {
  const { data: trendingData } = useQuery<TrendingResponse, Error>(
    'trending',
    async () => await client({ endpoint: EndPoints.TRENDING }),
  );

  const { data: marketData, isLoading: marketDataIsLoading } = useQuery<
    MarketResponse,
    Error
  >(
    coinName && ['market', coinName],
    async () =>
      await client({
        endpoint: `coins/${coinName}/${EndPoints.MARKET_CHART}`,
      }),
  );

  return {
    trendingData,
    marketData,
    marketDataIsLoading,
  };
};
