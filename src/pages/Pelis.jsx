// CardAllMovies.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormSearch from "../components/FormSearch";
import useSearchMovies from "../hooks/useSearchMovies";

function CardAllMovies() {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: movies,
    loading,
    error,
    totalPages,
  } = useSearchMovies(currentPage); // Pasamos currentPage como argumento al hook
  const moviesPerPage = 15;
  const navigate = useNavigate();

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleMovieClick = (movieId) => {
    navigate(`/pelis/details/${movieId}`);
  };

  if (loading) {
    return <p className="text-center">Cargando películas...</p>;
  }

  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <main className="bg-zinc-800 pt-10">
      <FormSearch />

      <div className="m-auto max-w-[1280px]">
        {movies && movies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.map((pelicula) => (
              <div
                key={pelicula.id}
                className="rounded-lg shadow-lg p-4 space-y-4 hover:drop-shadow-xl transition-shadow bg-zinc-900"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                  alt={pelicula.title}
                  className="rounded-md w-full object-cover h-48"
                />
                <div className="space-y-2">
                  <h3 className="text-2xl p-4 font-bold truncate text-white">
                    {pelicula.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    <strong>Duración:</strong>{" "}
                    {pelicula.runtime
                      ? `${Math.round(pelicula.runtime / 60)} Horas`
                      : "N/A"}
                  </p>
                  <p className="text-sm text-yellow-400">
                    <strong>Rating:</strong> {pelicula.vote_average}
                  </p>
                  <button
                    onClick={() => handleMovieClick(pelicula.id)} // Manejar el clic para ver los detalles de la película
                    className="mt-2 w-full text-sm text-white bg-red-500 hover:bg-red-600 transition-colors px-3 py-1 rounded"
                  >
                    <strong>Ver Información película</strong>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-white">No se encontraron películas</p>
        )}
      </div>

      {movies.length > moviesPerPage && (
        <div className="flex justify-between items-center mt-6 p-5">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? "bg-white cursor-not-allowed"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
          >
            Previous
          </button>
          <span className="text-white font-medium">
            Page <span className="font-bold text-red-500">{currentPage}</span>{" "}
            of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? "bg-white cursor-not-allowed"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}

export default CardAllMovies;
