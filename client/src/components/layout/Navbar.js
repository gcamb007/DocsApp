import React, { Component } from "react";
import {BoxShadow} from 'react-native-shadow'

const shadowOpt = {
  width:100,
  height:100,
  color:"#000",
  border:2,
  radius:3,
  opacity:0.2,
  x:0,
  y:3,
  style:{marginVertical:5}
}

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed" setting={shadowOpt}>
        <nav className="z-depth-0" style={{width:100,height:100}}>
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
