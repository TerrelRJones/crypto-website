import Sum from './sum';
import { describe, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

describe('sum module', () => {
  test('render Sum component', () => {
    render(<Sum />);

    screen.debug();
  });
});
