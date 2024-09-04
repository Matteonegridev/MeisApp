import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainPage } from "./Components/Page.jsx";
import { Footer } from "./Components/Footer.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainPage />
    <Footer />
  </React.StrictMode>
);
