import { useState, useEffect } from "react";
import { useMyContext } from "../context/movieContext"; 

const useSearchTVShows = (page = 1) => {
  const { search } = useMyContext(); 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const query = search.trim() || "all"; 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); 

      try {
        let url;
        // Si hay un valor en 'search', se usa la búsqueda de series de televisión, de lo contrario, se obtiene por popularidad.
        if (query === "all") {
          url = `https://api.themoviedb.org/3/discover/tv?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES&sort_by=popularity.desc&page=${page}`;
        } else {
          url = `https://api.themoviedb.org/3/search/tv?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES&query=${query}&page=${page}`;
        }

        const response = await fetch(url);
        const result = await response.json();

        // Obtener detalles de cada serie de televisión
        const detailedData = await Promise.all(
          result.results.map(async (tv) => {
            const tvDetailsResponse = await fetch(
              `https://api.themoviedb.org/3/tv/${tv.id}?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`
            );
            const tvDetails = await tvDetailsResponse.json();
            return { ...tv, ...tvDetails }; // Combina los datos de la serie con los detalles adicionales
          })
        );

        setTotalPages(result.total_pages); // Usar el total de páginas que devuelve la API
        setData(detailedData); // Guardar las series con detalles
        setLoading(false);
      } catch (err) {
        setError("Error al obtener los datos");
        setLoading(false);
      }
    };

    fetchData(); // Llamar a la función cada vez que cambien query o page
  }, [search, page]); // Dependencias: búsqueda y página

  return { data, loading, error, totalPages };
};

export default useSearchTVShows;
