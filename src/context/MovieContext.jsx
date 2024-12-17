import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const MovieContext = createContext();

// Proveedor del contexto
export const MovieProvider = ({ children }) => {
  const [search, setSearch] = useState(""); // Estado global de búsqueda

  // Función para actualizar el estado de búsqueda
  const updateSearch = (query) => {
    setSearch(query);
  };

  return (
    <MovieContext.Provider value={{ search, updateSearch }}>
      {children}
    </MovieContext.Provider>
  );
};

// Custom hook para acceder al contexto
export const useMyContext = () => {
  return useContext(MovieContext);
};
