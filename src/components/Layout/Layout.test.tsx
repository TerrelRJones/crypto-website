import { Layout } from './Layout';
import { render } from '@testing-library/react';
import Home from 'pages/Home';

describe('Layout Component', () => {
  it('should render Layout', () => {
    render(
      <Layout>
        <Home />
      </Layout>,
    );
  });
});
