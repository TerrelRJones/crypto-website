import { Footer } from './Footer';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;
export const Primary = Template.bind({});
