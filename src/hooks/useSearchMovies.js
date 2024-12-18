import { useState, useEffect } from "react";
import { useMyContext } from "../context/movieContext";

const useSearchMovies = (id = null, page = 1) => {
  const { search } = useMyContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  // Para el fetch de datos
  const [data, setData] = useState([]);
  const [similares, setSimilares] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [credits, setCredits] = useState({ cast: [], crew: [] });

  const query = search.trim() || "all";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let url;

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

        // Si tenemos un id, buscamos detalles de la película, similares, el trailer y los créditos
        if (id) {
          const movieDetailsResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`
          );
          const movieDetails = await movieDetailsResponse.json();

          // Obtener videos (trailers) de la película
          const videoResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`
          );
          const videoData = await videoResponse.json();

          // Obtener créditos (actores y equipo)
          const creditsReponse = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`
          );
          const creditsData = await creditsReponse.json();

          // Buscar el trailer entre los videos
          const movieTrailer = videoData.results.find(
            (video) => video.type === "Trailer"
          );

          // Si encontramos el trailer, lo asignamos al estado 'trailer'
          if (movieTrailer) {
            setTrailer(movieTrailer);
          } else {
            setTrailer(null); // Si no hay trailer, limpiamos el estado
          }

          // Establecemos los créditos (actores y equipo)
          setCredits({
            cast: creditsData.cast || [],
            crew: creditsData.crew || [],
          });

          // Obtenemos las películas similares
          const similarResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/similar?api_key=ff95c5df2b63660b42c39e56dced1840&language=es-ES`
          );
          const similarData = await similarResponse.json();

          setData([movieDetails]);
          setSimilares(similarData.results || []);
        }

        setLoading(false);
      } catch (err) {
        setError("Error al obtener los datos");
        setLoading(false);
      }
    };

    fetchData();
  }, [search, page, id]);

  return { data, loading, error, totalPages, similares, trailer, credits };
};

export default useSearchMovies;
