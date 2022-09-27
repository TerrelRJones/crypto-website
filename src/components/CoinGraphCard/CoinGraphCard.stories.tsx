import { ComponentMeta, ComponentStory } from '@storybook/react';
import CoinGraphCard from 'components/CoinGraphCard';
import { mockMarketPrices } from 'mocks/prices';
import { rest } from 'msw';
import { loadingHandler, marketHandler } from 'test/server-handlers';
import { TestProvider } from 'test/test-helpers';
import { EndPoints } from 'types/endpoints';

export default {
  title: 'components/CoinGraphCard',
  component: CoinGraphCard,
} as ComponentMeta<typeof CoinGraphCard>;

const Template: ComponentStory<typeof CoinGraphCard> = args => (
  <TestProvider>
    <CoinGraphCard {...args} />
  </TestProvider>
);

export const MockedSuccess = Template.bind({});
MockedSuccess.args = {
  item: {
    large:
      'https://assets.coingecko.com/coins/images/25057/large/fhD9Xs16_400x400.jpg?1649947000',
    id: 'sweatcoin',
    symbol: 'SWEAT',
  },
};
MockedSuccess.parameters = {
  msw: {
    handlers: marketHandler,
  },
};

export const MockedLoading = Template.bind({});
MockedLoading.args = {
  item: {
    large:
      'https://assets.coingecko.com/coins/images/25057/large/fhD9Xs16_400x400.jpg?1649947000',
    id: 'Cosmos',
    symbol: 'ATOM',
  },
};
MockedLoading.parameters = {
  msw: {
    handlers: loadingHandler,
  },
};
