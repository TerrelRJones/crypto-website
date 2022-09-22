export interface TrendingResponse {
  coins: Coin[];
  exchanges: any[];
}

export interface MarketResponse {
  prices: [number, number][];
  market_caps: number[][];
  total_volumes: number[][];
}

export type PriceResponse = MarketResponse['prices'];

export interface Coin {
  item: Item;
}

export interface Item {
  id: string; //"sweatcoin"
  coin_id: number; //25057
  name: string; //"Sweatcoin - Sweat Economy"
  symbol: string; //"SWEAT"
  market_cap_rank: number;
  thumb: string; //"https://assets.coingecko.com/coins/images/25057/thumb/fhD9Xs16_400x400.jpg?1649947000"
  small: string; //"https://assets.coingecko.com/coins/images/25057/small/fhD9Xs16_400x400.jpg?1649947000"
  large: string; //"https://assets.coingecko.com/coins/images/25057/large/fhD9Xs16_400x400.jpg?1649947000"
  slug: string; //"sweat-economy"
  price_btc: number; //0.0000027574469738304054
  score: number; //0
}
