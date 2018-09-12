import React from "react";

import PlayerForm from "../player/playerForm";
import PlayerList from "../player/playerList";

const GameSetup = ({startNewGame}) => (
  <div className="container">

    <div className="row text-center">
      <div className="col">
        <h1>Game</h1>
      </div>
    </div>

    <div className="row">

      <div className="col">
      </div>

      <div className="col">
        <div className="border scroll-list scroll-list-sm">
          <PlayerList />
        </div>
        <PlayerForm />
        <button
          className="btn btn-secondary btn-lg btn-block mt-1"
          onClick={startNewGame}>
          start game
        </button>
      </div>

    </div>
  </div>
);

export default GameSetup;
