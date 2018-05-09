import Settings from "./settings";
import {connect} from "react-redux";
import {
  receiveCategoryIdx,
  receiveDifficultyIdx,
} from "../../actions/settingsActions";

const mapStateToProps = state => (
  {
    settings: state.settings
  }
);

const mapDispatchToProps = dispatch => (
  {
    receiveCategoryIdx: categoryIdx => {
      dispatch(receiveCategoryIdx(categoryIdx));
    },
    receiveDifficultyIdx: difficultyIdx => {
      dispatch(receiveDifficultyIdx(difficultyIdx));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
