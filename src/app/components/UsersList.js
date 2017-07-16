import React from 'react';
import User from './User';
import axios from 'axios';

export default class UsersList extends React.Component {
  constructor(){
    super(...arguments);
    this.state = {
      users: []
    }

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        let { data } = response;
        this.setState({
          users: data
        });
      })
  }
  render(){
    if (!this.state.users.length) {
      return (null);
    }

    let users = this.state.users.map((user, index) => {
        return <User key={index} {...user} />
      });
      console.log(users);
    return(
      <div>
        <h1>Users</h1>
        {users}
      </div>
    );
  }
}
