import { useParams } from "react-router-dom";
import useSearchMovies from "../hooks/useSearchMovies";

function DetailsMovies() {
  const { id } = useParams(); // Obtener el id de la película
  const { data, loading, error, similares } = useSearchMovies(id); // Usar el hook con el id

  if (loading) return <p>Cargando detalles...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const movieDetails = data.find(movie => movie.id === parseInt(id));

  return (
    <div className="movie-details p-6">
      {movieDetails ? (
        <div>
          <h1 className="text-3xl font-bold">{movieDetails.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="my-4 w-64"
          />
          <p>{movieDetails.overview}</p>
          <p><strong>Duración:</strong> {movieDetails.runtime ? `${movieDetails.runtime} minutos` : "N/A"}</p>
          <p><strong>Rating:</strong> {movieDetails.vote_average}</p>
          <p><strong>Géneros:</strong> {movieDetails.genres.map(genre => genre.name).join(", ")}</p>
          <p><strong>Fecha de estreno:</strong> {movieDetails.release_date}</p>

          {/* Mostrar las películas similares */}
          <h2 className="text-2xl mt-6">Películas Similares</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {similares.map((movie) => (
              <li key={movie.id} className="border rounded-lg overflow-hidden shadow-md">
                <img
                  className="w-full h-60 object-cover"
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
                <p className="text-center p-2">{movie.title}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No se encontraron detalles para esta película</p>
      )}
    </div>
  );
}

export default DetailsMovies;
