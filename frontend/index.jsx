import "bootstrap/dist/css/bootstrap.css";

import "./static/main.css";

import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import Modal from "react-modal";

import Root from "./components/root";
import configureStore from "./store/store";

const store = configureStore();
// TODO: remove this after testing
window.store = store;

Modal.setAppElement("#react-root");

render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById("react-root")
);
