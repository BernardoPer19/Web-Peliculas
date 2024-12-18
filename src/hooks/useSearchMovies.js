import { useEffect } from "react";
import { useMyContext } from "../context/movieContext";

const useSearchMovies = (id = null, page = 1) => {
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

  // Funciones auxiliares para fetch
  const fetchMovies = async (url) => {
    const response = await fetch(url);
    return response.json();
  };


  //estos fetch son importantes por que nos da los datos de cada pelicula dependiendo el id q le pasemos como parametro en el navegado dinamico
  const fetchMovieDetails = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`;
    return fetchMovies(url);
  };

  const fetchSimilarMovies = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`;
    return fetchMovies(url);
  };

  const fetchVideos = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`;
    return fetchMovies(url);
  };

  const fetchCredits = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`;
    return fetchMovies(url);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (!id) {
          const url =
            query === "all"
              ? `https://api.themoviedb.org/3/discover/movie?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES&sort_by=popularity.desc&page=${page}`
              : `https://api.themoviedb.org/3/search/movie?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES&query=${query}&page=${page}`;

          const result = await fetchMovies(url);
          setDatamovie(result.results);
          setTotalPages(result.total_pages);
        } else {
          // Fetch para detalles, similares, videos y créditos
          const [movieDetails, similarData, videoData, creditsData] =
            await Promise.all([
              fetchMovieDetails(id),
              fetchSimilarMovies(id),
              fetchVideos(id),
              fetchCredits(id),
            ]);

          setDatamovie([movieDetails]);
          setSimilares(similarData.results || []);

          const movieTrailer = videoData.results.find(
            (video) => video.type === "Trailer"
          );
          setTrailer(movieTrailer || null);

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

  return { dataMovie, loading, error, totalPages, similares, trailer, credits };
};

export default useSearchMovies;
