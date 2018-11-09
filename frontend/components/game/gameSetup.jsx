import React from "react";

import PlayerForm from "../player/playerForm";
import PlayerList from "../player/playerList";
import WinningPoints from "./winningPoints";

const GameSetup = ({winningPoints, receiveWinningPoints, startNewGame}) => (
  <div className="container">

    <div className="row text-center">
      <div className="col">
        <h1>Game</h1>
      </div>
    </div>

    <div className="row">

      <div className="col-md-6 col-sm-12">
        <h4>Instructions</h4>
        <p>
          The goal of the game is to be the first one to however many points.
          When it is your turn draw a card and try to guess the answer.
          Add some players and press start game to get started
        </p>
        <WinningPoints
          winningPoints={winningPoints}
          receiveWinningPoints={receiveWinningPoints}
        />
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
