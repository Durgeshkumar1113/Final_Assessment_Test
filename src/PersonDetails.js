import React, { useState, useEffect } from 'react';

const PersonDetails = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='personaldetails'>
      <h2>Person Details</h2>
      <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default PersonDetails;
