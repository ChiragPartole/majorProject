// ContextProvider.jsx
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [value, setValue] = useState(/* your initial value */);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
