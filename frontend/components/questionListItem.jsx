import React from "react";
import {DIFFICULTIES} from "../actions/settingsActions";

class QuestionListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false
    };
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  render() {
    const {collapse} = this.state;
    const {difficulty, body, answer} = this.props.question;
    return (
      <div className="container">
        <div className="row">
          <div className="col">{body}</div>
          <div className={`col ${DIFFICULTIES[difficulty]}`}>
            {DIFFICULTIES[difficulty]}
          </div>

            <div className="col">
              <button type="button" className="btn btn-primary btn-sm"
                onClick={this.toggle}>
                Show Answer
              </button>
            </div>
        </div>

        <div className="row">
          <div className={collapse ? "show" : "collapse"}>
            <div className="card card-body">
              <p className="card-text">{answer}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionListItem;
