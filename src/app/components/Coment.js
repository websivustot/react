import React from 'react';
import { Link } from 'react-router';

export default class Coment extends React.Component {

  render(){
    if (this.props.postId == '3') {

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            <Link to={`/comments/${this.props.id}`}>
              {this.props.name}
            </Link>
          </h3>
        </div>
        <div className="panel-body">

          <p>
            {this.props.email}
          </p>
          <p>
            {this.props.body}
          </p>
        </div>
      </div>
    );
  } else return null;
  }
}
