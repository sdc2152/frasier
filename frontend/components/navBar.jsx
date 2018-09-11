import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => (
  <div className="mt-3">
    <div className="container">
      <div className="row justify-content-center">
        <NavLink
          exact={true} 
          className="col-3 nav-item sm-img bg-skyline" to="/"/>
      </div>
    </div>

    <div className="nav justify-content-center my-2">
      <div className="nav-item">
        <NavLink className="nav-link" to="/game">
          Game
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink exact={true} className="nav-link" to="/questions">
          Questions
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="nav-link" to="/questions/list">
          Questions List
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="nav-link" to="/questions/submit">
          Submit Question
        </NavLink>
      </div>
    </div>
  </div>
);

export default NavBar;
