import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <MovieContext.Provider value={{ search, setSearch }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMyContext = () => useContext(MovieContext);
