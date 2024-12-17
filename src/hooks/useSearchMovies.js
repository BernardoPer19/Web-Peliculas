import { useState, useEffect } from "react";
import { useMyContext } from "../context/movieContext"; // Usar el contexto si es necesario

const useSearchMovies = (id = null, page = 1) => {
  const { search } = useMyContext(); // Si estás usando contexto para la búsqueda
  const [data, setData] = useState([]); // Para almacenar los resultados de la búsqueda
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error
  const [totalPages, setTotalPages] = useState(1); // Total de páginas para la paginación
  const [similares, setSimilares] = useState([]); // Para almacenar las películas similares
  
  const query = search.trim() || "all"; // Si no hay búsqueda, mostramos 'all'

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // URL para la búsqueda o popularidad
        let url;
        if (query === "all") {
          url = `https://api.themoviedb.org/3/discover/movie?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES&sort_by=popularity.desc&page=${page}`;
        } else {
          url = `https://api.themoviedb.org/3/search/movie?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES&query=${query}&page=${page}`;
        }

        const response = await fetch(url);
        const result = await response.json();

        // Obtener detalles de las películas
        const detailedData = await Promise.all(
          result.results.map(async (movie) => {
            const movieDetailsResponse = await fetch(
              `https://api.themoviedb.org/3/movie/${movie.id}?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`
            );
            const movieDetails = await movieDetailsResponse.json();
            return { ...movie, ...movieDetails };
          })
        );

        // Si tenemos un id, buscamos las películas similares
        if (id) {
          const similarResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/similar?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`
          );
          const similarData = await similarResponse.json();
          setSimilares(similarData.results); // Guardamos las películas similares
        }

        setTotalPages(result.total_pages);
        setData(detailedData);
        setLoading(false);
      } catch (err) {
        setError("Error al obtener los datos");
        setLoading(false);
      }
    };

    fetchData();
  }, [search, page, id]); // Añadir 'id' como dependencia

  return { data, loading, error, totalPages, similares };
};

export default useSearchMovies;
