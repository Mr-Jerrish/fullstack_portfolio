import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "../src/app/providers/ThemeProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BrowserRouter>
      <Toaster richColors position="top-right" />
      <App />
    </BrowserRouter>
  </ThemeProvider>,
);
