import React, { Component } from "react"; 

const divStyle = {
  color: 'blue',
};

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed" style={divStyle}>
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <a href="https://www.santamariamd.com" target="blank" className="col s4 brand-logo center grey-text text-darken-1">
              <b>Dr. Santamaria's</b> Home
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
