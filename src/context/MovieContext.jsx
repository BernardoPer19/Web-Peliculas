import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  //estados globales
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Estados globales de las PELICULAS
  const [dataMovie, setDatamovie] = useState([]);
  const [similares, setSimilares] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [credits, setCredits] = useState({ cast: [], crew: [] });
  const [totalPages, setTotalPages] = useState(1);

  //Paginado dinamico
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 15;

  //Series

  const [dataTv, setDataTv] = useState([]);

  const value = {
    loading,
    setLoading,
    search,
    setSearch,
    error,
    setError,
    totalPages,
    setTotalPages,
    dataMovie,
    setDatamovie,
    similares,
    setSimilares,
    trailer,
    setTrailer,
    credits,
    setCredits,
    currentPage,
    setCurrentPage,
    moviesPerPage,
    dataTv,
    setDataTv,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export const useMyContext = () => useContext(MovieContext);
