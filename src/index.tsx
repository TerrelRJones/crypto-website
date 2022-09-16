import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "components/App";
import Home from "pages/Home";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
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
