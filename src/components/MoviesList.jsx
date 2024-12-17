import useMovies from "../hooks/useMovies";


const MovieList = () => {

  const {movies,loading,error} = useMovies();

  // Mostrar el estado de carga o error
  if (loading) return <p>Cargando películas...</p>;
  if (error) return <p>{error}</p>;
  // Mostrar las películas en una lista
  return (
    <div>
      <h1>Lista de Películas</h1>
      <div className="movie-list">
        {movies.map(
          (movie, index) =>
            movie.Response === "True" && (
              <div key={index} className="movie-card">
                <h2>{movie.Title}</h2>
                <img src={movie.Poster} alt={movie.Title} />
                <p>
                  <strong>Año:</strong> {movie.Year}
                </p>
                <p>
                  <strong>Género:</strong> {movie.Genre}
                </p>
                <p>
                  <strong>Director:</strong> {movie.Director}
                </p>
                <p>
                  <strong>Resumen:</strong> {movie.Plot}
                </p>
                {movie.Trailer && (
                  <div>
                    <h3>Tráiler</h3>
                    <a
                      href={`https://www.youtube.com/watch?v=${movie.Trailer}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver tráiler en YouTube
                    </a>
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default MovieList;
