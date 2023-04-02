import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from 'news_saas_site\frontend\src\context\authContext.js';
import LandingPage from './components/LandingPage/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {/* Include your navigation bar component here, if applicable */}
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
