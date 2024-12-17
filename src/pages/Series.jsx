import React, { useState } from "react";
import useSearchTVShows from "../hooks/useSearchTv";
import FormSearch from "../components/FormSearch";
import { FilterControls } from "../components/BtnFilters";

function Series() {
  const [currentPage, setcurrentPage] = useState(1);
  const {
    data: series,
    loading,
    error,totalPages
  } = useSearchTVShows( currentPage);
  const seriesPerPage = 15;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setcurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return <p className="text-center">Cargando series...</p>;
  }

  if (error) return <p className="text-red-500">error</p>;

  return (
    <main className="bg-zinc-800 pt-10">
      <FormSearch/>
    {/* // <FilterControls/> */}
      <div className="m-auto max-w-[1280px]">
        {series.length === 0 ? (
          <p className="text-center text-white">No se encontraron series</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {series.slice(0, 12).map((serie) => (
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
                  <button className="mt-2 w-full text-sm text-white bg-red-500 hover:bg-red-600 transition-colors px-3 py-1 rounded">
                    <strong>Ver Información serie</strong>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {series.length > seriesPerPage && (
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
            Page <span className="font-bold text-red-500">{currentPage}</span> of{" "}
            {totalPages}
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

export default Series;
