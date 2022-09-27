import { mockMarketPrices } from 'mocks/prices';
import { rest } from 'msw';
import { EndPoints } from 'types/endpoints';

export const marketHandler = [
  rest.get(
    `${process.env.REACT_APP_CRYPTO_API_URL}/coins/sweatcoin/${EndPoints.MARKET_CHART}`,
    (req, res, ctx) => {
      return res(ctx.json({ mockMarketPrices }));
    },
  ),
];
