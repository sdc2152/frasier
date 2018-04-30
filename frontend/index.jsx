import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";


import Root from "./components/root";
import configureStore from "./store/store";


//TODO: remove these after testing
const initialState = {
  question: {
    category: "Niles",
    body: "test",
    answer: "test"
  }
};

//TODO: change intialstate
const store = configureStore(initialState);
//TODO: remove these after testing
window.store = store;

render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById("react-root")
);
