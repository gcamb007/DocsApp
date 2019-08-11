import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      author: '',
      description: '',
      published_year: '',
      publisher: ''
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { id, title, author, description, published_year, publisher } = this.state;
    axios.post('/api/record', { id, title, author, description, published_year, publisher })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { id, title, author, description, published_year, publisher } = this.state;
    return (
      <div>
        <div style={{ height: "45vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">
              <h4>
               <b>Patient's</b> Archive
                <p className="flow-text grey-text text-darken-1">
                    View your records, prescriptions, and download your exams results
                </p>
              </h4>
              <div className="row">
                <Link to="/archives" className="btn-flat waves-effect">
                  <i className="material-icons left">arrow_back</i> Archives  
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="panel-body">
                <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Records List</Link></h4>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label for="id">ID:</label>
                    <input type="text" className="form-control" name="id" value={id} onChange={this.onChange} placeholder="ID = Initials + Date + Time" />
                  </div>
                  <div className="form-group">
                    <label for="title">Document Name:</label>
                    <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
                  </div>
                  <div className="form-group">
                    <label for="author">Record Type:</label>
                    <input type="text" className="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
                  </div>
                  <button type="submit" className="btn btn-small waves-effect waves-light hoverable blue accent-3">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
