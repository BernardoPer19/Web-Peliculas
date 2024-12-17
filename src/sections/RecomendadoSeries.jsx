import React from "react";
import "swiper/css";
import useSeries from "../hooks/useSeries";
import { Link } from "react-router-dom";

const RecomendadosSeries = () => {
  const { data: series, loading, error } = useSeries("tv/top_rated");

  if (loading)
    return <p className="text-white text-center">Cargando series...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <main className="max-w-[90%] mx-auto pt-20">
     

      {/* Contenedor de las series con flex */}
      <div className="flex flex-wrap justify-center gap-6">
        {series.slice(0, 10).map((serie) => (
          <div
            className="relative group bg-gray-800 rounded-lg overflow-hidden w-full sm:w-[48%] md:w-[30%] lg:w-[15%] flex-shrink-0"
            key={serie.id}
          >
            {/* Imagen de la serie */}
            <img
              src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
              alt={serie.name}
              className="h-[350px] sm:h-[300px]  object-cover w-full transition-opacity duration-300 group-hover:opacity-50"
            />

            {/* Información sobre la serie */}
            <div className="absolute bottom-0 left-0 right-0 bg-zinc-900 bg-opacity-90 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-md lg:text-lg font-semibold text-white">
                {serie.name}
              </h2>
              <p className="text-sm text-gray-400">
                <strong>Duración:</strong>
                {serie.episode_run_time && serie.episode_run_time[0]
                  ? `${serie.episode_run_time[0]} min`
                  : "N/A"}
              </p>
              <p className="text-sm text-yellow-400">
                <strong>Rating:</strong> {serie.vote_average}
              </p>
              <button className="mt-2 w-full text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded">
                Ver serie
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Botón de "Ver más" */}
      <div className="flex justify-center mt-8">
        <Link to="/Series">
          <button className="bg-red-600 text-white font-bold rounded-lg py-3 px-5 hover:bg-red-700">
            Ver Más
          </button>
        </Link>
      </div>
    </main>
  );
};

export default RecomendadosSeries;
