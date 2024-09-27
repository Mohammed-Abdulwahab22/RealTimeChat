import { useEffect, useState } from 'react';
import { UsersList } from './UsersList';
import { MessagesWindow } from './MessagesWindow';
import * as jwt_decode from 'jwt-decode';

export const ChatWindow = () => {
  const [selectedUser, setSelectedUser] = useState(null); 
  const authToken = localStorage.getItem('auth-token');
  let loggedInUserId = null;

  if (authToken) {
    try {
      const decodedToken = jwt_decode.jwtDecode(authToken);
      loggedInUserId = decodedToken.id; 
    } catch (error) {
      console.error("Error decoding JWT:", error);
    }
  }

  return (
    <div className='ChatWindow-container'>
      <div className='ChatWindow-usersList'>
        <UsersList onSelectUser={setSelectedUser} /> 
      </div>
      <div className='ChatWindow-messages'>
        <MessagesWindow selectedUser={selectedUser} loggedInUserId={loggedInUserId} />
      </div>
    </div>
  );
};
