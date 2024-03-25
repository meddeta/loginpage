import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import facebookIcon from '../assets/icons8-facebook.svg';
import googleIcon from '../assets/icons8-google.svg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); 
    
    if (isValidEmail(username)) {
      if (username === 'example@example.com' && password === 'password') {
        setAuthenticated(true);
        setError('');
      } else {
        setError('Unauthorized. Please check your credentials.');
      }
    } else {
      setError('Please enter a valid email address and password.');
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Redirect if authenticated
  if (authenticated) {
    //navigte to /dashboard and pass the username as a prop
    navigate('/dashboard', { state: { username } });
  }

  return (
    <div className="flex-container">
      <div className="login-form">
        <form className="form-container" onSubmit={handleLogin}>
          <h2 className="title">Sign in with</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="social-buttons">
            <button className="facebook">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
              Facebook
            </button>
            <button className="google">
              <img src={googleIcon} alt="Google" className="social-icon" />
              Google
            </button>
          </div>
          <div className="input-field">
            <label htmlFor="username" className="label">
              Username (Email)
            </label>
            <input
              type="email"
              id="username"
              placeholder="Email"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password" className="label">
              Password
              <a href="#" className="forgot-password-link">Forgot?</a>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="login-button"
            type="submit"
          >
            Login
          </button>
          <p className="signup-text">Not a member? <a href="#">Sign up now</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
