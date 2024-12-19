// CardAllMovies.js
import FormSearch from "../components/FormSearch";
import useSearchMovies from "../hooks/useSearchMovies";
import MovieList from "../components/MoviesList";
import MaviePagination from "../components/MaviePagination";
import { useMyContext } from "../context/movieContext";

function CardAllMovies() {
  
  const { currentPage, setCurrentPage, moviesPerPage } = useMyContext();

  const {
    dataMovie,
    loading,
    error,
    totalPages,
  } = useSearchMovies(null, currentPage);

  if (loading) {
    return <p className="text-center">Cargando películas...</p>;
  }

  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <main className="bg-zinc-800 pt-10">
      <FormSearch />

      <MovieList movies={dataMovie} />

      <MaviePagination
        movies={dataMovie}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        moviesPerPage={moviesPerPage}
      />
    </main>
  );
}

export default CardAllMovies;
