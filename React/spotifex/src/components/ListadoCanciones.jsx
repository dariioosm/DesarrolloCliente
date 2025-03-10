import { useEffect, useState } from "react";
import React from "react";

const ListadoCanciones = ({canciones}) =>{
    return(
        <table border='1'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Artista</th>
                <th>Album</th>
                <th>Duracion (s)</th>
            </tr>
            </thead>
            <tbody>
                {canciones.map((cancion)=>{
                    <tr key={cancion.id}>
                    <td>{cancion.id}</td>
                    <td>{cancion.nombre}</td>
                    <td>{cancion.artista}</td>
                    <td>{cancion.album}</td>
                    <td>{cancion.duracion}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}
export default ListadoCanciones