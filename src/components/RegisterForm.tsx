import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
    const [username, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
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


        if (password !== confirmPassword) {
            setError('Passwords do not match'); 
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/users/register", {
                username,
                email,
                password
            });

            if (response.status === 201) {
                console.log("User created successfully");
                navigate("/Login");
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Registration failed');  
        }
    };

    return (
        <div className="AuthForm-container">
        <div className='AuthForm-form'>
            <img src="src/assets/App-logo.png" alt="logo" height={50} />
            <h1>Register</h1>
            
            {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>} 
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUserName(e.target.value)} 
                    required 
                />
                
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
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
                
                <label htmlFor="confirm-password">Confirm Password</label>
                <input 
                    type="password" 
                    name="confirm-password" 
                    id="confirm-password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                />
                
                <button type="submit">Register</button>
            </form>
            
            <div className="AuthForm-register">
                <span>Already have an account? </span>
                <Link to="/Login">Login</Link>
            </div>
        </div>
    </div>
    );
};
