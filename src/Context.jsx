import React, { createContext, useState } from 'react';

// Create a new context
const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <LoginContext.Provider value={{ login,setLogin, handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
export { LoginContext };
