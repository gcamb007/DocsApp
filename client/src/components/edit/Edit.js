import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      record: {}
    };
  }

  componentDidMount() {
    axios.get('/api/record/'+this.props.match.params.id)
      .then(res => {
        this.setState({ record: res.data });
        console.log(this.state.record);
      });
  }

  onChange = (e) => {
    const state = this.state.record
    state[e.target.name] = e.target.value;
    this.setState({record:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { id, title, author, description, published_year, publisher } = this.state.record;

    axios.put('/api/record/'+this.props.match.params.id, { id, title, author, description, published_year, publisher })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT RECORD
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/show/${this.state.record._id}`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Records List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="id">ID:</label>
                <input type="text" className="form-control" name="id" value={this.state.record.id} onChange={this.onChange} placeholder="ISBN" />
              </div>
              <div className="form-group">
                <label for="title">Title:</label>
                <input type="text" className="form-control" name="title" value={this.state.record.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label for="author">Author:</label>
                <input type="text" className="form-control" name="author" value={this.state.record.author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div className="form-group">
                <label for="description">Description:</label>
                <input type="text" className="form-control" name="description" value={this.state.record.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div className="form-group">
                <label for="published_date">Published Date:</label>
                <input type="number" className="form-control" name="published_year" value={this.state.record.published_year} onChange={this.onChange} placeholder="Published Year" />
              </div>
              <div className="form-group">
                <label for="publisher">Publisher:</label>
                <input type="text" className="form-control" name="publisher" value={this.state.record.publisher} onChange={this.onChange} placeholder="Publisher" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
