import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersFunction() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response.data); 
        setUsers(response.data);
        console.log(users); 
      });
  }, []); 

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UsersFunction;