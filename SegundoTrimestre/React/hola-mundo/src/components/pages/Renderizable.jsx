import { useEffect } from "react";
import { useRef } from "react";

const Renderizable = ()=>{
    const primeraVez= useRef(true);
    useEffect(()=> {primeraVez.current =false})
    const style={color: primeraVez.current ? "red":"blue"}
    const text= primeraVez.current ? "Este es el 1er renderizado":"Este no es el 1er renderizado"
    return <p style={style}>{text}</p>
}
export default Renderizable;