export function FilterControls({ setGenre, setAdult, setYear, setSortBy }) {
    return (
      <div className="filter-controls">
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="">Género</option>
          {/* Aquí puedes agregar una lista de géneros */}
          <option value="28">Acción</option>
          <option value="35">Comedia</option>
          <option value="18">Drama</option>
          {/* Añadir más géneros... */}
        </select>
  
        <label>
          Adulto:
          <input type="checkbox" onChange={(e) => setAdult(e.target.checked)} />
        </label>
  
        <input
          type="number"
          placeholder="Año de estreno"
          onChange={(e) => setYear(e.target.value)}
        />
  
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="popularity.desc">Ordenar por Popularidad</option>
          <option value="vote_average.desc">Ordenar por Calificación</option>
          <option value="first_air_date.desc">Ordenar por Fecha de Estreno</option>
        </select>
      </div>
    );
  }
  