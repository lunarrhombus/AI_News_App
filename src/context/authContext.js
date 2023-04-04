import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [currentUser] = useState(null);

  const login = (email, password) => {
    // Call login API and set currentUser state
  };

  const logout = () => {
    // Call logout API and set currentUser state to null
  };

  const value = {
    currentUser,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
