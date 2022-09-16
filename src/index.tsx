import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "components/App";
import Home from "./pages/Home";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

const Root = () => {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
};

root.render(<Root />);
