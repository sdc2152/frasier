import React from "react";
import {connect} from "react-redux";

import {addNewPlayer} from "../../actions/gameActions";

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.updateName = this.updateName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {name: ""};
  }

  updateName(e) {
    e.preventDefault();
    this.setState({name: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNewPlayer(this.state.name);
    this.setState({name: ""});
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>

        <div className="form-group row">
          <label htmlFor="inputBody"
            className="col-sm-3 col-form-label">
            Name
          </label>
          <div className="col-sm-9">
            <input type="text" title="body" className="form-control"
              id="inputBody" value={this.state.name}
              onChange={this.updateName}>
            </input>
          </div>
        </div>
        <input
          className="btn btn-primary btn-lg"
          value="add player"
          type="submit"
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => (
  {addNewPlayer: name => dispatch(addNewPlayer(name))}
);

export default connect(null, mapDispatchToProps)(PlayerForm);
