import App from 'components/App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

const Root = () => {
  return (
    <div>
      <App>hot reload</App>
    </div>
  );
};

root.render(<Root />);
