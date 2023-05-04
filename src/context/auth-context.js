import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") || "",
    user: JSON.parse(localStorage.getItem("user") || "{}"),
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };
