import React from "react";
import {connect} from "react-redux";

import {addNewPlayer} from "../../actions/gameActions";

import PlayerList from "./playerList";
import PlayerForm from "./playerForm";

const PlayerContainer = ({players, addNewPlayer}) => (
  <div>
    <br/>
    <h4>add new player</h4>
    <PlayerForm addNewPlayer={addNewPlayer}/>
    <br/>
    <h4>player list</h4>
    <PlayerList players={players}/>
  </div>
);

const mapDispatchToProps = dispatch => (
  {addNewPlayer: name => dispatch(addNewPlayer(name))}
);


const mapStateToProps = state => (
  {players: state.game.players}
);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
