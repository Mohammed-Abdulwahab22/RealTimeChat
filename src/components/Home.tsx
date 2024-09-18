import React from 'react'
import { NavBar } from './NavBar'
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className='Home-container'>
        <NavBar />
        <div className='Home-content'>
            <img src="src\assets\App-people-chatting.png" alt="logo" height={150} />
            <h1>Your World, Your Conversations</h1>
            <p>
                Talky is more than just a chat app; it's your personal communication hub. Connect seamlessly with friends, family, and loved ones, no matter where they are. Share your thoughts, experiences, and moments in real-time, fostering deeper connections and building lasting memories. Discover new communities, join exciting discussions, and find your people. With Talky, communication is effortless, engaging, and enriching. Experience the future of chatting today.
            </p>
            <Link to="/register" className="Home-button">Get Started</Link>
        </div>
    </div>
    )
}
