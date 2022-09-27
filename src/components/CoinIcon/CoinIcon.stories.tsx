import { ComponentMeta, ComponentStory } from '@storybook/react';
import CoinIcon from 'components/CoinIcon';

export default {
  title: 'components/CoinIcon',
  component: CoinIcon,
} as ComponentMeta<typeof CoinIcon>;

const Template: ComponentStory<typeof CoinIcon> = args => (
  <CoinIcon {...args} />
);
export const Primary = Template.bind({});
