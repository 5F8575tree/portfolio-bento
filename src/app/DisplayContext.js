import { createContext, useState } from 'react';

export const DisplayContext = createContext();

export const DisplayProvider = ({ children }) => {
  const [ isDisplayed, setIsDisplayed ] = useState('All');

  const toggleDisplay = (item) => {
    setIsDisplayed(item);
  }

  return (
    <DisplayContext.Provider value={{ isDisplayed, toggleDisplay }}>
      {children}
    </DisplayContext.Provider>
  )
}
