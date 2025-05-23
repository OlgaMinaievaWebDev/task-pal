import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
 
 const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

 useEffect(() => {
  if (theme === 'dark') {
   document.body.classList.add('dark');
  } else {
   document.body.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
 },[theme])

 const toggleTheme = () => {
  setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
 }

 return (
  <ThemeContext.Provider value={{theme, toggleTheme}}>
   {children} 
   </ThemeContext.Provider>
 )

}

export default ThemeContext;