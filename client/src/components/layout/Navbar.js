import React, { Component } from "react"; 

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <a href="https://www.santamariamd.com/patient-resources" style={{fontFamily: "monospace"}} className="col s5 brand-logo center black-text">
              HOME
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
