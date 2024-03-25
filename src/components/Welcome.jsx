// Welcome component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";

const Welcome = (props) => {
  const [users, setUsers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome {location.state?.username}!</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ name, email, username }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Welcome;