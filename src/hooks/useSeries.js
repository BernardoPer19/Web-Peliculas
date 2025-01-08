import { useState, useEffect } from "react";
import { API_KEY } from "../APIKEY";

const useSeries = (endpoint = "tv/popular", page = 1) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&language=es-ES&page=${page}`
        );
        const result = await response.json();

        // Detalles adicionales si es necesario
        const detailedData = await Promise.all(
          result.results.map(async (item) => {
            const detailsResponse = await fetch(
              `https://api.themoviedb.org/3/${endpoint.split("/")[0]}/${item.id}?api_key=${API_KEY}&language=es-ES`
            );
            const details = await detailsResponse.json();
            return { ...item, ...details };
          })
        );

        setData(detailedData);
        setLoading(false);
      } catch (err) {
        setError("Error al obtener los datos de TMDb");
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint,page]);

  return { data, loading, error };
};

export default useSeries;
