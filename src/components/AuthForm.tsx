import React from 'react'
import { Link } from 'react-router-dom'
export const AuthForm = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
            
    }
    return (
        <div className="AuthForm-container">
            <div className='AuthForm-form'>
                <img src="src/assets/App-logo.png" alt="logo" height={50} />
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <button type="submit">Login</button>
                </form>
                <div className="AuthForm-register">
                    <span>Don't have an account? </span>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    )
}
