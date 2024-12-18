import React from "react";

function ActoresPelis({credits}) {
  return (
    <div className="flex flex-wrap justify-center items-center text-center bg-center mt-12 gap-6">
      {credits && credits.crew && credits.crew.length > 0 && (
        <div className="mt-6 ">
          <div className="flex gap-6 flex-wrap">
            {credits.crew
              .filter((member) => member.job === "Director")
              .map((director) => (
                <div
                  key={director.id}
                  className= " w-[200px] h-[150px] flex flex-col items-center text-center"
                >
                  {director.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${director.profile_path}`}
                      alt={director.name}
                      className="w-26 h-32 object-cover mb-2"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-gray-300 rounded-full mb-2"></div>
                  )}
                  <p className="text-white font-semibold">Director@: {director.name}</p>
                </div>
              ))}
          </div>
        </div>
      )}

      {credits && credits.cast && credits.cast.length > 0 && (
        <div className="mt-6">
          <div className="flex gap-6 flex-wrap">
            {credits.cast.slice(0, 5).map((actor) => (
              <div
                key={actor.id}
                className="flex flex-col items-center text-center   w-[200px]  h-[150px]"
              >
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                    className="w-26 h-32  object-cover mb-2"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-300 rounded-full mb-2"></div>
                )}
                <p  className="text-sm text-white"> {actor.name}</p>
                <p className="text-sm text-white">{actor.character}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ActoresPelis;
