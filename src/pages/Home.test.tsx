import { render } from '@testing-library/react';
import Home from 'pages/Home';

describe('Home Component', () => {
  it('should render Home page', () => {
    render(<Home />);
  });
});
