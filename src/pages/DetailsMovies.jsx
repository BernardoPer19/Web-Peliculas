import { useParams } from "react-router-dom";

import useSearchMovies from "../hooks/useSearchMovies";
import PeliculasSImilares from "../components/PeliculasSImilares";

import TrailerPeliculas from "../components/TrailerPeliculas";
import ActoresPelis from "../components/Actores";
import DetallesPeliculas from "../components/DetallesPeliculas";

function DetailsMovies() {
  const { id } = useParams();
  const { dataMovie, loading, error, similares, trailer, credits } =
    useSearchMovies(id);

  if (loading) return <p>Cargando detalles...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const movieDetails = dataMovie[0];

  return (
    <main className="movie-details  bg-zinc-800 min-h-screen p-6 ">
      {movieDetails ? (
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center ">
          <DetallesPeliculas movieDetails={movieDetails} />

          <ActoresPelis credits={credits} />

          <TrailerPeliculas trailer={trailer} movieDetails={movieDetails} />

          {/* Películas similares */}
          <PeliculasSImilares similares={similares} />
        </div>
      ) : (
        <p>No se encontraron detalles para esta película</p>
      )}
    </main>
  );
}

export default DetailsMovies;
