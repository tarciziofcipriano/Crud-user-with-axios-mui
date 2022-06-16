import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline } from "@mui/material";

import App from "./App";
import { ToastProvider } from "./contexts/ToastContext";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ToastProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
