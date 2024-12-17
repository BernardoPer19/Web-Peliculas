import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import useSeries from "../hooks/useSeries";

const MainSeries = () => {
  const { loading, error, data } = useSeries("tv/popular");

  if (loading)
    return <p className="text-white text-center">Cargando series...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <main className="max-w-[90%] mx-auto pt-10">
      <h1 className="text-center text-3xl lg:text-4xl text-white py-6">
        Series Recomendadas
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
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 30 },
        }}
      >
        {data.map((series) => (
          <SwiperSlide key={series.id} className="relative group">
            {/* Imagen del póster */}
            <img
              src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
              alt={series.name}
              className="h-[250px] sm:h-[300px] md:h-[350px] object-cover w-full rounded-lg transition-opacity duration-300 group-hover:opacity-50"
            />

            {/* Contenedor de información */}
            <div className="absolute bottom-0 left-0 right-0 bg-zinc-900 bg-opacity-90 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-md lg:text-lg font-semibold text-white">
                {series.name}
              </h2>
              <p className="text-sm text-gray-400">
                <strong>Episodios:</strong> {series.number_of_episodes || "N/A"}
              </p>
              <p className="text-sm text-yellow-400">
                <strong>Rating:</strong> {series.vote_average}
              </p>
              <button
                className="mt-2 w-full text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
                aria-label={`Ver detalles de ${series.name}`}
              >
                Ver detalles
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default MainSeries;
