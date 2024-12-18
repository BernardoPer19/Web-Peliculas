import React, { useState, useRef, useEffect } from "react";
import { useMyContext } from "../context/movieContext";

function FormSearch() {
  const { search, setSearch } = useMyContext(); // Usar setSearch en lugar de setsearch
  const [errForm, setErrForm] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    console.log("Nuevo valor:", e.target.value); // Depuración
    setSearch(e.target.value);
    if (errForm) setErrForm(false);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      setErrForm(true);
    } else {
      // Aquí puedes manejar el submit, si es necesario
    }
  };

  return (
    <div className="w-full text-center ">
      <form
        onSubmit={handleSubmit}
        className="w-full mb-6 flex gap-3 items-center justify-center"
      >
        <input
          type="text"
          ref={inputRef}
          value={search}
          onChange={handleChange}
          placeholder="Busca una película..."
          className={`px-4 py-3 rounded-xl w-3/4 sm:w-1/2 border ${
            errForm ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 ${
            errForm ? "focus:ring-red-500" : "focus:ring-blue-500"
          }`}
        />
        <input
          type="submit"
          value="Buscar"
          className="bg-red-500 hover:bg-red-700 transition-colors text-white px-4 py-3 rounded-xl cursor-pointer"
        />
      </form>
      {errForm && (
        <p className="text-red-500 text-sm">
          Por favor, escribe el nombre de una película para buscar.
        </p>
      )}
    </div>
  );
}

export default FormSearch;
