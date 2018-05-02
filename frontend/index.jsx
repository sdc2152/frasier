import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import Root from "./components/root";
import configureStore from "./store/store";

const store = configureStore();
// TODO: remove this after testing
window.store = store;

render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById("react-root")
);
