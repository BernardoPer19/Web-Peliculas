import {  useEffect } from "react";
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
    trailer,
    setTrailer,
    credits,
    setCredits,
  } = useMyContext();

  const query = search.trim() || "all";

  const fetchTvSeries = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  const fetchVideos = async (id) => {
    const url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`;
    return fetchTvSeries(url);
  };

  const fetchRecommend = async (id) => {
    const url =
      `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`
    ;
    return fetchTvSeries(url);
  };

  const fetchDetails = async (id) => {
    const url = 
      `https://api.themoviedb.org/3/tv/${id}?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`
   
    return fetchTvSeries(url);
  };

  const fetchCredits = async (id) => {
    const url = 
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`
    
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
        }else{

          const [showDetails, similarData, videoData, creditsData] = await Promise.all([
            fetchCredits(id),
            fetchRecommend(id),
            fetchDetails(id),
            fetchVideos(id)
          ])

          setDataTv([showDetails]);
          setSimilares(similarData.results || []);


          const movieTreiler = videoData.results.find((video) =>  video.type === "Clip");

          setTrailer(movieTreiler || null);

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

    fetchData(); // Llamar a la función cada vez que cambien query o page
  }, [search, page,id]); // Dependencias: búsqueda y página

  return { dataTv, loading, error, totalPages, similares,trailer,credits};
};

export default useSearchTVShows;
