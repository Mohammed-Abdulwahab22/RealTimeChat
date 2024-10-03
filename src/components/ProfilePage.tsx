import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as jwt_decode from 'jwt-decode';

interface JWTPayload {
  username: string; // Adjust this based on your JWT structure
}

export const ProfilePage = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('auth-token');
  let loggedInUserName: string | null = null;

  if (authToken) {
    try {
      const decodedToken = jwt_decode.jwtDecode(authToken) as JWTPayload;
      loggedInUserName = decodedToken.username; // Assuming your token has a username field
    } catch (error) {
      console.error("Error decoding JWT:", error);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    navigate('/Login');
  };

  return (
    <div className='ProfilePage-container'>
      <div className='ProfilePage-image'>
        <img src="src/assets/60111.jpg" alt="Profile" />
      </div>
      <div className='ProfilePage-info'>
        <h1>{loggedInUserName || 'User Name'}</h1>
        <button className='ProfilePage-button' onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};
