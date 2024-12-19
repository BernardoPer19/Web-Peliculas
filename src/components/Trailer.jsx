import React from 'react'

function Trailer({trailer}) {
  return (
    <div>
      {trailer ? (
  <div>
    <h2>Trailer</h2>
    <iframe
      width="100%"
      height="315"
      src={`https://www.youtube.com/embed/${trailer.key}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
) : (
  <p>No hay trailer disponible.</p>
)}

    </div>
  )
}

export default Trailer
