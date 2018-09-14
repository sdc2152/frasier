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
    e.preventDefault();
    this.props.receiveCategoryIdx(Number(e.target.value));
  }

  handleDifficultyChange(e) {
    e.preventDefault();
    this.props.receiveDifficultyIdx(Number(e.target.value));
  }

  componentWillUnmount() {
    this.props.setDefaultSettings();
  }

  render() {
    const {
      categoryIdx, categories,
      difficulties, difficultyIdx
    } = this.props.settings;

    const categoryList = categories.map((c, i) => (
      <option value={i} key={i}>{c}</option>
    ));

    const difficultyList = difficulties.map((c, i) => (
      <option value={i} key={i}>{c}</option>
    ));

    return (
      <div className="row">
        <div className="col col-lg-6 col-xs-12 input-group mb-3">
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

        <div className="col col-lg-6 col-xs-12 input-group mb-3">
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
