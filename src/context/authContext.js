import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [preferences, setPreferences] = useState({});

  // Implement logic to check for an existing user session here, if applicable
  // For example, you could fetch user data from local storage or an API

  const login = (userData) => {
    setUser(userData);
    // Implement logic to save user session, e.g., storing data in local storage or setting an authentication cookie
  };

  const logout = () => {
    setUser(null);
    // Implement logic to clear the user session, e.g., clearing local storage or removing an authentication cookie
  };

  const updatePreferences = (newPreferences) => {
    setPreferences(newPreferences);
    // Implement logic to save preferences, e.g., storing data in local storage or an API
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
