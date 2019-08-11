import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/api/record/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.record.title}
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Records List</Link></h4>
            <dl>
              <dt>ID:</dt>
              <dd>{this.state.record.id}</dd>
              <dt>Author:</dt>
              <dd>{this.state.record.author}</dd>
              <dt>Description:</dt>
              <dd>{this.state.record.description}</dd>
              <dt>Publish Date:</dt>
              <dd>{this.state.record.published_year}</dd>
              <dt>Publisher:</dt>
              <dd>{this.state.record.publisher}</dd>
            </dl>
            <Link to={`/edit/${this.state.record._id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.record._id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
