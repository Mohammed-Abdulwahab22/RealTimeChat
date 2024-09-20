import { SearchBar } from './SearchBar';
import { ProfilePage } from './ProfilePage';
import { Link } from 'react-router-dom';

export const UsersList = () => {


  const users = [
    { id: 1, name: 'User 1', profileImage: 'src/assets/App-people-chatting.png' },
    { id: 2, name: 'User 2', profileImage: 'src/assets/App-people-chatting.png' },
    { id: 3, name: 'User 3', profileImage: 'src/assets/App-people-chatting.png' },
  ];


  return (
    <div className='UsersList-container'>
      <SearchBar />
      <div className="UsersList-profile">
        <Link to="/ProfilePage">
        <img 
          src='src/assets/App-people-chatting.png' 
          alt='Profile' 
          className='UsersList-profileImage'
          
        />
        </Link>
       
      </div>
      <div className="UsersList-userInfo">
          <h2 className="UsersList-username">Mohammed Abdulwahab</h2>
          <div className="UsersList-status">
            {/* <span className="UsersList-statusIndicator"></span>
            <span className="UsersList-statusText">online</span> */}
          </div>
          </div>
          <ul className='UsersList-list'>
        {users.map(user => (
          <li key={user.id} className='UsersList-item'>
            <img 
              src={user.profileImage} 
              alt={`${user.name} profile`} 
              className='UsersList-userImage' 
            />
            {user.name}
          </li>
        ))}
      </ul>

    </div>
  );
};
