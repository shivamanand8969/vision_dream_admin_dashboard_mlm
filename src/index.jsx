import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import ThemeProvider from "./theme";

import App from "./app";
import Loading from "./layouts/loading";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HelmetProvider>
    <ThemeProvider>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </BrowserRouter>
    </ThemeProvider>
  </HelmetProvider>
);
