import React, { useContext, useState } from 'react';
import { AuthContext } from 'news_saas_site\frontend\src\context\AuthContext.js';
import api from '../../services/api';
import './LoginForm.css';

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, password });
      const userData = response.data; // Replace with the actual user data from the response
      login(userData);
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error cases, like displaying an error message to the user
    }
  };

  return (
    <div className="LoginForm">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
