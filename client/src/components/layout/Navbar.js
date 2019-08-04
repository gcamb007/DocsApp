import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white" style={{height:"90px", letterSpacing:"1.5px", paddingTop:"1rem", backgroundColor:"black", boxShadow:("0, 0, 12px, 1px, grey")}}>
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
