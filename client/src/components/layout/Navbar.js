import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper black landing-copy col s6 center-align">
            <a href="https://www.santamariamd.com" target="blank" className="col s6 flow-text brand-logo center white-text" style={{ fontSize: "2vw" }}>
              <b>Dr. Santamaria's</b> Home
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
