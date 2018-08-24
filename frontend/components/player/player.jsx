import React from "react";
import {connect} from "react-redux";
import {addNewPlayer} from "../../actions/gameActions";
import {getCurrentPlayer} from "../../reducers/selectors";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewPlayer = this.handleNewPlayer.bind(this);
  }

  handleNewPlayer(e) {
    e.preventDefault();
    this.props.addNewPlayer("player");
  }

  render() {
    const {players} = this.props;
    const playersList = players.map((c, i) => (
      <li value={i} key={i}>name: {c.name}, points: {c.points}</li>
    ));
    return (
      <div>
        <h1>Player</h1>
        <button onClick={this.handleNewPlayer}>add new player</button>
        <ul>
          {playersList}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {players: state.game.players}
);

const mapDispatchToProps = dispatch => (
  {
    addNewPlayer: name => {
      console.log(name);
      dispatch(addNewPlayer(name));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Player);
