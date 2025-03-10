import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const MasPopular = ({canciones})=>{
    if(canciones.length===0) return <p>No hay canciones disponibles</p>
    const cancionPopular = canciones.reduce((max,cancion)=>
        cancion.popularidad > max.popularidad ? cancion :max
    );

    return(
        <div>
            <h2>Cancion mas popular</h2>
            <p>{cancionPopular.nombre} de {cancionPopular.artista}</p>
        </div>
    )
}
export default MasPopular