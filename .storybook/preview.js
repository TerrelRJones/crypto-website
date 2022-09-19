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
