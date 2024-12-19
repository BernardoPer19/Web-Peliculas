import React from "react";

function TrailerSeries({ trailer, seriesDetails }) {
  return (
    <div className="mt-auto">
      {trailer && (
        <div className="mt-6">
          <h2 className="font-semibold p-6 text-white text-6xl">Tráiler</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="980"
              height="605"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={seriesDetails.name}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrailerSeries;
