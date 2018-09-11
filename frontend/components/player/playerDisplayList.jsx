import React from "react";
import {connect} from "react-redux";

import PlayerDisplayListItem from "./playerDisplayListItem";
import {getCurrentPlayer, getPlayers} from "../../reducers/selectors";

const PlayerDisplayList = ({players}) => {
  const playersList = players.map((player, i) => (
    <PlayerDisplayListItem key={i} player={player} />
  ));
  return (
    <div>
      <ul className="container">
        {playersList}
      </ul>
  </div>
  );
};

const mapStateToProps = state => (
  {
    players: getPlayers(state),
    currentPlayer: getCurrentPlayer(state),
  }
);

export default connect(mapStateToProps)(PlayerDisplayList);
