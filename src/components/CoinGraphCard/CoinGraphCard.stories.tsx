import { ComponentMeta, ComponentStory } from '@storybook/react';
import CoinGraphCard from 'components/CoinGraphCard';

export default {
  title: 'CoinGraphCard',
  component: CoinGraphCard,
} as ComponentMeta<typeof CoinGraphCard>;

const Template: ComponentStory<typeof CoinGraphCard> = args => (
  <CoinGraphCard {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  item: {
    large:
      'https://assets.coingecko.com/coins/images/25057/large/fhD9Xs16_400x400.jpg?1649947000',
    id: 'Sweetcoin',
    symbol: 'SWEAT',
  },
};
