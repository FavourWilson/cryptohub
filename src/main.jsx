import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";

import { Provider } from "react-redux";
import { store, queryClient } from "./store";

import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
      </Router>
    </QueryClientProvider>
  </Provider>
  // </React.StrictMode>
);
