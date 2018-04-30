import {createStore} from "redux";
import rootReducer from "../reducers/rootReducer.js";

export default function configureStore(preloadedState) {
  const store = createStore( rootReducer, preloadedState);
   if (module.hot) {
    // Enable Webpack hot module replacement for reducers
     module.hot.accept("../reducers/rootReducer.js", () => {
      const nextRootReducer = require("../reducers/rootReducer.js");
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
