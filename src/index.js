

// import ReactDOM from "react-dom";

import { HashRouter } from "react-router-dom";
const rootElement = document.getElementById('root');
import React, { Suspense } from "react";
import "./assets/scss/style.scss";
import Loader from "./layouts/loader/Loader";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
const rootElement = document.getElementById('root');
import React, { Suspense } from "react";
import App from "./App";
import {createRoot} from 'react-dom/client';
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
