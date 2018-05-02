import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";


class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleSelectChange(e) {
    this.props.receiveCategoryIdx(e.target.value);
  }

  render() {
    const {categoryIdx, categories} = this.props.settings;
    const categoryList = categories.map((c, i) => {
      return (
        <option value={i} key={i}>{c}</option>
      );
    });
    return (
      <div>
        <select className="custom-select" onChange={this.handleSelectChange}>
          {categoryList}
        </select>
      </div>
    );
  }
}

export default Settings;
