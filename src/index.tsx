import React from "react";
import ReactDOM from "react-dom/client";
import AngularInjectorProvider from "./config/AngularInjector";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <AngularInjectorProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AngularInjectorProvider>
  </React.StrictMode>
);
