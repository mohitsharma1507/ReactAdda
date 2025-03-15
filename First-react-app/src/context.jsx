import { createContext } from "react";


export const bioContext = createContext();

export const BioProvider = ({ children }) => {
  const myName = "Jampo";
  const myAge = 22;
  return (
    <bioContext.Provider value={{ myName, myAge }}>
      {children}
    </bioContext.Provider>
  );
};
