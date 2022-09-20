import { ComponentMeta, ComponentStory } from '@storybook/react';
import CoinIcon from 'components/CoinIcon';

export default {
  title: 'CoinIcon',
  component: CoinIcon,
} as ComponentMeta<typeof CoinIcon>;

const Template: ComponentStory<typeof CoinIcon> = args => (
  <CoinIcon {...args} />
);
export const Primary = Template.bind({});
