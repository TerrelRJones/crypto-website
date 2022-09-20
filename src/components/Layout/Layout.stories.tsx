import { Layout } from './Layout';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = args => <Layout {...args} />;
export const Primary = Template.bind({});
