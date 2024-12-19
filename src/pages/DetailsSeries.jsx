import { useParams } from "react-router-dom";
import useSearchTVShows from "../hooks/useSearchTv";
import DetallesSeries from "../components/DetailSeries";
import SeriesSimilares from "../components/SeriesSimilares";
import ActoresSeries from "../components/ActoresSeries";
import TrailerSeries from "../components/TrailerSeries";

function DetailsSeries() {
  const { id } = useParams();
  const { dataTv, loading, error, similares, credits, trailer } =
    useSearchTVShows(id); 

  
  const seriesDetails = dataTv && dataTv.length > 0 ? dataTv[0] : null;

  if (loading) {
    return <p>Cargando....</p>;
  }

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <main className="  bg-zinc-800 min-h-screen p-6">
      {seriesDetails ? (
        <main className="max-w-screen-xl mx-auto flex flex-col items-center justify-center ">
          <DetallesSeries seriesDetails={seriesDetails} />

          <ActoresSeries credits={credits} />
          <TrailerSeries trailer= {trailer} seriesDetails= {seriesDetails}/>
          <SeriesSimilares similares={similares} />
        </main>
      ) : (
        <p>No se encontraron detalles de la serie</p>
      )}
    </main>
  );
}

export default DetailsSeries;
