import React, { useContext, useState, createContext, useEffect } from 'react';

import * as storage from '../utils/storage';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    // console.log(storage.getItemFromStorage(storage.THEME_KEY));
    const themeStoraged = storage.getItemFromStorage(storage.THEME_KEY);
    if(themeStoraged){
      setTheme(themeStoraged);
    }
  }, [])

  return (
    <div>
      <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  const { theme, setTheme } = context;
  return { theme, setTheme };
}