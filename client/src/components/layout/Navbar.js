import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper black landing-copy col s12 center-align">
            <a href="https://www.santamariamd.com" target="blank" className="col s12 flow-text brand-logo center white-text text-darken-1" style={{ textSize: "14px" }}>
              <b>Dr. Santamaria's</b> Home
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
