import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ListadoCanciones from "./ListadoCanciones";
import MasPopular from "./MasPopular.jsx";
import FiltradoCanciones from "./FiltradoCanciones.jsx"

const SpotiMain  = () => {
    const [canciones,setCanciones] = useState([])
    useEffect(()=>{
        const fetchCanciones = async()=>{
            try{
                const respuesta = await fetch('../../public/json/Spotify.json')
                const datos = respuesta.json();
                const datosFormato = datos.map(cancion =>({
                    id: cancion.track_id,
                    nombre: cancion.track_name,
                    artista: cancion.track_artist,
                    popularidad: cancion.track_popularity,
                    album: cancion.track_album_name,
                    fecha_lanzamiento:cacion.track_album_release_date,
                    duracion: Math.floor(cancion.track_duration_ms/1000)
                }));
                setCanciones(datos)
            }catch(error){
                console.error('Error al cargar las canciones',error)
            }
        };
        fetchCanciones();
    },[]);
    return(
        <>
            <h1>SpotifyEx</h1>
            <FiltradoCanciones canciones = {canciones}/>
            <MasPopular canciones = {canciones}/>
            <ListadoCanciones canciones = {canciones}/>
        </>
    )
}
