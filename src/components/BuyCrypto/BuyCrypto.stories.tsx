import { ComponentMeta, ComponentStory } from '@storybook/react';
import BuyCrypto from 'components/BuyCrypto';

export default {
  title: 'components/BuyCrypto',
  component: BuyCrypto,
} as ComponentMeta<typeof BuyCrypto>;

const Template: ComponentStory<typeof BuyCrypto> = args => (
  <BuyCrypto {...args} />
);
export const Primary = Template.bind({});
