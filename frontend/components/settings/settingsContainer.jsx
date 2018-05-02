import Settings from "./settings";
import {connect} from "react-redux";
import {receiveCategoryIdx} from "../../actions/settingsActions";

function mapStateToProps(state) {
  return {
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    receiveCategoryIdx: (categoryIdx) => {
      dispatch(receiveCategoryIdx(categoryIdx));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
