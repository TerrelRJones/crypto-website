<<<<<<< HEAD
import App from 'components/App';
import { createRoot } from 'react-dom/client';
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "components/App";
import Home from "pages/Home";
import { createRoot } from "react-dom/client";
>>>>>>> main

const container = document.getElementById('root');
const root = createRoot(container);

const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <App>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </App>
      </BrowserRouter>
    </div>
  );
};

root.render(<Root />);
