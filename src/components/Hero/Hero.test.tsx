import { Hero } from './Hero';
import { render } from '@testing-library/react';

describe('Hero Component', () => {
  it('should render Hero', () => {
    render(<Hero header="test" children="test" />);
  });
});
