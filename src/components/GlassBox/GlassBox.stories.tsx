import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlassBox from 'components/GlassBox';

export default {
  title: 'components/GlassBox',
  component: GlassBox,
} as ComponentMeta<typeof GlassBox>;

const Template: ComponentStory<typeof GlassBox> = args => (
  <GlassBox {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  boxProps: {
    minH: 200,
    minW: 300,
  },
};
