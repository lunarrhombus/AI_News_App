import React from 'react';

// import Switch from 'react-router-dom/Switch';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from "./context/AuthContext";

import LandingPage from './components/LandingPage/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          {/* Include your navigation bar component here, if applicable */}
          <Routes>
            <Route exact path="/" component={LandingPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
