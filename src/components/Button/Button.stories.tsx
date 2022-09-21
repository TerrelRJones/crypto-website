import { Button, ButtonType } from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: 'Primary',
  buttonType: ButtonType.PRIMARY,
};
export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  children: 'Secondary',
  buttonType: ButtonType.SECONDARY,
};
