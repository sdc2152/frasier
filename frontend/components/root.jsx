import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import NavBar from "./navBar.jsx";
import Home from "./home.jsx";
import RandomQuestion from "./randomQuestion";

// TODO: remove before productions?
import {hot} from "react-hot-loader";

const root = () =>  {
  return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/questions" component={RandomQuestion}/>
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
  );
};

export default hot(module)(root);
