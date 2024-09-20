import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="error-code">404</h1>
            <p className="error-message">Oops! Page not found.</p>
            <p className="error-description">It seems we can't find the page you're looking for.</p>
            <Link to="/" className="home-button">Go to Homepage</Link>
        </div>
    );
};

export default NotFound;
