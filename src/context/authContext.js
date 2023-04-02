import React, { createContext, useState, useEffect } from 'react';
import { createContext } from 'react';
import { AuthContext } from 'news_saas_site\frontend\src\context\authContext.js';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [preferences, setPreferences] = useState({});

  useEffect(() => {
    // Check for existing user session here, if applicable
    // For example, you could fetch user data from local storage or an API
    const existingUserData = localStorage.getItem('user');
    if (existingUserData) {
      setUser(JSON.parse(existingUserData));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    // Save user session data, e.g., storing data in local storage or setting an authentication cookie
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    // Clear user session data, e.g., clearing local storage or removing an authentication cookie
    localStorage.removeItem('user');
  };

  const updatePreferences = (newPreferences) => {
    setPreferences(newPreferences);
    // Save preferences data, e.g., storing data in local storage or an API
    localStorage.setItem('preferences', JSON.stringify(newPreferences));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        preferences,
        login,
        logout,
        updatePreferences,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
