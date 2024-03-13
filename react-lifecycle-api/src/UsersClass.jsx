import React, { Component } from 'react';

class UsersClass extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        this.setState({ users: data }); 
        console.log(this.state);
      });
  }

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default UsersClass;