import React from 'react';

interface User {
    name: string;
    profileImage: string;
}

const ChatHeader:React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className='ChatHeader-container'>
      <img
        src="src\assets\60111.jpg"
        alt={`${user.name}'s profile`}
        className='ChatHeader-profileImage'
      />
      <h2 className='ChatHeader-username'>{user.name}</h2>
    </div>
  );
};

export default ChatHeader;
