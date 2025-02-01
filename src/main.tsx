import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "./components/ui/toaster.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="343290736720-5k3tasv78lfku7mgll542q4ntnmag2dm.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    <Toaster />
  </StrictMode>
);
