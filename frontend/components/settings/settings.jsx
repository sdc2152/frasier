import React from "react";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleCategoryChange(e) {
    this.props.receiveCategoryIdx(e.target.value);
  }

  handleDifficultyChange(e) {
    this.props.receiveDifficultyIdx(e.target.value);
  }

  render() {
    const {categoryIdx, categories, difficulties, difficultyIdx} = this.props.settings;
    const categoryList = categories.map((c, i) => (
      <option value={i} key={i}>{c}</option>
    ));
    const difficultyList = difficulties.map((c, i) => (
      <option value={i} key={i}>{c}</option>
    ));
    return (
      <div>
        <br/>
        <h3>Settings</h3>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text">
              Category
            </label>
          </div>
          <select
            className="custom-select" id="inputGroupSelect01"
            onChange={this.handleCategoryChange}
            defaultValue={categoryIdx}>
            {categoryList}
          </select>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text">
              Difficulty
            </label>
          </div>
          <select
            className="custom-select" id="inputGroupSelect01"
            onChange={this.handleDifficultyChange}
            defaultValue={difficultyIdx}>
            {difficultyList}
          </select>
        </div>
      </div>
    );
  }
}

export default Settings;
