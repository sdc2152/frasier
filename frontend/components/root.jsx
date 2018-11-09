import React, {lazy} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import NavBar from "./navBar.jsx";
import Game from "./game/game";
import Home from "./home";
import RandomQuestion from "./randomQuestion";
import QuestionForm from "./questionForm";
import QuestionList from "./questionList";

// TODO: remove before productions?
import {hot} from "react-hot-loader";

const root = () =>  {
  return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/questions/submit" component={QuestionForm}/>
            <Route path="/questions/list" component={QuestionList}/>
            <Route path="/questions" component={RandomQuestion}/>
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
  );
};

export default hot(module)(root);
