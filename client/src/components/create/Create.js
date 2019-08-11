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
        
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                ADD A RECORD
              </h3>
            </div>
            <div className="panel-body">
              <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Records List</Link></h4>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label for="id">ID:</label>
                  <input type="text" className="form-control" name="id" value={id} onChange={this.onChange} placeholder="ISBN" />
                </div>
                <div className="form-group">
                  <label for="title">Title:</label>
                  <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
                </div>
                <div className="form-group">
                  <label for="author">Author:</label>
                  <input type="text" className="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
                </div>
                <div className="form-group">
                  <label for="description">Description:</label>
                  <textArea className="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
                </div>
                <div className="form-group">
                  <label for="published_date">Published Date:</label>
                  <input type="number" className="form-control" name="published_year" value={published_year} onChange={this.onChange} placeholder="Published Year" />
                </div>
                <div className="form-group">
                  <label for="publisher">Publisher:</label>
                  <input type="text" className="form-control" name="publisher" value={publisher} onChange={this.onChange} placeholder="Publisher" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
