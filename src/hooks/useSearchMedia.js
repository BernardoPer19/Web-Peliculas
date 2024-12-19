import { useEffect } from "react";
import { useMyContext } from "../context/movieContext";

export  const useSearchMedia = (type = "movie", id = null, page = 1) => {
    const {
      loading,
      setLoading,
      search,
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
    } = useMyContext();
  
    const query = search.trim() || "all";
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        setError(null);
  
        try {
          if (!id) {
            const url =
              query === "all"
                ? `https://api.themoviedb.org/3/discover/${type}?api_key=tu_api_key&language=es-ES&sort_by=popularity.desc&page=${page}`
                : `https://api.themoviedb.org/3/search/${type}?api_key=tu_api_key&language=es-ES&query=${query}&page=${page}`;
  
            const result = await fetch(url).then((res) => res.json());
            setDatamovie(result.results);
            setTotalPages(result.total_pages);
          } else {
            const [details, similar, videos, creditsData] = await Promise.all([
              fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=tu_api_key`).then((res) => res.json()),
              fetch(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=tu_api_key`).then((res) => res.json()),
              fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=tu_api_key`).then((res) => res.json()),
              fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=tu_api_key`).then((res) => res.json()),
            ]);
  
            setDatamovie([details]);
            setSimilares(similar.results || []);
            const trailerData = videos.results.find((v) => v.type === "Trailer");
            setTrailer(trailerData || null);
            setCredits({ cast: creditsData.cast || [], crew: creditsData.crew || [] });
          }
  
          setLoading(false);
        } catch (err) {
          setError("Error al obtener los datos");
          setLoading(false);
        }
      };
  
      fetchData();
    }, [id, page, query, type]);
  
    return { dataMovie, loading, error, totalPages, similares, trailer, credits };
  };
  