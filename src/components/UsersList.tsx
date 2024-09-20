import React from 'react';
import { SearchBar } from './SearchBar';
import { ProfilePage } from './ProfilePage';
import { useState } from 'react';

export const UsersList = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  return (
    <div className='UsersList-container'>
      <SearchBar />
      <div className="UsersList-profile">
        <img 
          src='src\assets\App-logo.png' 
          alt='Profile' 
          className='UsersList-profileImage'
          onClick={handleProfileClick}
        />
      </div>
      <ul className='UsersList-list'>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
        {/* Add more users */}
      </ul>

      {showProfile && <ProfilePage />}
    </div>
  );
};
