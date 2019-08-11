import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

class Records extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {

    return (
      <div>

        <div style={{ height: "50vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">
              <h4>
               <b>Patient</b> Records
                <p className="flow-text grey-text text-darken-1">
                    View your records, prescriptions, and download your exams results
                </p>
              </h4>
              <Link to="/dashboard" className="btn-flat waves-effect">
               <i className="material-icons left">keyboard_backspace</i> Back to portal's home
             </Link>
            </div>
          </div>
        </div>

        <div className="container valign-wrapper">
          <div className="row landing-copy col s12 center-align">

          <Link to="/forms" style={{margin: "1rem", width: "240px"}}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3">
              <i className="material-icons right">fingerprint</i>Forms
          </Link>

            <button style={{margin: "1rem", width: "240px"}}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3">
              <i className="material-icons right">fingerprint</i>Exams Results
              {/* <a href="#" target="blank" className="center white-text">Exams Results</a> */}
            </button>

            <button style={{margin: "1rem", width: "240px"}}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3">
              <i className="material-icons right">fingerprint</i>Imaging
              {/* <a href="#" target="blank" className="center white-text">Imaging</a> */}
            </button>

            <button style={{margin: "1rem", width: "240px"}}
              className="btn btn-large waves-effect waves-light hoverable green accent-3">
              <i className="material-icons right">fingerprint</i>Prescriptions
              {/* <a href="#"target="blank" className="center white-text">Prescriptions</a> */}
            </button>

          </div>
        </div>

    </div>
    );
  }
}

Records.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Records);