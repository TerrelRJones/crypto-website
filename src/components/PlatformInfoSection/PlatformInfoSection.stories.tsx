import { PlatformInfoSection } from './PlatformInfoSection';
import { Box } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/PlatformInfoSection',
  component: PlatformInfoSection,
} as ComponentMeta<typeof PlatformInfoSection>;

const Template: ComponentStory<typeof PlatformInfoSection> = args => (
  <Box margin="0 auto" maxW={1400}>
    <PlatformInfoSection {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {};
