import { useRef } from "react";
import Renderizable from "./Renderizable";

const noRenderizador = ()=>{
    const contador = useRef(0)
    return(
        <>
            <button onClick={ () => contador.current++}>Haz clic para volver a renderizar</button>
            <Renderizable contador={contador.current}/>
        </>
    )
}
export default noRenderizador