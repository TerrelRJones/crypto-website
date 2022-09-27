import { ComponentMeta, ComponentStory } from '@storybook/react';
import CoinGraphCard from 'components/CoinGraphCard';
import { marketHandler } from 'test/server-handlers';
import { TestProvider } from 'test/test-helpers';

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
    price_btc: 0.0027,
  },
};
MockedSuccess.parameters = {
  msw: {
    handlers: marketHandler,
  },
};
