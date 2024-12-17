import { useState, useEffect } from "react";
import { useMyContext } from "../context/movieContext";

const useSearchMovies = (id = null, page = 1) => {
  const { search } = useMyContext();
  const [data, setData] = useState([]); // Para los resultados de búsqueda o películas populares
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [similares, setSimilares] = useState([]); // Para las películas similares

  const query = search.trim() || "all"; // Si no hay búsqueda, tomar todos

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let url;

        // Si no hay id (búsqueda normal o lista de películas populares)
        if (!id) {
          if (query === "all") {
            url = `https://api.themoviedb.org/3/discover/movie?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES&sort_by=popularity.desc&page=${page}`;
          } else {
            url = `https://api.themoviedb.org/3/search/movie?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES&query=${query}&page=${page}`;
          }

          const response = await fetch(url);
          const result = await response.json();

          setData(result.results);
          setTotalPages(result.total_pages);
        }

        // Si tenemos un id, buscamos detalles de la película y similares
        if (id) {
          const movieDetailsResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`
          );
          const movieDetails = await movieDetailsResponse.json();

          // Obtenemos las películas similares
          const similarResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/similar?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`
          );
          const similarData = await similarResponse.json();

          setData([movieDetails]); // Guardamos solo la película seleccionada
          setSimilares(similarData.results || []); // Guardamos las películas similares
        }

        setLoading(false);
      } catch (err) {
        setError("Error al obtener los datos");
        setLoading(false);
      }
    };

    fetchData();
  }, [search, page, id]); // La dependencia es tanto search, page como id

  return { data, loading, error, totalPages, similares };
};

export default useSearchMovies;
