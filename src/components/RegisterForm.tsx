import React from 'react';
import { Link } from 'react-router-dom';
export const RegisterForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="AuthForm-container">
      <div className='AuthForm-form'>
        <img src="src/assets/App-logo.png" alt="logo" height={50} />
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" name="confirm-password" id="confirm-password" required />
          <button type="submit">Register</button>
        </form>
        <div className="AuthForm-register">
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};
