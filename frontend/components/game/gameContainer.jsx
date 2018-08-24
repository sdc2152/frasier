import Game from "./game";
import {connect} from "react-redux";
import {
  receiveAnswer,
  addNewPlayer
} from "../../actions/gameActions";

const mapStateToProps = state => (
  {
    game: state.game
  }
);

const mapDispatchToProps = dispatch => (
  {
    receiveAnswer: answer => dispatch(receiveAnswer(answer)),
    addNewPlayer: name => dispatch(addNewPlayer(name))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Game);
