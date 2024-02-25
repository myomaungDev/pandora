import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoot } from "./Root";
import "./index.css";
import { AppAuthContextProvider } from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppAuthContextProvider>
      <AppRoot />
    </AppAuthContextProvider>
  </React.StrictMode>
);
