import React from "react";
import "swiper/css";
import useMovies from "../hooks/useMovies";
import { Link } from "react-router-dom";

const RecomendadoPelis = () => {
  const { data: movies, loading, error } = useMovies("movie/top_rated");

  if (loading)
    return <p className="text-white text-center">Cargando películas...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <main className="max-w-[90%] mx-auto pt-10">
     

    
      <div className="flex flex-wrap justify-center gap-6">
        {movies.slice(1, 11).map((movie) => (
          <div
            key={movie.id}
            className="relative group bg-gray-800 rounded-lg overflow-hidden w-full sm:w-[48%] md:w-[30%] lg:w-[22%] flex-shrink-0"
          >
          
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="h-[250px] sm:h-[300px] object-cover w-full transition-opacity duration-300 group-hover:opacity-50"
            />

         
            <div className="absolute bottom-0 left-0 right-0 bg-zinc-900 bg-opacity-90 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-md lg:text-lg font-semibold text-white">
                {movie.title}
              </h2>
              <p className="text-sm text-gray-400">
                <strong>Duración:</strong>{" "}
                {movie.runtime ? `${movie.runtime} min` : "N/A"}
              </p>
              <p className="text-sm text-yellow-400">
                <strong>Rating:</strong> {movie.vote_average}
              </p>
              <button className="mt-2 w-full text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded">
                Ver película
              </button>
            </div>
          </div>
        ))}
      </div>

     
      <div className="flex justify-center mt-8">
        <Link to="/Pelis">
          <button className="bg-red-600 text-white font-bold rounded-lg py-3 px-5 hover:bg-red-700">
            Ver Más
          </button>
        </Link>
      </div>
    </main>
  );
};

export default RecomendadoPelis;
