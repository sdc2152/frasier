import React from "react";
import {Link} from "react-router-dom";

const Home = () => (
  <div className="container text-light">

    <div className="row text-center bg-light frasier-pano my-3">
      <div className="col-md-5 p-5 mx-auto">
        <h1 className="display-4 font-weight-bold">
          Frasier Trivia
        </h1>
        <p className="lead font-weight-normal">
          Put you and your friends knowledge of Fraiser to the test.
        </p>
        <Link to="/game" className="btn btn-outline-light">
          start a new game now
        </Link>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 px-0 pr-md-2 pr-sm-0 text-center overflow-hidden">
        <div className="bg-light p-5 frasier-apartment full-height">
          <h2 className="display-4 font-weight-bold">
            Questions
          </h2>
          <p className="lead">
            Don't want to play a full game? Quiz yourself with random
            questions.
          </p>
          <Link to="/questions" className="btn btn-outline-light">
            go to random questions
          </Link>
        </div>
      </div>

      <div className="col-md-6 px-0 pl-md-2 mt-3 mt-md-0 text-center overflow-hidden">
        <div className="bg-light p-5 frasier-niles-coffee full-height">
          <div className="">
            <h2 className="display-4 font-weight-bold">
              List
            </h2>
            <p className="lead">
              If you would like to review all the questions, check out a
              full listing here.
            </p>
            <Link to="/questions/list" className="btn btn-outline-light">
              go to question list
            </Link>
            </div>
        </div>
      </div>
    </div>

    <div
      className="row text-center bg-light my-3 frasier-booth">
      <div className="col-md-5 p-5 mx-auto">
        <h2 className="display-4 font-weight-bold">
          Submit Questions
        </h2>
        <p className="lead font-weight-normal">
          Is there a question that you would like included in the question database? Submit a question for review here.
        </p>
        <Link to="/questions/submit" className="btn btn-outline-light">
          submit a question
        </Link>
      </div>
    </div>

  </div>
);

export default Home;
