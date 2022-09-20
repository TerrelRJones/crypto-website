import { CustomLink } from './CustomLink';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/CustomLink',
  component: CustomLink,
} as ComponentMeta<typeof CustomLink>;

const Template: ComponentStory<typeof CustomLink> = args => (
  <CustomLink {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  children: 'Press Me',
  url: '#',
};
