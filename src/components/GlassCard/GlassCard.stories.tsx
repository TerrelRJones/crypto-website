import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlassCard from 'components/GlassCard/';

export default {
  title: 'GlassCard',
  component: GlassCard,
} as ComponentMeta<typeof GlassCard>;

const Template: ComponentStory<typeof GlassCard> = args => (
  <GlassCard {...args} />
);
export const Primary = Template.bind({});
