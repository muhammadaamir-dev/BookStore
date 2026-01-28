import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");

  let parsedUser;
  try {
    parsedUser = initialAuthUser ? JSON.parse(initialAuthUser) : undefined;
  } catch (error) {
    parsedUser = undefined; // agar invalid JSON ho to crash na ho
  }

  const [authUser, setAuthUser] = useState(parsedUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
