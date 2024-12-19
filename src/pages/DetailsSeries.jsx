import { useParams } from "react-router-dom";
import useSearchTVShows from "../hooks/useSearchTv";
import DetallesSeries from "../components/DetailSeries";
import Trailer from "../components/Trailer";

function DetailsSeries() {
  const { id } = useParams(); 
  const {
    dataTv,
    loading,
    error,
  } = useSearchTVShows(id); // Aquí pasa el id directamente a useSearchTVShows

  // Verificación de que se han recibido detalles de la serie
  const seriesDetails = dataTv && dataTv.length > 0 ? dataTv[0] : null;

  if (loading) {
    return <p>Cargando....</p>;
  }

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <main>
      {seriesDetails ? (
        
        <DetallesSeries seriesDetails={seriesDetails} />
      
      ) : (
        <p>No se encontraron detalles de la serie</p> 
      )}
    </main>
  );
}

export default DetailsSeries;
