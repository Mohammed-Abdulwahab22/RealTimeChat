import React from 'react'
import { Link } from 'react-router-dom'
export const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='NavBar-logo'>
            <img src="src/assets/App-logo.png" alt="logo" height={50} />
            <span className='NavBar-title'>Talky</span>
            </div>
            <div className='NavBar-links'>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/">Contact Us</Link>
             </div>
        </div>
    )
}
