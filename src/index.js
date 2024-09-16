import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LyricsProvider } from "./services/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LyricsProvider>
    <App />
  </LyricsProvider>
);
