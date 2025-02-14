import estilos from './AlternaMensaje.module.css';
import { useState } from 'react';
const AlternaMensaje =()=>{
    const [esVisible, setVisible]=useState(true);
    const alternaVisibilidad =() => {
        setVisible(!esVisible)
    };
    return(
        <>
        <h2>Alterna Mensaje</h2>
        <button onClick={alternaVisibilidad}>
            {esVisible ? "Esconde mensaje":"Muestra mensaje"}
        </button>
        <p className={esVisible? estilos.mensaje : estilos.oculto}>aslkfhalkjsfhdahsdjgh</p>
        </>
    )
}
export default AlternaMensaje