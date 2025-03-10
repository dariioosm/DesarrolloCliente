import { useState } from "react";
import Renderizable from "./Renderizable";
const RenderizadorSinCambio = () =>{
    const[, setContador]=useState(0)
    return(
        <>
            <button onClick={
                ()=> setContador( (c)=>c+1)
            }> Click para re renderizar </button>
            <Renderizable/>
        </>
    )
}
export default RenderizadorSinCambio