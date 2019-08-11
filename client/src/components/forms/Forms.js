import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

class Forms extends Component {
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
                <b>New Patient</b> Forms
                <p className="flow-text grey-text text-darken-1">
                  Download, fillout, and bring with you all the required forms for new patients
                </p>
              </h4>
              <div>
                <Link to="/dashboard" className="btn-flat waves-effect">
                  <i className="material-icons left">arrow_back</i> Portal's home
                </Link>
              </div>
              <div>
                <Link to="/archives" className="btn-flat waves-effect">
                Patient Records <i className="material-icons right">arrow_forward</i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container valign-wrapper">
          <div className="row landing-copy col s12 center-align">

            <a href="https://docs.wixstatic.com/ugd/555fd5_792e94f4253047f9a5b7b43907344400.pdf" target="blank"
            className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{margin: "1rem", width: "240px"}}>
              <i className="material-icons right">folder_open</i>Seizure
            </a>

            <a href="https://docs.wixstatic.com/ugd/555fd5_405099e765c04c41b7c8e1ff76ce54c2.pdf" target="blank"
            className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{margin: "1rem", width: "240px"}}>
              <i className="material-icons right">folder_open</i>Sleep
            </a>

            <a href="https://docs.wixstatic.com/ugd/555fd5_cdad11840b01470aa9c3c08688924219.pdf" target="blank"
            className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{margin: "1rem", width: "240px"}}>
              <i className="material-icons right">folder_open</i>Headache
            </a>

            <a href="https://docs.wixstatic.com/ugd/555fd5_18c0199fcf4e4f2f83fcfa4da30165cb.pdf"target="blank"
            className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{margin: "1rem", width: "240px"}}>
              <i className="material-icons right">folder_open</i>Medical Release
            </a>

            <a href="https://docs.wixstatic.com/ugd/555fd5_4b7029a9379f4cb38dbb8d052e700d53.pdf" target="blank"
            className="btn btn-large waves-effect waves-light hoverable red accent-3" style={{margin: "1rem", width: "240px"}}>
              <i className="material-icons right">folder_open</i>Other
            </a>

          </div>
        </div>
    </div>
    );
  }
}

Forms.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Forms);