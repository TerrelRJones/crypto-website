import { TestProvider } from '../src/test/test-helpers';
import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize({
  onUnhandledRequest: 'warn',
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'crypto',
    values: [
      {
        name: 'crypto',
        value: '#0E1225',
      },
    ],
  },
};

const withProviders = (Story, context) => {
  return (
    <TestProvider>
      <Story {...context} />
    </TestProvider>
  );
};

export const decorators = [mswDecorator, withProviders];
