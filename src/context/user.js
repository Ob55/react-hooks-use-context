// user.js

import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const UserProvider = ({ children }) => {
  const theme = 'dark';

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { UserProvider, ThemeContext };
