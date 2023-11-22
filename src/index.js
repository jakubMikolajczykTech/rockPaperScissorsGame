import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles.scss";

const mountNode = document.getElementById('app');
const root = createRoot(mountNode)

root.render(
  <Router>
    <App />
  </Router>
);
