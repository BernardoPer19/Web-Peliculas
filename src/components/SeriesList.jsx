import React from "react";
import { useNavigate } from "react-router-dom";

function SeriesList({ series }) {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/series/details/${id}`);
  };

  return (
    <div className="m-auto max-w-[1280px]">
      {series.length === 0 ? (
        <p className="text-center text-white">No se encontraron series</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {series.slice(0, 16).map((serie) => (
            <div
              key={serie.id}
              className="rounded-lg shadow-lg p-4 space-y-4 hover:drop-shadow-xl transition-shadow bg-zinc-900"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name}
                className="rounded-md w-full object-cover h-48"
              />
              <div className="space-y-2">
                <h3 className="text-2xl p-4 font-bold truncate text-white">
                  {serie.name}
                </h3>
                <p className="text-sm text-gray-400">
                  <strong>Duración:</strong>{" "}
                  {serie.episode_run_time && serie.episode_run_time[0]
                    ? `${serie.episode_run_time[0]} min`
                    : "N/A"}
                </p>
                <p className="text-sm text-yellow-400">
                  <strong>Rating:</strong> {serie.vote_average}
                </p>
                <button
                  onClick={() => handleNavigate(serie.id)}
                  className="mt-2 w-full text-sm text-white bg-red-500 hover:bg-red-600 transition-colors px-3 py-1 rounded"
                >
                  <strong>Ver Información serie</strong>
                </button>
              </div>
            </div>
          ))}

          
        </div>
      )}
    </div>
  );
}

export default SeriesList;
