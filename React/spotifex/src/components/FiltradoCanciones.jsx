import React from "react";

const FiltradoCanciones = ({ filtro, setFiltro }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por artista..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)} // ✅ Controlar estado en SpotiMain.jsx
      />
    </div>
  );
};

export default FiltradoCanciones;
