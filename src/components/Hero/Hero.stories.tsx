import { Hero } from './Hero';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = args => <Hero {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  header: 'I am the Hero Header',
  children: 'I am the stuff passed through children',
};

export const HeaderWithButton = Template.bind({});
HeaderWithButton.args = {
  header: 'I am the Hero Header',
  children: 'I am the stuff passed through children',
  buttonTitle: 'Button Title',
  button: true,
};
