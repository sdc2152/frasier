import React from "react";
import {NavLink} from "react-router-dom";

import {
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
} from "reactstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarToggler color="faded" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/questions">Questions</NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
