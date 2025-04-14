import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/plugins/i18n.ts";
import { setupGlobalErrorHandlers } from "@/utils/errorHandler";
import ErrorBoundary from "@/components/ErrorBoundary";

// Initialize global error handlers
setupGlobalErrorHandlers();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
