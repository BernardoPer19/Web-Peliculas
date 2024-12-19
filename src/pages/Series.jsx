import React, { useState } from "react";
import useSearchTVShows from "../hooks/useSearchTv";
import FormSearch from "../components/FormSearch";
import SeriesList from "../components/SeriesList";
import SeriePagination from "../components/SeriePagination";

function Series() {
  const [currentPage, setCurrentPage] = useState(1);
  const { dataTv:series, loading, error, totalPages, similares, trailer, credits } =
    useSearchTVShows(null,currentPage);
  const seriesPerPage = 15;

  

  if (loading) {
    return <p className="text-center">Cargando series...</p>;
  }

  if (error) return <p className="text-red-500">error</p>;

  return (
    <main className="bg-zinc-800 pt-10">
      <FormSearch />
      {/* // <FilterControls/> */}
      <SeriesList series={series}/>

      <SeriePagination  series={series}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        seriesPerPage={seriesPerPage}/>
    </main>
  );
}

export default Series;
