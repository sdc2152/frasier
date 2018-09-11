import React from "react";
import {Link} from "react-router-dom";

const Home = () => (
  <div className="container">

    <div
      className="row text-center bg-light my-3">
      <div className="col-md-5 p-5 mx-auto">
        <h1 className="display-4 font-weight-normal">
          Frasier Trivia
        </h1>
        <p className="lead font-weight-normal">
          Put you and your friends knowledge of Faiser to the test.
        </p>
        <Link to="/game" className="btn btn-outline-secondary">
          start a new game now
        </Link>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 pl-0 pr-md-2 pr-sm-0 text-center overflow-hidden">
        <div className="bg-light p-5">
          <h2 className="display-5">Random Questions</h2>
          <p className="lead">
            Don't want to play a game? answer random questions instead.
            Answer random questions instead.
          </p>
          <Link to="/questions" className="btn btn-outline-secondary">
            go to random questions
          </Link>
        </div>
      </div>

      <div className="col-md-6 pr-0 pl-md-2 pl-sm-0 mt-sm-3 mt-md-0 text-center overflow-hidden">
        <div className="bg-light p-5">
          <div className="">
            <h2 className="display-5">Question List</h2>
            <p className="lead">
              If you would like to review all the questions, check out a
              full listing here.
            </p>
            <Link to="/questions/list" className="btn btn-outline-secondary">
              go to question list
            </Link>
            </div>
        </div>
      </div>
    </div>

    <div
      className="row text-center bg-light my-3">
      <div className="col-md-5 p-5 mx-auto">
        <h2 className="display-5">
          Subimt Questions
        </h2>
        <p className="lead font-weight-normal">
          Is there a question that you would like included in the Question database? Submit a question for review here.
        </p>
        <Link to="/questions/submit" className="btn btn-outline-secondary">
          submit a question
        </Link>
      </div>
    </div>

  </div>
);

export default Home;
