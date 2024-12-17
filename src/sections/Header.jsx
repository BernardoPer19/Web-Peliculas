import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';



import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

import useMovies from "../hooks/useMovies";
import BtnPlay from "../components/BtnPlay";

const Header = () => {
  const { loading, error, data } = useMovies("movie/top_rated");

  if (loading)
    return <p className="text-white text-center">Cargando películas...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

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

  return (
    <main className="w-full">
      <Swiper
        slidesPerView={1}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="relative w-full h-[650px] lg:h-[750px] bg-cover bg-center"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
              }}
            >
              {/* Capa oscura para superposición */}
              <div className="absolute inset-0 bg-black bg-opacity-75"></div>

              <div className="absolute bottom-20 left-0 w-full lg:w-1/2 px-6 lg:px-20 text-white">
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                  {movie.title}
                </h2>
                <p className="text-sm lg:text-lg text-gray-300 mb-6 line-clamp-4">
                  {movie.overview || "Sin descripción disponible."}
                </p>
                <p className="text-sm lg:text-base text-gray-400 mb-4">
                  <strong>Género:</strong>{" "}
                  {movie.genres && movie.genres.length
                    ? movie.genres.map((genre) => genre.name).join(", ")
                    : "N/A"}
                </p>

                <Box
                  sx={{ width: 200, display: "flex", alignItems: "center" }}
                  className="mb-6"
                >
                  <Rating
                    name="text-feedback"
                    value={movie.vote_average / 2}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <Box sx={{ ml: 2 }}>
                    {labels[Math.round(movie.vote_average / 2)] || "N/A"}
                  </Box>
                </Box>

                <div className="flex items-center space-x-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white text-sm lg:text-base"
                    aria-label={`Ver tráiler de ${movie.title}`}
                    onClick={() =>
                      window.open(
                        `https://www.youtube.com/results?search_query=${movie.title} trailer`,
                        "_blank"
                      )
                    }
                  >
                    Ver tráiler
                  </button>
                  <BtnPlay />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Header;
