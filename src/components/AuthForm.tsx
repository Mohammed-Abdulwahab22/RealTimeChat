import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const AuthForm = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);  


    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        if (token) {
            navigate("/ChatWindow"); 
        }
    }, [navigate]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);  

        try {
            const response = await axios.post("http://localhost:5000/api/users/login", {
                username,
                password
            });
            if (response.status === 200) {
                console.log("Login successful");
                localStorage.setItem("auth-token", response.data.token);
                navigate("/ChatWindow");
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed');  
        }
    }

    return (
        <div className="AuthForm-container">
        <div className='AuthForm-form'>
            <img src="src/assets/App-logo.png" alt="logo" height={50} />
            <h1>Login</h1>
            
            {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>} 
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                
                <button type="submit">Login</button>
            </form>
            
            <div className="AuthForm-register">
                <span>Don't have an account? </span>
                <Link to="/register">Register</Link>
            </div>
        </div>
    </div>
    );
}
