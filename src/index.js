

// import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import "./assets/scss/style.scss";
import Loader from "./layouts/loader/Loader";
import React, { Suspense } from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Suspense fallback={<Loader />}>
    <HashRouter>
      <App />
    </HashRouter>
  </Suspense>,

  // document.getElementById("root")
);

reportWebVitals();
