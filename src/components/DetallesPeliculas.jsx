
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { IoPlay } from "react-icons/io5";


const labels = {
    0.5: "Muy Malo",
    1: "Malo",
    1.5: "Poco Bueno",
    2: "Regular",
    2.5: "Aceptable",
    3: "Bueno",
    3.5: "Muy Bueno",
    4: "Excelente",
    4.5: "Excelente",
    5: "Perfecto",
  };

function DetallesPeliculas({movieDetails}) {
  return (
    <div className="flex flex-col md:flex-row items-center   bg-zinc-900 p-14 justify-center gap-8 text-white">
      <div className="w-full md:w-1/3   ">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>

      {/* Detalles de la película */}
      <div className="flex flex-col gap-4 w-full md:w-2/3">
        <h1 className="text-4xl font-bold">{movieDetails.title}</h1>
        <p className="text-lg">{movieDetails.overview}</p>
        <p>
          <strong>Duración:</strong>{" "}
          {movieDetails.runtime ? `${movieDetails.runtime} minutos` : "N/A"}
        </p>
        <p>
          <Box
            sx={{ width: 200, display: "flex", alignItems: "center" }}
            className="mb-6"
          >
            <Rating
              name="text-feedback"
              value={movieDetails.vote_average / 2}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>
              {labels[Math.round(movieDetails.vote_average / 2)] || "N/A"}
            </Box>
          </Box>
        </p>
        <p>
          <strong>Géneros:</strong>{" "}
          {Array.isArray(movieDetails.genres) && movieDetails.genres.length > 0
            ? movieDetails.genres.map((genre) => genre.name).join(", ")
            : "N/A"}
        </p>
        <p>
          <strong>Fecha de estreno:</strong> {movieDetails.release_date}
        </p>
        <button className="bg-red-700 text-white text-xl font-bold border-none rounded-lg py-3 px-6 uppercase tracking-wide shadow-md transition-all duration-200 ease-in-out hover:bg-red-600 hover:shadow-lg hover:translate-y-0.5 flex items-center justify-center gap-4">
          PLAY NOW <IoPlay size={30} />
        </button>
      </div>
    </div>
  );
}

export default DetallesPeliculas;
