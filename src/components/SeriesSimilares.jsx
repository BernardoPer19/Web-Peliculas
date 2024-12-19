import React from 'react';

function SeriesSimilares({ similares }) {
  return (
    <div className='w-full'>
      <h2 className="text-2xl mt-20 text-white font-bold">Series Similares</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 max-sm:grid-cols-2">
        {similares.length > 0 ? 
          similares.slice(0, 8).map((serie) => (
            <li key={serie.id} className="border rounded-lg overflow-hidden shadow-md">
              <img
                className="w-full h-60 object-cover"
                src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
                alt={serie.name}
              />
              <p className="text-center p-2">{serie.name}</p>
            </li>
          )) : (
            <p className='w-full text-center text-white font-bold text-3xl'>No se encontraron series similares</p>
          )   
        }
      </ul>
    </div>
  );
}

export default SeriesSimilares;
