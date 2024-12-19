import React from "react";

function ActoresSeries({ credits }) {
  return (
    <div className="flex flex-wrap justify-center items-center text-center bg-center mt-12 gap-6">
      {credits && credits.crew && credits.crew.length > 0 && (
        <div className="mt-6">
          <h3 className="text-2xl text-white font-bold mb-4">Directores</h3>
          <div className="flex gap-6 flex-wrap justify-center">
            {credits.crew
              .filter((member) => member.job === "Director")
              .map((director) => (
                <div
                  key={director.id}
                  className="w-[200px] h-[250px] flex flex-col items-center text-center mb-6"
                >
                  {director.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${director.profile_path}`}
                      alt={director.name}
                      className="w-28 h-40 object-cover mb-2 rounded-lg"
                    />
                  ) : (
                    <div className="w-28 h-28 bg-gray-300 rounded-full mb-2"></div>
                  )}
                  <p className="text-white font-semibold">{director.name}</p>
                  <p className="text-white text-sm">Director</p>
                </div>
              ))}
          </div>
        </div>
      )}

      {credits && credits.cast && credits.cast.length > 0 && (
        <div className="mt-6">
          <h3 className="text-2xl text-white font-bold mb-4">Actores</h3>
          <div className="flex gap-6 flex-wrap justify-center">
            {credits.cast.slice(0, 10).map((actor) => (
              <div
                key={actor.id}
                className="flex flex-col items-center text-center w-[200px] h-[250px] mb-6"
              >
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                    className="w-28 h-40 object-cover mb-2 rounded-lg"
                  />
                ) : (
                  <div className="w-28 h-28 bg-gray-300 rounded-full mb-2"></div>
                )}
                <p className="text-sm text-white">{actor.name}</p>
                <p className="text-sm text-white">{actor.character}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ActoresSeries;
