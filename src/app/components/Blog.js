import React from 'react';
import { Link } from 'react-router';

export default class Blog extends React.Component {

  render(){
    if (this.props.userId == '3') {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            <Link to={`/blogs/${this.props.id}`}>
              {this.props.title}
            </Link>
          </h3>
        </div>
        <div className="panel-body">
          <p>
            {this.props.body}
          </p>
        </div>
      </div>
    );
  } else return null;
  }
}
