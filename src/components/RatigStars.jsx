import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

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

function RatigStars({movieDetails}) {
  return (
    <div>
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
    </div>
  )
}

export default RatigStars
