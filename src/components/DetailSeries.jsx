import { IoPlay } from "react-icons/io5";

function DetallesSeries({ seriesDetails }) {

  

  const duration = seriesDetails.episode_run_time && seriesDetails.episode_run_time.length > 0
    ? `${seriesDetails.episode_run_time[0]} minutos`
    : "N/A";

  const genres = Array.isArray(seriesDetails.genres) && seriesDetails.genres.length > 0
    ? seriesDetails.genres.map((genre) => genre.name).join(", ")
    : "N/A";

  const releaseDate = seriesDetails.first_air_date || "N/A";

  return (
    <div className="flex flex-col md:flex-row items-center bg-zinc-900 p-14 justify-center gap-8 text-white">
      <div className="w-full md:w-1/3">
        <img
          src={`https://image.tmdb.org/t/p/w500${seriesDetails.poster_path}`}
          alt={seriesDetails.name}
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>

      {/* Detalles de la serie */}
      <div className="flex flex-col gap-4 w-full md:w-2/3">
        <h1 className="text-4xl font-bold">{seriesDetails.name}</h1>
        <p className="text-lg">{seriesDetails.overview}</p>
        <p>
          <strong>Duración:</strong> {duration}
        </p>
        <p>
          <strong>Géneros:</strong> {genres}
        </p>
        <p>
          <strong>Fecha de estreno:</strong> {releaseDate}
        </p>
        <button className="bg-red-700 text-white text-xl font-bold border-none rounded-lg py-3 px-6 uppercase tracking-wide shadow-md transition-all duration-200 ease-in-out hover:bg-red-600 hover:shadow-lg hover:translate-y-0.5 flex items-center justify-center gap-4">
          PLAY NOW <IoPlay size={30} />
        </button>
      </div>
    </div>
  );
}

export default DetallesSeries;
