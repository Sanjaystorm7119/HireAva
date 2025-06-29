import { StrictMode } from "react";
import { createRoot, ReactDom } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { AppContext, AppContextProvider } from "./context/AppContext.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

// const PUBLISHABLE_KEY = meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </ClerkProvider>
  // </StrictMode>
);
