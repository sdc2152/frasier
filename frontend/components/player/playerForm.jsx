import React from "react";

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
        <input value="add player" type="submit"/>
      </form>
    );
  }
}

export default PlayerForm;
