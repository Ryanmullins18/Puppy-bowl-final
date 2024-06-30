import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import "./index.css"
import  store  from "./store.js";
import { Provider } from "react-redux";
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Players from "./components/Players.jsx";
import SinglePlayer from "./components/SinglePlayer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,

);
