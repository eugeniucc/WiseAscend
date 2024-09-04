import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../css/min_css/style.min.css";

// Components
import Example from "./components/Example.jsx";
import SwiperExample from "./components/SwiperExample.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Example />
    <SwiperExample />
  </StrictMode>
);
