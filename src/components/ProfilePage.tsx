import React from 'react'
import { Link } from 'react-router-dom'

export const ProfilePage = () => {
  return (
    <div className='ProfilePage-container'>
      <div className='ProfilePage-image'>
        <img src="src\assets\App-people-chatting.png" alt="Profile" />
      </div>

      <div className='ProfilePage-info'>
        <h1>Mohammed Abdulwahab</h1>
        <Link to="/Settings"><p className='ProfilePage-status'>Settings</p></Link>
        <Link to="/"><p className='ProfilePage-status'>Log Out</p></Link>
      </div>
    </div>
  )
}
