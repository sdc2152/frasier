import React from "react";

import {connect} from "react-redux";

import PlayerListItem from "./playerListItem";
import {removePlayer} from "../../actions/gameActions";

const PlayerList = ({players, removePlayer}) => {
  const playersList = players.map((player, i) => (
    <PlayerListItem
      key={i} index={i} player={player} removePlayer={removePlayer}
    />
  ));
  return (
    <ul className="scroll-list container">
      {playersList}
    </ul>
  );
};

const mapStateToProps = state => (
  {
    players: state.game.players,
  }
);

const mapDispatchToProps = dispatch => (
  {
    removePlayer: index => dispatch(removePlayer(index)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
