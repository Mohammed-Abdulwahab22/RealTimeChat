import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';
import { useGetUsersQuery } from '../slices/api/getUsers'; 
import { useEffect } from 'react';
import * as jwt_decode from 'jwt-decode';

interface User {
  _id: string; 
  username: string;
  profileImage?: string;
}

interface JWTPayload {
  userId: string; 
}

export const UsersList = () => {
  const { data: users = [], error, isLoading, refetch } = useGetUsersQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const authToken = localStorage.getItem('auth-token');
  
  let loggedInUserId: string | null = null;

  if (authToken) {
    try {
      const decodedToken = jwt_decode.jwtDecode(authToken) as JWTPayload;
      console.log("Decoded Token:", decodedToken);

      loggedInUserId = decodedToken.id; 
      console.log("Logged In User ID:", loggedInUserId);

    } catch (error) {
      console.error("Error decoding JWT:", error);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching users:", error);
    if ('status' in error) {
      return <div>Error: {`Status: ${error.status}, Data: ${JSON.stringify(error.data)}`}</div>;
    }
    if ('message' in error) {
      return <div>Error: {error.message}</div>;
    }
    return <div>An unknown error occurred.</div>;
  }

  const filteredUsers = users.filter((user: User) => user._id !== loggedInUserId);
  console.log("Filtered Users:", filteredUsers);


  return (
    <div className='UsersList-container'>
      <SearchBar />
      <div className="UsersList-profile">
        <Link to="/ProfilePage">
          <img 
            src='src/assets/60111.jpg' 
            alt='Profile' 
            className='UsersList-profileImage'
          />
        </Link>
      </div>
      <div className="UsersList-userInfo">
        <h2 className="UsersList-username">Mohammed Abdulwahab</h2>
      </div>

      <ul className='UsersList-list'>
        {filteredUsers.map((user: User) => (
          <li key={user._id} className='UsersList-item'>
            <img 
              src={user.profileImage || 'src/assets/60111.jpg'} 
              alt={`${user.username} profile`} 
              className='UsersList-userImage' 
            />
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};
