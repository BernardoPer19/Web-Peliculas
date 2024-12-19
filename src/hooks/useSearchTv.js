import { useEffect } from "react";
import { useMyContext } from "../context/movieContext";

const useSearchTVShows = (id = null, page = 1) => {
  const {
    loading,
    setLoading,
    setSearch,
    search,
    error,
    setError,
    totalPages,
    setTotalPages,
    dataTv,
    setDataTv,
    similares,
    setSimilares,
    credits,
    setCredits,
  } = useMyContext();

  const query = search.trim() || "all";

  const fetchTvSeries = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  const fetchRecommend = async (id) => {
    const url =
      `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`;
    return fetchTvSeries(url);
  };

  const fetchDetails = async (id) => {
    const url =
      `https://api.themoviedb.org/3/tv/${id}?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`;
    return fetchTvSeries(url);
  };

  const fetchCredits = async (id) => {
    const url =
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`;
    return fetchTvSeries(url);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (!id) {
          const url =
            query === "all"
              ? `https://api.themoviedb.org/3/discover/tv?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES&sort_by=popularity.desc&page=${page}`
              : `https://api.themoviedb.org/3/search/tv?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES&query=${query}&page=${page}`;

          const result = await fetchTvSeries(url);
          setDataTv(result.results);
          setTotalPages(result.total_pages);
        } else {
          const [showDetails, similarData, creditsData] = await Promise.all([
            fetchDetails(id),
            fetchRecommend(id),
            fetchCredits(id),
          ]);

          setDataTv([showDetails]);  // Guardamos los detalles de la serie
          setSimilares(similarData.results || []); // Guardamos las recomendaciones
          setCredits({
            cast: creditsData.cast || [],
            crew: creditsData.crew || [],
          });
        }

        setLoading(false);
      } catch (err) {
        setError("Error al obtener los datos");
        setLoading(false);
      }
    };

    fetchData();
  }, [search, page, id]);

  return { dataTv, loading, error, totalPages, similares, credits };
};

export default useSearchTVShows;
