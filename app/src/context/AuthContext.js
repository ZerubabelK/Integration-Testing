import { createContext, useState } from "react";

const AuthContext = createContext(0, () => {});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);
  const loginUser = (userData) => {
    setUser(JSON.parse(JSON.stringify(userData)));
    setAuthenticated(true);
  };
  return (
    <AuthContext.Provider value={{ user, loginUser, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
