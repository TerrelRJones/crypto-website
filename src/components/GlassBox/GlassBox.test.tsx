import { render, screen } from '@testing-library/react';
import GlassBox from 'components/GlassBox';

describe('GlassBox', () => {
  it('should render GlassBox', () => {
    render(<GlassBox />);
    screen.debug();
  });
});
