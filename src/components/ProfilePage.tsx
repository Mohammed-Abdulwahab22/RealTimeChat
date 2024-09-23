import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    
    navigate('/Login');
  };

  return (
    <div className='ProfilePage-container'>
      <div className='ProfilePage-image'>
        <img src="src/assets/App-people-chatting.png" alt="Profile" />
      </div>

      <div className='ProfilePage-info'>
        <h1>Mohammed Abdulwahab</h1>
        <Link to="/Settings">
          <p className='ProfilePage-status'>Settings</p>
        </Link>

        <button className='ProfilePage-button' onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};
