import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import useMovies from "../hooks/useMovies";

const MainPeliculas = () => {
  const { data: movies, loading, error } = useMovies("movie/popular");

  if (loading)
    return (
      <div className="text-center py-10">
        <p className="text-white">Cargando películas...</p>
 
        <div className="spinner-border animate-spin"></div>
      </div>
    );
  if (error)
    return <p className="text-red-500 text-center py-10">{error}</p>;

  return (
    <main className="max-w-[90%] mx-auto pt-10">
      <h1 className="text-center text-3xl lg:text-4xl text-white py-6">
        Películas Recomendadas
      </h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 30 },
        }}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} className="relative group">
            {/* Imagen del slide */}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="h-[250px] sm:h-[300px] object-cover w-full rounded-lg transition-opacity duration-300 group-hover:opacity-70"
            />

            {/* Información en hover */}
            <div className="absolute bottom-0 left-0 right-0 bg-zinc-900 bg-opacity-90 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-md lg:text-lg font-semibold text-white">
                {movie.title}
              </h2>
              <p className="text-sm text-gray-400">
                <strong>Duración:</strong>{" "}
                {movie.runtime ? `${movie.runtime} min` : "N/A"}
              </p>
              <p className="text-sm text-yellow-400">
                <strong>Rating:</strong> {movie.vote_average}
              </p>
              <button
                className="mt-2 w-full text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
                aria-label={`Ver película ${movie.title}`}
              >
                Ver película
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default MainPeliculas;
