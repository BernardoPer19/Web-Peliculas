import React from "react";
import { useParams } from "react-router-dom";
import useSearchTVShows from "../hooks/useSearchTv";
import DetallesSeries from "../components/DetailSeries";

function DetailsSeries() {
  const { id } = useParams(); 
  const {
    dataTv,
    loading,
    error,
  } = useSearchTVShows(id);

  const seriesDetails = dataTv[0]; 

  if (loading) {
    return <p>Cargando....</p>;
  }

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <main>
      {seriesDetails ? (
        <DetallesSeries seriesDetails={seriesDetails} /> // Pasa los detalles a DetallesSeries
      ) : (
        <p>No se encontraron detalles</p> // Muestra un mensaje si no hay detalles
      )}
    </main>
  );
}

export default DetailsSeries;
