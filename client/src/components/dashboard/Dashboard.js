import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>

        <div style={{ height: "50vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                  You are logged into Dr. Santamaria's Patient Portal
                </p>
              </h4>
              <button style={{width: "150px", borderRadius: "3px", letterSpacing: "1.5px"}} 
                onClick={this.onLogoutClick}
                className="btn btn-large btn-flat waves-effect white black-text">
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="container valign-wrapper">
          <div className="row landing-copy col s12 center-align">
            <button style={{margin: "1rem", width: "240px"}}
              // onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable red accent-3">
              <i className="material-icons right">folder_open</i>Patient Forms
            </button>
            <button style={{margin: "1rem", width: "240px"}} 
              // onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3">
              <i className="material-icons right">fingerprint</i>Patient Records
            </button>
            <button style={{margin: "1rem", width: "240px"}} 
              // onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable green accent-3">
              <i className="material-icons right">airplay</i><a href="https://santamariamd.securevideo.com/Book" target="blank" className="center white-text">Telemedicine</a>
            </button>
          </div>
        </div>

    </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
