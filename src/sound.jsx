import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SoundScapes } from "./Components/SoundButtons.jsx";
import { Header } from "./Components/SoundHeader.jsx";
import { Time } from "./Components/Timer.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <SoundScapes />
    <Time />
  </React.StrictMode>
);
