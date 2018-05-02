import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer.js";

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    // TODO: check if this is working for reducers
    // TODO: there is a reducers error
    module.hot.accept("../reducers/rootReducer.js", () => {
      const nextRootReducer = require("../reducers/rootReducer.js");
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
