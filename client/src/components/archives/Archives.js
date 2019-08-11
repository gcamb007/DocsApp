import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Archives extends Component {

  constructor(props) {
    super(props)
    this.state = {
      records: []
    };
  }

  componentDidMount() {
    axios.get("/api/records")
      .then(res => {
        this.setState({ records: res.data });
        console.log(this.state.records);
      });
  }

  render() {

    return (
      <div>
        <div style={{ height: "40vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">
              <h4>
               <b>Patient's</b> Archives
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
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-body">
              <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Record</Link></h4>
              <table className="table table-stripe">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Type of Record</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.records.map(records =>
                    <tr>
                      <td><Link to={`/show/${records._id}`}>{records.id}</Link></td>
                      <td>{records.title}</td>
                      <td>{records.author}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Archives;