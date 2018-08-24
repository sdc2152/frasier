import Settings from "./settings";
import {connect} from "react-redux";
import {
  receiveCategoryIdx,
  receiveDifficultyIdx,
  setDefaultSettings,

} from "../../actions/settingsActions";

const mapStateToProps = state => (
  {
    settings: state.settings
  }
);

const mapDispatchToProps = dispatch => (
  {
    receiveCategoryIdx: categoryIdx => (
      dispatch(receiveCategoryIdx(categoryIdx))
    ),
    receiveDifficultyIdx: difficultyIdx => (
      dispatch(receiveDifficultyIdx(difficultyIdx))
    ),
    setDefaultSettings: () => dispatch(setDefaultSettings()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
