import React, { useState } from 'react';
import '../css/Login.css';
import { Link } from 'react-router-dom';
import { auth, provider, signInWithPopup } from '../Firebase.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Google User:', user);
            // Handle successful login with Google user
        } catch (error) {
            console.error('Error during Google login:', error);
        }
    };

    return (
        <div className="login-view">
            <div className="login-container">
                <h2 className='title'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                <div onClick={handleGoogleLogin} className="google-login-button ">
                    <i className="fab fa-google icon"></i>
                    <span>Login with Google</span>
                </div>
                </form>
                <Link to="/signup" className='text-signup'>Don't have an account? Signup</Link>
            </div>
        </div>
    );
};

export default Login;
