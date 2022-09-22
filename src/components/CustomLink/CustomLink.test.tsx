import { CustomLink } from './CustomLink';
import { render } from '@testing-library/react';

describe('CustomLink Component', () => {
  it('should render CustomLink Component', () => {
    render(<CustomLink url="#">Link</CustomLink>);
  });
});
